import React, { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

export const Upload = () => {
  const onDrop = useCallback((acceptedFiles) => {
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

  return (
    <>
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
    </>
  );
};
