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
                <Grid container spacing={3}>


                    <Grid item xs={12} sm={12} md={12}>
                        <h3 style={{ background: "whitesmoke" }}>ADD PACKAGE PRICING</h3>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} >
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
                    <Grid item xs={12} sm={6} md={6}>
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

                    <Grid item xs={12} sm={12} md={12}>
                        <Button variant="outlined" style={{ left: "40%" }} onClick={() => this.props.addPriceHandle(this.state.piece, this.state.price)}>ADD</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        {this.props.prices.map((e, i) => (
                            <Grid container spacing={2} key={i}>
                                <Grid item xs={4} sm={6} md={4}>
                                    <p><b>{e.piece}</b> PIECE{" "}</p>
                                </Grid>

                                <Grid item xs={4} sm={6} md={4}>
                                    <p><b>{e.price}</b> BDT{" "}</p>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Button variant="outlined" color="secondary" onClick={() => this.props.deletePriceHandle(i)}>DELETE</Button>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Paper>

        )

    }
}

export default PackagePricingBox;