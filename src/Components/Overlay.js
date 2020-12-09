import React, { Component } from 'react'
import Overlay from 'react-image-overlay'
import FastorLogo from '../Assets/Fastor Logo.png'

class OverlayImage extends Component {
    render() {
        return (
            <div className="container" >
                <Overlay
                    url={this.props.mainImage} // required
                    overlayUrl={FastorLogo} // required
                    imageHeight={window.innerHeight / 2}
                    imageWidth={window.innerWidth / 2}
                    position={this.props.position}
                    overlayWidth={100}
                    overlayHeight={100}
                    overlayPadding={10}
                    watermark={false}
                />
            </div>
        );
    }
};

export default OverlayImage;