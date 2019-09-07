import React, { Component } from 'react';
import productForm from "../../data/product";
import Input from "../../ui/input/input"


class Form extends Component {
    state = {
        productForm: productForm
    }


    productInputChangehandle = (elementname, value) => {
        let productForm = { ...this.state.productForm };
        productForm[elementname].config.value = value;
        this.setState({
            productForm: productForm
        })
    }






    render() {
        let formProductElementArray = [];
        let formProduct = { ...this.state.productForm };
        for (let element in formProduct) {
            let formElement = {
                label: formProduct[element].label,
                config: formProduct[element].config,
                valid: formProduct[element].valid,
                errorMsg: formProduct[element].errorMsg,
                required: formProduct[element].validation.required.valid,
                elementName: element

            };
            formProductElementArray.push(formElement);

        }
        return (
            <div>
                {formProductElementArray.map((e, i) => {
                    return (

                        <Input key={i} config={e.config} label={e.label} valid={e.valid} errorMsg={e.errorMsg} required={e.required} elementName={e.elementName} inputChangeHandler={this.productInputChangehandle} />
                    )
                })}
            </div>
        )
    }
}

export default Form;
