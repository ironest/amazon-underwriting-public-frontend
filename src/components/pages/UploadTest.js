import React, {Component} from "react";

class UploadTest extends Component {
    state = {
        selectedFile: null
    }
    
    onChangeHandler = (event) => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    render() {
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="offset-md-3-col-md-6">

                        {
                            JSON.stringify(this.state.selectedFile)
                        }

                        <div className="form-group-files">
                            <label>File Upload</label>
                            <input type="file" name="file" onChange={this.onChangeHandler} />
                        </div>
                        <button type="button" className="upload-button" />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default UploadTest;