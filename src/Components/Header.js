import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export class Header extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            style={{ height: 100 }}
                            image="https://images.pexels.com/photos/5623947/pexels-photo-5623947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="Contemplative Reptile"
                        >
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="h2" className="text-center">
                                Welcome! <strong className="text-success">{this.props.name}</strong>
                            </Typography>
                            </CardContent>
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </div>
        )
    }
}

export default Header
