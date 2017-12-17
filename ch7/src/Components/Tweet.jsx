import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cat_img from '../Static/dummy.jpg';

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
    constructor(props) {
        super(props);
        this.handleImageClick = this.handleImageClick.bind(this);
    }

    handleImageClick() {
        let tweet = this.props.tweet;
        let onImageClick = this.props.onImageClick;
        if(onImageClick) {
            onImageClick(tweet);
        }
    };

    render() {
        let tweet = this.props.tweet;
        let tweetMediaUrl = tweet.media[0].url;

        return (
            <div style={tweetStyle}>
                <img src={tweetMediaUrl} onClick={this.handleImageClick}
                     style={imageStyle} alt={cat_img} />
            </div>
        );
    }
}

Tweet.propTypes = {
    tweet: (properties, propertyName) => {
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

export default Tweet;