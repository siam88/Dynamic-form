import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import ImageUploader from "../imageUploader/imageUploader"
import styles from "./inputLight.module.css"

import PackagePricing from "../packagePricingBox/packagePricingBox"



export class Input extends Component {

    state = {
        packagePricingModal: this.props.packagePricing && this.props.packagePricing.length ? true : false
    }



    render() {
        let props = this.props;
        let type = this.props.config.type;
        let inputClass = props.valid ? styles.validInput : styles.validInput + " " + styles.invalidInput;
        let label = (
            <p className={styles.label}>
                {props.required && <span style={{ color: "red" }}>*</span>}
                {props.label} :
            </p>
        )

        let errorMassege = (
            <p className={styles.errorMsg} >
                {props.errorMsg}
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
                            <p>{label}</p>
                        </Grid>

                        <Grid item xs={8} sm={8} md={8}>
                            <Grid item xs={12} md={12} sm={12}>
                                <TextField className={inputClass}
                                    {...props.config} onChange={(e) => props.inputChangeHandler(props.elementName, e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sm={4}>
                                {errorMassege}
                            </Grid>

                        </Grid>
                    </Grid>
                );

            case "number":
                return (
                    <Grid container>
                        <Grid item xs={4} md={4} sm={4}>
                            <p>{label}</p>
                        </Grid>

                        <Grid item xs={8} md={8} sm={8}>
                            <Grid item xs={12} md={12} sm={12}>
                                <TextField className={inputClass}
                                    {...props.config} onChange={(e) => props.inputChangeHandler(props.elementName, e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sm={4}>
                                {errorMassege}
                            </Grid>



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
                            <Grid item xs={12} md={12} sm={12}>
                                <select className={inputClass} onChange={e => props.inputChangeHandler(props.elementName, e.target.value)}>
                                    {props.config.options.map((e, i) => (
                                        <option key={i} value={e.value} onChange={(e) => props.inputChangeHandler(props.elementName, e.target.value)}>{e.label}</option>
                                    ))}
                                </select>
                            </Grid>
                            <Grid item xs={4} md={4} sm={4}>
                                {errorMassege}
                            </Grid>



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
                            <Grid item xs={12}>
                                {errorMassege}
                            </Grid>
                            <Grid item xs={12} md={8} sm={8}>
                                <ImageUploader
                                    onFileLoad={props.inputChangeHandler}
                                    elementName={props.elementName} />
                            </Grid>

                        </Grid>
                    </Grid>
                )

            case "packagePricingBox":
                return (
                    <Grid container>
                        <Grid item xs={4} md={4} sm={4}>
                            {label}
                        </Grid>
                        <Grid item xs={8} md={8} sm={8}>
                            <Grid item xs={12}>
                                {errorMassege}
                            </Grid>
                            <Grid item xs={12} md={12} sm={12}>
                                <Button variant="outlined" onClick={() => this.setState({ packagePricingModal: !this.state.packagePricingModal })}>
                                    {this.state.packagePricingModal ? (<span>{"Close package Pricing"}</span>) : (<span>{"Open package Pricing"}</span>)}}
                                </Button>
                                {this.state.packagePricingModal && (
                                    <div style={{ width: "100%" }}>
                                        <PackagePricing
                                            prices={props.config.value}
                                            addPriceHandle={props.addPriceHandle}
                                            deletePriceHandle={props.deletePriceHandle}
                                        />
                                    </div>
                                )}
                            </Grid>

                        </Grid>
                    </Grid>
                )

            default:
                return ""

        }
    }
}

export default Input;
