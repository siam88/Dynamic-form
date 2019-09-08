import React, { Component } from 'react';
import productForm from "../../data/product";
import Input from "../../ui/input/input"
import stylesLight from "./formLight.module.css";
import stylesDark from "./formDark.module.css";
import { Button } from '@material-ui/core';

class Form extends Component {
    state = {
        productForm: productForm,
        styles: stylesLight
    }


    productInputChangehandle = (elementname, value) => {
        let productForm = { ...this.state.productForm };
        productForm[elementname].config.value = value;
        this.setState({
            productForm: productForm
        })
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

                            <Input key={i} config={e.config} label={e.label} valid={e.valid} errorMsg={e.errorMsg} required={e.required} elementName={e.elementName} inputChangeHandler={this.productInputChangehandle} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Form;
