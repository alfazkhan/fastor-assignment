import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from '../Axios';
import { connect } from 'react-redux'




export class Login extends Component {
    state = {
        otpField: false,
        phone: '',
        otp: ''
    }
    

    phoneNumberHandler = (e) => {
        const value = e.target.value
        if (value.length > 10) {
            return
        }
        var regex = /^[a-zA-Z]+$/;
        if (value.match(regex)) {
            return
        }

        this.setState({
            phone: value
        })
    }

    OTPHandler = (e) => {
        const value = e.target.value
        if (value.length > 6) {
            return
        }
        

        this.setState({
            otp: value
        })
    }

    phoneSubmitHandler = () => {
        this.setState({
            otpField: true
        })
    }

    verifyOTP = () => {
        if (this.state.otp === "123456") {
            this.submitHandler()
        }else{
            alert('Wrong OTP try 123456')
        }
    }

    submitHandler = async () => {
        const data={
            "phone": this.state.phone,
            "otp": this.state.otp,
            "dial_code": "+91"
        }
        // const data={
        //     "phone": "9818979450",
        //     "otp": "123456",
        //     "dial_code": "+91"
        // }
        const response = await axios.post('/pwa/user/login',data)
        if(response.status === 200){
            this.props.onUserLogin(response.data.data)
            this.props.history.push('/')
        }

    }

    render() {
        return (
            <div className="container">
                
                <div style={{ marginTop: window.innerHeight / 3 }}>
                    <div >
                        {/* <CardActionArea> */}
                            <CardContent>
                                <h1 className="text-center text-primary">Login</h1>
                            </CardContent>
                            <form noValidate autoComplete="off" className="mx-5 my-5">
                                <TextField id="standard-basic" className="my-3" label="Phone Number(+91)" fullWidth onChange={this.phoneNumberHandler} value={this.state.phone} />
                                {this.state.otpField
                                    ? <TextField id="standard-basic" label="OTP" onChange={this.OTPHandler} fullWidth value={this.state.otp} />
                                    : null}
                            </form>
                        {/* </CardActionArea> */}
                        <CardActions className="text-center mx-auto">
                            {
                                this.state.otpField
                                    ?
                                    <Button size="small" color="primary" variant="contained" className="text-center mx-auto" onClick={this.verifyOTP}>
                                        Verify!
                                    </Button>
                                    :

                                    this.state.phone.length === 10
                                        ?
                                        < Button size="small" color="primary" variant="contained" className="text-center mx-auto btn-success" onClick={this.phoneSubmitHandler}>
                                            Login
                                        </Button>
                                        : null

                            }

                        </CardActions>
                    </div>
                    {/* <div className="text-center mt-5">New User? <Link to="/user/register" ><h6>Sign Up</h6></Link></div> */}
                    {/* <button className="btn btn-secondary" onClick={this.submitHandler}>Auto Login</button> */}
                </div>
            </div >
        )
    }
}


const mapStateToProps = (state) => ({
    reduxState: state
})

const mapDispatchToProps = dispatch => {

  return {
    onUserLogin: (data) => dispatch({
      type: "USER_LOGIN",
      data: data
    }),
    
  }

}

export default connect(null, mapDispatchToProps)(withRouter(Login))
