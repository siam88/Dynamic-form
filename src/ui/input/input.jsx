import React, { Component } from 'react';
import { Grid, TextField, withStyles } from '@material-ui/core';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'green',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);


export class Input extends Component {
    render() {
        let props = this.props;
        let type = this.props.config.type;

        switch (type) {
            case "title":
                return (
                    <Grid container>

                        <Grid item xs={12} sm={12} md={12}>
                            <h3>{props.label}</h3>
                            <hr />
                        </Grid>

                    </Grid>
                );


            case "text":
                return (
                    <Grid container>

                        <Grid item xs={4} md={4} sm={4}>
                            {props.label}
                        </Grid>

                        <Grid item xs={8} sm={8} md={8}>
                            <CssTextField
                                {...props.config} onChange={(e) => props.inputChangeHandler(props.elementName, e.target.value)}
                            />
                        </Grid>
                    </Grid>
                );

            case "number":
                return (
                    <Grid container>
                        <Grid item xs={4} md={4} sm={4}>
                            {props.label}
                        </Grid>

                        <Grid item xs={8} md={8} sm={8}>
                            <CssTextField
                                {...props.config} onChange={(e) => props.inputChangeHandler(props.elementName, e.target.value)}
                            />
                        </Grid>
                    </Grid>
                )

            case "select":
                return (
                    <Grid container>
                        <Grid item xs={4} md={4} sm={4}>
                            {props.label}
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

            default:
                return ""

        }
    }
}

export default Input;
