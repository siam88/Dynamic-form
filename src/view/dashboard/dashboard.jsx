import React, { Component } from 'react'

import Sidebar from '../../component/sidebar/sidebar';

export default class Dashboard extends Component {
    render() {
        return (
            <Sidebar onLogout={this.props.onLogout} />
        )
    }
}

