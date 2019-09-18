import React, { Component } from 'react';
import productForm from "../../data/product";
import varientForm from "../../data/varient";
import Input from "../../ui/input/input"
import stylesLight from "./formLight.module.css";
import stylesDark from "./formDark.module.css";
import { Grid, Button, Tab } from '@material-ui/core';
import Table from "../../component/table/table";



const createTableData = (obj) => {
    let data = [];
    for (let e in obj) {
        if (obj[e].label && obj[e].separetor === undefined) {
            data.push(obj[e].label);
        }
    }
    return data;
}
class Form extends Component {
    state = {
        productForm: productForm,
        styles: stylesLight,
        formIsValid: false,
        varientForm: varientForm,
        varientFormIsValid: false,
        verientArray: []
    }



    // product functions start
    productInputChangehandle = (elementName, value) => {

        let productForm = { ...this.state.productForm };
        productForm[elementName].config.value = value;
        productForm[elementName].touched = true;
        let valid = this.checkValidity(value, productForm[elementName].validation);
        productForm[elementName].valid = valid.valid;
        productForm[elementName].errorMsg = valid.errorMsg;
        this.setState({ formIsValid: this.formIsValid(productForm) })
        this.setState({
            productForm
        })
    }

    productSubmitHandle = e => {
        e.preventDefault();
        let productForm = { ...this.state.productForm };
        let formData = new FormData();

        for (let element in productForm) {
            if (productForm[element].separetor === undefined) {
                formData.append(element, productForm[element].config.value)
            }
        }
    }
    verientSubmitHandle = e => {

        e.preventDefault();
        console.log(this.state.varientForm)
        let varientForm = { ...this.state.varientForm };
        let verientArray = [...this.state.verientArray];
        console.log("verientArray", verientArray);

        let varient = {};
        for (let e in varientForm) {
            if (varientForm[e].separetor === undefined) {
                varient[e] = varientForm[e].config.value;
                console.log("verientArray value", varientForm[e].config.value)

            }
        }
        verientArray.push(varient);

        console.log("verient=>", varient);
        console.log("verientArray=>", verientArray);
        this.setState({
            verientArray
        })
    }
    // product functions end
    deleteImageFromVerientTable = (i, index) => {
        let varientArray = [...this.state.verientArray];
        let varient = varientArray[i];
        varient.image = varient.image.filter((e, i) => i != index);
        varientArray[i] = varient;
        this.setState({ varientArray });
    };
    //verient functions starts
    varientInputChangehandle = (elementName, value) => {

        let varientForm = { ...this.state.varientForm };
        varientForm[elementName].config.value = value;
        varientForm[elementName].touched = true;
        let valid = this.checkValidity(value, varientForm[elementName].validation);
        varientForm[elementName].valid = valid.valid;
        varientForm[elementName].errorMsg = valid.errorMsg;
        this.setState({ varientFormIsValid: this.formIsValid(varientForm) })
        this.setState({
            varientForm
        })
    }


    //verient functions starts


    //common functions starts
    formIsValid = form => {
        let isValid = true;

        for (let e in form) {
            if (form[e].separetor === undefined) {
                if (form[e].valid === false) {
                    isValid = false;
                    break;
                }
            }
        }
        return isValid;
    };

    checkValidity(value, rules) {
        if (rules === undefined) {
            return true;
        }

        let isValid = true;
        let errorMsg = " ";

        if (rules.required.value && rules.type.value !== "file" && rules.type.value !== "array") {
            isValid = value.trim() !== "" && isValid;

        }
        if (rules.type.value === "file") {
            isValid = true;
            return { valid: isValid, errorMsg: errorMsg }
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength.value && isValid;
            errorMsg += value.length < rules.minLength.value ? rules.minLength.msg + "" : "";
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength.value && isValid;
            errorMsg += value.length > rules.maxLength.value ? rules.maxLength.msg : ""
        }

        if (rules.type.value === Number) {
            isValid = value !== NaN;

            if (isValid && rules.min) {
                isValid = value >= rules.min.value && isValid;
                errorMsg += value < rules.min.value ? rules.min.msg + "" : ""
            }
            if (isValid && rules.max) {
                isValid = value <= rules.max.value && isValid;
                errorMsg += value >= rules.max.value ? rules.max.msg + "" : ""
            }

        }
        if (rules.type.value === Array) {
            isValid = value.length > 0 && isValid;
        }
        return { valid: isValid, errorMsg: errorMsg }
    }


    //common functions end

    addPriceHandle = (piece, price) => {
        let varientForm = { ...this.state.varientForm }
        let packagePrice = { piece, price };

        varientForm.packagePrice.config.value.push(packagePrice);
        this.setState({ varientForm });
    }

    deletePriceHandle = (index) => {
        let varientForm = { ...this.state.varientForm };
        let packagePrice = varientForm.packagePrice.config.value
        packagePrice = packagePrice.filter((e, i) => i !== index)
        varientForm.packagePrice.config.value = packagePrice;
        this.setState({ varientForm })
    }

    render() {
        let styles = this.state.styles;
        let formProductElementArray = [];
        let productform = { ...this.state.productForm };
        for (let element in productform) {
            let formElement = {
                label: productform[element].label,
                config: productform[element].config,
                valid: productform[element].touched ? productform[element].valid : true,
                errorMsg: productform[element].errorMsg,
                required: productform[element].validation.required.value,
                elementName: element

            };
            formProductElementArray.push(formElement);

        }

        let varientFormElementArray = [];
        let varientForm = { ...this.state.varientForm };

        for (let element in varientForm) {
            let varients = {
                label: varientForm[element].label,
                config: varientForm[element].config,
                valid: varientForm[element].touched ? varientForm[element].valid : true,
                errorMsg: varientForm[element].errorMsg,
                required: varientForm[element].validation.required.value,
                elementName: element
            }
            varientFormElementArray.push(varients)
        }

        return (
            <Grid container>
                <div className={styles.form}>

                    <Button onClick={() => this.setState({ styles: stylesDark })}>Dark</Button>
                    <Button onClick={() => this.setState({ styles: stylesLight })}>Light</Button>
                    <div className={styles.root}>
                        {formProductElementArray.map((e, i) => {
                            return (

                                <Input
                                    key={i}
                                    config={e.config}
                                    label={e.label}
                                    valid={e.valid}
                                    errorMsg={e.errorMsg}
                                    required={e.required}
                                    elementName={e.elementName}
                                    inputChangeHandler={this.productInputChangehandle}

                                />
                            )
                        })}
                    </div>
                    <br />
                    <div className={styles.root}>
                        {varientFormElementArray.map((e, i) => {
                            return (
                                <Input
                                    key={i}
                                    config={e.config}
                                    label={e.label}
                                    valid={e.valid}
                                    errorMsg={e.errorMsg}
                                    required={e.required}
                                    elementName={e.elementName}
                                    inputChangeHandler={this.varientInputChangehandle}
                                    styles={this.state.style}
                                    addPriceHandle={this.addPriceHandle}
                                    deletePriceHandle={this.deletePriceHandle} />
                            )
                        })}
                    </div>
                    <Grid item xs={12} md={12} sm={12} >
                        <Button style={{ left: "50%", marginBottom: "10px" }} variant="outlined" onClick={this.verientSubmitHandle} disabled={!(this.state.varientFormIsValid)} >Verient Submit</Button>

                    </Grid>


                    <Grid item xs={12} md={12} sm={12}>
                        <Table
                            tableData={this.state.verientArray}
                            tableHeaders={createTableData(this.state.varientForm)}
                            deleteImage={this.deleteImageFromVerientTable}
                        />
                    </Grid>


                    <Grid item xs={12} md={12} sm={12}>
                        <Button style={{ left: "50%" }} variant="outlined" onClick={(e) => this.productSubmitHandle(e)} disabled={!(this.state.formIsValid && this.state.varientFormIsValid)} >Form Submit</Button>

                    </Grid>
                </div>
            </Grid>

        )



    }
}

export default Form;
