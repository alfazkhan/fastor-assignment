import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import OverlayImage from '../Components/Overlay'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import html2canvas from 'html2canvas';
import FastorLogo from '../Assets/Fastor Logo.png'
import ReactImageProcess from 'react-image-process';


export class RestaurantPage extends Component {


    state = {
        position: 'bottomLeft',
        possiblePositions: ['bottomLeft', 'center', 'bottomRight', 'topLeft', 'topRight'],
        image: null,
        modal: false,
        watermarkCoordinates : [0,0]
    }

    componentDidMount() {
        const mainImage = new Image()
        mainImage.src = this.props.location.data.cover_image

        console.log(this.props.location.data)
    }
    
    handleChange = (e) => {
        
    }

    handleImageSave = () => {
        html2canvas(document.getElementById('overlay-image')).then((canvas) => {
            this.setState({
                image: canvas.toDataURL("image/jpeg", 0.9),
                modal: true
            })
        });
    }

    

    render() {
        if (typeof this.props.location.data === 'undefined') {
            this.props.history.push({
                pathname: '/user/login',
            })
            return false
        }

        return (
            <div className="container mx-auto text-center">
                <a className="btn btn-large btn-danger mt-5" onClick={()=>{this.props.history.goBack()}}>{"<< Back"}</a>
                {/* <div className="row" id="overlay-image">
                    <div className="col-1" />
                    <div className="col-4" >
                        <OverlayImage
                            mainImage={this.props.location.data.cover_image}
                            position={this.state.position}

                        />
                    </div>
                    <div className="col-4" />
                </div> */}

                <div className="container mt-5">
                    <div >
                        <ReactImageProcess
                            mode="waterMark"
                            waterMarkType="image"
                            waterMark={FastorLogo}
                            width={100}
                            height={100}
                            opacity={1}
                            coordinate={[0, 0]}

                        >
                            <img id="overlay-image" src={this.props.location.data.cover_image} />
                        </ReactImageProcess>
                    </div>
                    <a className="btn btn-large btn-primary mt-5" onClick={this.handleImageSave}>Share Image</a>
                </div>
                <div className="container mt-5">
                    

                    {
                        this.state.modal
                            ?
                            <div className="modal fade show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
                                style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Share Image</h5>
                                            
                                        </div>
                                        <div className="modal-body">
                                            <img src={this.state.image} height={400} width={400} />
                                        </div>
                                        <div className="modal-footer">
                                            <a href={this.state.image} download={`${this.props.location.data.restaurant_name}.jpg`}><button type="button" className="btn btn-success" data-dismiss="modal">Save</button></a>
                                           <button type="button" className="btn btn-danger" onClick={()=>this.setState({modal:false})}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(RestaurantPage)
