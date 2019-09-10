import React, { Component } from 'react'
import styles from "./imageUploader.module.css"

export class Image extends Component {
    render() {
        let props = this.props;
        let height = props.height === undefined ? 100 : props.height;
        let width = props.width === undefined ? 100 : props.width;
        let url = typeof (props.url) != String ? URL.createObjectURL(props.url) : url;
        return (
            <div className={styles.imageView}>
                <img src={url} alt="no image"
                    className={styles.image}
                    style={{ height: height + "px", width: width + "px" }} />
            </div>
        )
    }
}

export default Image
