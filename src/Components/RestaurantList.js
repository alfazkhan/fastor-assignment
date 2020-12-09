import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import { withRouter } from 'react-router-dom';


export class RestaurantList extends Component {
    componentDidMount() {
        
    }

    restaurantPageHandler=(restaurant)=>{
        this.props.history.push({
            pathname: `Restaurant/${restaurant.restaurant_name}`,
            data: restaurant
        })
        console.log(restaurant)
    }

    render() {
        return (
            <div className="container mt-5">
                <h1 className="text-center text-primary my-5"><em><u>Restuarants</u></em></h1>
                {
                    this.props.data.map(restaurant => {
                        return (
                            <Card className="my-3 mx-auto" onClick={this.restaurantPageHandler.bind(this,restaurant)}>
                                <div className="row">
                                    <div className="col-4">
                                        <CardMedia
                                            style={{ height: 200,borderRadius:10 }}
                                            image={restaurant.thumbnail_image}
                                            title="Live from space album cover"
                                        />
                                    </div>
                                    <div className="col-8">
                                        <CardContent >
                                            <Typography component="h5" variant="h5">
                                                <strong>{restaurant.restaurant_name}</strong>
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {restaurant.address_complete}
                                            </Typography>
                                            <div className="row">
                                                <div className="mt-5 col-6">
                                                    <i class="fa fa-star text-warning" aria-hidden="true"></i>
                                                    <strong>
                                                        &nbsp;{restaurant.rating['restaurant_avg_rating']}
                                                    </strong>
                                                </div>
                                                <div className="mt-5 col-6">
                                                    <i class="fa fa-coffee text-success" aria-hidden="true"></i>
                                                    <strong>
                                                        &nbsp;₹ {restaurant.avg_cost_for_two}
                                                    </strong>
                                                </div>
                                            </div>
                                            <div className="row">
                                                
                                                <div className="col-6 text-muted font-italic">
                                                    Popularity
                                                </div>
                                                <div className="col-6 text-muted font-italic">
                                                    Cost for Two
                                                </div>
                                            </div>
                                            
                                        </CardContent>
                                    </div>
                                </div>
                            </Card>
                        )
                    })
                }

            </div>
        )
    }
}

export default withRouter(RestaurantList)
