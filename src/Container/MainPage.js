import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from '../Axios'
import Header from '../Components/Header'
import RestaurantList from '../Components/RestaurantList'

export class MainPage extends Component {

    state = {
        show: false,
        restaurantData: []
    }

    componentDidMount = async () => {
        if (typeof this.props.reduxState === 'undefined') {
            this.props.history.push({
                pathname: '/user/login',
            })
            return
        }
        // console.log(this.props.reduxState)

        const response = await axios.get('m/restaurant?city_id=118&&', {
            headers: {
                Authorization: `Bearer ${this.props.reduxState.token}`
            }
        })
        // console.log(response)




        this.setState({
            show: true,
            restaurantData: response.data
        })
    }

    render() {
        return (
            <div>
                {this.state.show
                    ?
                    <div className="container">
                        <Header name={this.props.reduxState.user_name} />
                        <RestaurantList data={this.state.restaurantData} />
                    </div>
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    reduxState: state
})


const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage)) 
