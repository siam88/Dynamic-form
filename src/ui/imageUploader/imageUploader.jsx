import React, { Component } from 'react'
import styles from "./imageUploader.module.css"
export class ImageUploader extends Component {
    render() {
        return (
            <div>
                <h4 className={styles.ImageHeader}>drag an drop your image here</h4>
                <div className={styles.container}>
                    <input type="file" className={styles.input} />

                </div>
            </div>
        )
    }
}

export default ImageUploader
