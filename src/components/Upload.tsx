import React, { useState, useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/firebase';

export const Upload = () => {
  const [myFiles, setMyFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [src, setSrc] = useState('');

  const handlePreview = (file: File[]) => {
    if (file.length === 0) return;

    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      setSrc(reader.result as string);
    };
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      setMyFiles([...myFiles, ...acceptedFiles]);
      handlePreview(acceptedFiles);
    },
    [myFiles]
  );

  const { getRootProps, getInputProps, isDragActive, open, acceptedFiles } =
    useDropzone({
      onDrop,
      noClick: true
    });

  const handleUpload = () => {
    if (acceptedFiles.length === 0) return;

    const storageRef = ref(storage, `/images/${acceptedFiles[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, acceptedFiles[0]);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const uploadProgress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(uploadProgress);
      },
      (err) => {
        // eslint-disable-next-line no-console
        console.log('👻', err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // eslint-disable-next-line no-console
          console.log('File available at', downloadURL);
        });
      }
    );
  };

  // 画像情報
  const files = useMemo(
    () =>
      acceptedFiles.map((file) => (
        <li key={file.name}>
          {file.name} - {file.size} bytes
        </li>
      )),
    [acceptedFiles]
  );

  return (
    <div>
      <div
        {...getRootProps()}
        className="w-64 h-64 border border-dotted border-gray-300"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag & drop some files here, or click to select files</p>
        )}
        <button type="button" onClick={open}>
          Select files
        </button>
        {acceptedFiles.length !== 0 && (
          <div>
            {acceptedFiles.map((file: File) => (
              <React.Fragment key={file.name}>
                {src && <img src={src} alt="" />}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      <div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </div>
      <button type="submit" onClick={handleUpload}>
        Upload
      </button>
      <h3> Uploaded {progress}</h3>
    </div>
  );
};
