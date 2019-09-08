import React, { Component } from 'react';
import { Grid, TextField, withStyles } from '@material-ui/core';
import ImageViewer from "../imageUploader/imageUploader"

export class Input extends Component {
    render() {
        let props = this.props;
        let type = this.props.config.type;

        let label = (
            <p>
                {props.required && <span style={{ color: "red" }}>*</span>}
                {props.label} :
            </p>
        )

        switch (type) {
            case "title":
                return (
                    <Grid container>

                        <Grid item xs={12} sm={12} md={12}>
                            <h3>{props.label} :</h3>
                            <hr />
                        </Grid>

                    </Grid>
                );


            case "text":
                return (
                    <Grid container>

                        <Grid item xs={4} md={4} sm={4}>
                            {label}
                        </Grid>

                        <Grid item xs={8} sm={8} md={8}>
                            <TextField
                                {...props.config} onChange={(e) => props.inputChangeHandler(props.elementName, e.target.value)}
                            />
                        </Grid>
                    </Grid>
                );

            case "number":
                return (
                    <Grid container>
                        <Grid item xs={4} md={4} sm={4}>
                            {label}
                        </Grid>

                        <Grid item xs={8} md={8} sm={8}>
                            <TextField
                                {...props.config} onChange={(e) => props.inputChangeHandler(props.elementName, e.target.value)}
                            />
                        </Grid>
                    </Grid>
                )

            case "select":
                return (
                    <Grid container>
                        <Grid item xs={4} md={4} sm={4}>
                            {label}
                        </Grid>

                        <Grid item xs={8} md={8} sm={8}>

                            <select>
                                {props.config.options.map((e, i) => (
                                    <option key={i} value={e.value} onChange={(e) => props.inputChangeHandler(props.elementName, e.target.value)}>{e.label}</option>
                                ))}
                            </select>
                        </Grid>
                    </Grid>
                )


            case "file":
                return (
                    <Grid container>
                        <Grid item xs={4} md={4} sm={4}>
                            {label}
                        </Grid>
                        <Grid item xs={8} md={8} sm={8}>
                            <ImageViewer />
                        </Grid>
                    </Grid>
                )

            default:
                return ""

        }
    }
}

export default Input;
