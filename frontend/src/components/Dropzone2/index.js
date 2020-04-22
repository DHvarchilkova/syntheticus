
import React from "react";
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';


const MyUploader = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta, file }) => {
    const token = localStorage.getItem('token')
    const headers = {Authorization: `Bearer ${token}`}
    const body = new FormData()
    body.append('dataset', file)
    localStorage.setItem('lastUploadedFile', file.name)
    return { url: 'https://syntheticus.propulsion-learn.ch/backend/api/datasets/upload', headers, body } }

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      inputContent={'Drag a dataset file here for immediate upload.'}
      styles={{
        dropzoneActive: {background: '-webkit-linear-gradient(#63c3ff, #8088fd)'}
      }}
    />
  )
}

export default MyUploader;
