import React, { Component } from 'react';
import productForm from "../../data/product";
import Input from "../../ui/input/input"
import stylesLight from "./formLight.module.css";
import stylesDark from "./formDark.module.css";
import { Button } from '@material-ui/core';

class Form extends Component {
    state = {
        productForm: productForm,
        styles: stylesLight,
        formIsValid: false
    }


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

    productSubmitHandle = e => {
        e.preventDefault();
        let productForm = { ...this.state.productForm };
        //let product = {};
        let formData = new FormData();

        for (let element in productForm) {
            // product[element] = productForm[element].config.value;
            if (productForm[element].separetor === undefined)
                formData.append(element, productForm[element].config.value);
        }
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
        return (
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
                                inputChangeHandler={this.productInputChangehandle} />
                        )
                    })}
                </div>
                <br />
                <Button style={{ width: "15%" }} variant="outlined" onClick={(e) => this.productSubmitHandle(e)} disabled={!(this.state.formIsValid)} >Submit</Button>
            </div>
        )
    }
}

export default Form;
