import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const FileUpload = ({ onFileUpload }) => {

  const onDrop = useCallback((acceptedFiles) => {
    const formDate = new FormData();
    FormData.append('file', acceptedFiles[0]);
    onFileUpload(formDate);
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop});

  return (
    <div {...getRootProps()} className='dropzone'>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}

export default FileUpload