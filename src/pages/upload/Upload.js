import React, { Component } from 'react';
import FileSelection from './FileSelection';
import { Redirect } from 'react-router-dom';

import api from '../../utils/api.js';
import '../../assets/upload.css';
import '../../App.css';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            files: null,
            fileName: 'Upload Algorithm from your Computer',
            uploadButtonStatus: 'Select File Above'
        };
        this.handleFileSelection = this.handleFileSelection.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileSelection = (e) => {
        e.preventDefault();
        e.persist();
        const uploadedFile = e.target.files[0];
        let fileName = 'Unknown Filename';
        if (e.target.files[0].name) {
          fileName = e.target.files[0].name;
        }
        this.setState({ files: uploadedFile, fileName, uploadButtonStatus: `You have selected ${fileName}` });
    };

    handleFileUpload = async (e) => {
        e.preventDefault();
        e.persist();
        if (this.state.files != null) {
            this.setState({ uploadButtonStatus: 'Uploading...' });
            console.log('Sending file to backend');
            const formData = new FormData();
            formData.append('strategy_file', this.state.files);
            console.log('fileName', e.target);
            // formData.append('name',  e.target.description.value);
            // formData.append('description', e.target.description.value);
            // const response;
            // // const response = await api.PostFile('/algofile/', formData);
            // console.log(response);
            // if (response.status === 200) {
            //     this.setState({
            //         files: null,
            //         fileName: null,
            //         uploadButtonStatus: 'Uploaded!'
            //     });
            // } else {
            //     this.setState({
            //         files: null,
            //         fileName: null,
            //         uploadButtonStatus: 'Error Uploading File'
            //     });
            // }
        } else {
            console.log('No file chosen to upload');
        }
    };

    render() {
        return (
            <div className="con">
            <h3>Upload an Algorithm</h3>
            <form onSubmit={this.handleFileSelection} className="algo-upload-con">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" required/>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" placeholder="Description" required/>
                <input className="file-upload" type="file" name="file" id="file" onChange={this.handleFileSelection}/>
                <label htmlFor="file">{this.state.fileName}
                File Upload</label>
                <br/>
                {this.state.file &&
                  <button id="upload-button">
                    {this.state.uploadButtonStatus}
                  </button>
                }
                <button id="upload-button">
                  boop
                </button>
            </form>
            </div>
        );
    }
}

export default Upload;
