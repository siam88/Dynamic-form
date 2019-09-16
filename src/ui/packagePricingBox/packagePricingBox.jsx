import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import styles from "./packagePricingBoxLight.module.css";
import TextField from "@material-ui/core/TextField";


class PackagePricingBox extends Component {
    state = {
        piece: 0,
        price: 0
    }

    render() {
        return (
            <Paper>
                <Grid container spacing={24}>


                    <Grid item xs={12} sm={12} md={12}>
                        <h3 style={{ background: "whitesmoke" }}>ADD PACKAGE PRICING</h3>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} >
                        <TextField
                            id="standard-number"
                            label="Piece"
                            value={this.state.piece}
                            onChange={e => this.setState({ piece: e.target.value })}
                            type="number"
                            InputLabelProps={{
                                shrink: true
                            }}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6} sm={8} md={6}>
                        <TextField
                            id="standard-number"
                            label="Price"
                            value={this.state.price}
                            onChange={e => this.setState({ price: e.target.value })}
                            type="number"
                            InputLabelProps={{
                                shrink: true
                            }}
                            margin="normal"
                        />
                    </Grid>

                </Grid>
            </Paper>

        )

    }
}

export default PackagePricingBox;