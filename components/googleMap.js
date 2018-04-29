import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    <div style={{fontWeight:'bold',width:'200px'}}>
        <img 
            src="https://aiban.oss-cn-beijing.aliyuncs.com/logo.png"
            alt="image"
            style={{height:'30px',width:'40px'}} />
        <div>
         {text}
        </div>
    </div>);

export default class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 28.197084,
      lng: 113.005593
    },
    zoom: 18
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div 
        style={{ height: '300px',border:'1px solid',boxShadow:'1px 1px 30px grey'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAxrnvt6230ax3iHNqf5ruxlYrUFAfvjmI'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={28.197084}
            lng={113.005593}
            text={'湖南爱邦正明'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
