import React, {Component} from "react";
import axios from "axios";

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

    onClickHandler = () => {
        const data = new FormData()
        data.append("file", this.state.selectedFile)
        axios.post("http://localhost:3000/upload", data, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res.statusText)
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
                        <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default UploadTest;