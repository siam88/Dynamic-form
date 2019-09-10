import React, { Component } from 'react'
import styles from "./imageUploader.module.css"

export class Image extends Component {
    render() {
        let props = this.props;
        let url = typeof (props.url) != String ? URL.createObjectURL(props.url) : url;
        return (
            <div className={styles.imageView}>
                <img src={props.url} alt="no image"
                    className={styles.image}
                    style={{ height: "100px", width: "100px" }} />
            </div>
        )
    }
}

export default Image
