import React, { useState, useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/firebase';

export const Upload = () => {
  // const [myFiles, setMyFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles[0]) return;

    // eslint-disable-next-line no-console
    console.log('😃', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, open, acceptedFiles } =
    useDropzone({
      onDrop,
      noClick: true
    });

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

  const handleUpload = () => {
    if (acceptedFiles.length === 0) return;

    const storageRef = ref(storage, `/images/${acceptedFiles[0].name}`);
    // eslint-disable-next-line no-console
    console.log('🐥', storageRef);

    const uploadTask = uploadBytesResumable(storageRef, acceptedFiles[0]);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
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
