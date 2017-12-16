import React, { Component } from 'react';
import PropTypes from 'prop-types';

let tweetStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '300px',
    height: '400px',
    margin: '10px'
};

let imageStyle = {
    maxHeight: '400px',
    boxShadow: '0px 1px 1px 0px #aaa',
    border: '1px solid #fff'
};

class Tweet extends Component {
    propTypes = {
        tweet: (properties, propertyName, componentName) => {
            let tweet = properties[propertyName];
            if (!tweet) {
                return new Error('Tweet must be set.');
            }
            if (!tweet.media) {
                return new Error('Tweet must have an image.');
            }
        },
        onImageClick: PropTypes.func
    };

    handleImageClick() {
        let tweet = this.props.tweet;
        let onImageClick = this.props.onImageClick;
        if(onImageClick) {
            onImageClick(tweet);
        }
    };

    render() {
        return (
            <div style={tweetStyle}>
                <img src={tweetMediaUrl} onClick={this.handleImageClick}
                     style={imageStyle} />
            </div>
        );
    }
}

export default Tweet;