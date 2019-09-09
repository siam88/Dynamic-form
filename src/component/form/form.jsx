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
        let valid = this.checkValidity(value, productForm[elementName].validation);
        productForm[elementName].valid = valid.valid;
        productForm[elementName].errorMsg = valid.errorMsg;
        this.setState({ formIsValid: this.formIsValid(productForm) })
        this.setState({
            productForm: productForm
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
                form[e].isValid = false;
                break;
            }
        }
        return isValid
    };

    checkValidity(value, rules) {
        if (rules === undefined) {
            return true;
        }

        let isValid = true;
        let errorMsg = " ";

        if (rules.required.value && rules.required.value !== "file" && rules.required.value !== "array") {
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





    render() {
        let styles = this.state.styles;
        let formProductElementArray = [];
        let formProduct = { ...this.state.productForm };
        for (let element in formProduct) {
            let formElement = {
                label: formProduct[element].label,
                config: formProduct[element].config,
                valid: formProduct[element].valid,
                errorMsg: formProduct[element].errorMsg,
                required: formProduct[element].validation.required.value,
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
