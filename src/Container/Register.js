import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';


export class Register extends Component {


    render() {
        return (
            <div>
                <h1>Register</h1>
                <Button variant="contained">Register</Button>
                <Button variant="contained" color="primary" onClick={() => this.props.history.push({
                    pathname: '/user/login',
                })}>
                    Login
                </Button>
            </div>
        )
    }
}

export default withRouter(Register)
