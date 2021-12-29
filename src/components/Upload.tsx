import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export const Upload = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
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
    </div>
  );
};
