import React, { Component } from 'react'
import styles from "./imageUploader.module.css"

export class Image extends Component {
    state = {
        deleteButtonStyle: styles.hideDeleteButton
    }

    mouseEnterInImage = () => {
        this.setState({
            deleteButtonStyle: styles.visibleDeleteButton
        })
    }
    mouseLeaveTheImage = () => {
        this.setState({
            deleteButtonStyle: styles.hideDeleteButton
        })
    }
    render() {
        let props = this.props;
        let height = props.height === undefined ? 100 : props.height;
        let width = props.width === undefined ? 100 : props.width;
        let url = typeof (props.url) != String ? URL.createObjectURL(props.url) : url;
        return (
            <div className={styles.imageView} onMouseEnter={this.mouseEnterInImage} onMouseLeave={this.mouseLeaveTheImage}>
                <button id="deletebutton" className={this.state.deleteButtonStyle} onClick={props.deleteImage}>X</button>

                <img src={url} alt="no image"
                    className={styles.image}
                    style={{ height: height + "px", width: width + "px" }} />
            </div>
        )
    }
}

export default Image
