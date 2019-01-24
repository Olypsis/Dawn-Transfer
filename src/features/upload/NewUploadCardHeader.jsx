import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

// Material-ui
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

// // DropZone Config
// Max File Upload Size: 100
const fileMaxSize = 100 * 1000000;

// Dropzone Styles
const dropzoneStyle = {
	width: '100%',
	height: 100,
};
const dropzoneActiveStyle = {
	borderStyle: 'solid',
	borderColor: '#D8DEE9',
	backgroundColor: '#8AC0CF',
};

const styles = theme => ({
	uploadCardHeader: {
		width: '100%',
		padding: '10px 20px',
		'text-align': 'center',
		display: 'block',
		backgroundColor: '#f3f7ff',
		color: '#ffffff',
		'z-index': -1000,
	},
	uploadCardHeaderDisplayText: {
		'z-index': 1000,
	},
});

class UploadCardHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fileError: '',
		};
	}

	handleOnDrop = async (accepted, rejected, links) => {
		// Handle file rejection
		if (rejected.length !== 0) {
			const fileError = 'File Rejected: ' + rejected[0].name;
			console.log(new Error(fileError));
			return this.setState({ fileError });
		}

		// Handle file acceptance
		const file = accepted[0];

		try {
			await this.readFile(file);
			this.setState({ fileError: '' });
		} catch (err) {
			console.log(err);
		}
	};

	readFile = async file =>
		new Promise((resolve, reject) => {
			try {
				// Create FileReader and read file
				const reader = new FileReader();
				console.log('readFile: about to read file...');
				reader.readAsArrayBuffer(file);
				reader.onloadend = async () => {
					// Convert file from blob to buffer
					const fileBuffer = Buffer.from(reader.result);
					console.log('readFile: file read!');

					// Log Upload File Success
					await this.props.onFileUploaded(
						file.name,
						file.type,
						file.preview,
						fileBuffer,
					);

					await this.props.encryptAndAddFile(fileBuffer, file.name);

					resolve(true);
				};
			} catch (err) {
				reject('readFile:', new Error(err));
			}
		});


	onMouseOver() {
		alert("mouse over")
	}

	render() {
		console.log('Props', this.props);
		const { classes, upload } = this.props;
		const { ipfsAddedFile } = upload;
		// Get latest addedFile from props
		let renderUploadContent;

		// Change Display based on status of uploaded file
		if (ipfsAddedFile.filePath) {
			renderUploadContent = (
				<div>
					<p className="file-added-confirmation">
						File Added! {ipfsAddedFile.filePath}
					</p>
					<span> (Click to add another) </span>
				</div>
			);
		} else {
			renderUploadContent = (
				<div>
					<p> + Add your File </p>
				</div>
			);
		}

		return (
			<CardContent className={classes.uploadCardHeader} onMouseOver={this.onMouseOver}>
				<Dropzone
					onDrop={this.handleOnDrop}
					maxSize={fileMaxSize}
					multiple={false}
					style={dropzoneStyle}
					activeStyle={dropzoneActiveStyle}
				>
					<div className="centered">
						{/* TODO: Errors
            <p className="errors">
              {this.state.errors.file
                ? this.state.errors.file
                : null}
            </p>	
          */}
						<div className="upload-card-header">{renderUploadContent}</div>
					</div>
				</Dropzone>
			</CardContent>
		);
	}
}

UploadCardHeader.propTypes = {
	encryptAndAddFile: PropTypes.func.isRequired,
	onFileUploaded: PropTypes.func.isRequired,
	upload: PropTypes.object.isRequired,
};

export default UploadCardHeader;
