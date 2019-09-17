import React, { Component } from 'react'
import { Button, Grid } from '@material-ui/core'

export default class Auth extends Component {
    state = {
        value: ""
    }
    render() {
        return (
            <Grid container spacing={5} >
                <Grid item xs={12} sm={12} md={12} >
                    <h1 >LOG IN</h1>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    <input type="text" value={this.state.value}
                        onChange={e => this.setState({ value: e.target.value })} />
                    <Button variant="outlined" onClick={() => this.props.onAuthentication(this.state.value)}>SUBMIT</Button>
                </Grid>

            </Grid>
        )
    }
}