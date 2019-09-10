import React, { Component } from 'react'
import styles from "./imageUploader.module.css"
import { Grid, Button } from '@material-ui/core'
import Image from "./image"
const onDragStyle = {
    backgroundColor: "#87bce8",
    border: "3px dotted rgb(123, 132, 184)"
}
export class ImageUploader extends Component {
    state = {
        onDragStyle: {},
        images: []
    }

    onFileLoad = (e) => {
        e.preventDefault();
        this.setState({ onDragStyle: {} });
        let images = [...this.state.images];
        e.currentTarget.files.length && images.push(e.currentTarget.files[0]);
        this.setState({
            images
        })
        console.log(this.state.images);

    }
    render() {
        return (
            <Grid container>
                <h4 className={styles.imageUploadHeader}>Drag and drop the image here</h4>
                <Grid item xs={12} sm={12} md={8} className={styles.container} style={this.state.onDragStyle}>
                    <input
                        type="file"
                        ref={
                            input => (this.fileInput = input)
                        }
                        className={styles.input}
                        onDragEnter={() => this.setState({ onDragStyle })}
                        onDragLeave={() => this.setState({ onDragStyle: {} })}
                        onDrop={() => this.setState({ onDragStyle: {} })}
                        onChange={this.onFileLoad} />
                </Grid>
                <Grid item xs={11} sm={11} md={7}>
                    <Button variant="contained" className={styles.browseButton}>Browse</Button>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    {this.state.images.map((e, i) => (<Image url={e} key={i} index={i} />))}
                </Grid>
            </Grid>
        )
    }
}

export default ImageUploader
