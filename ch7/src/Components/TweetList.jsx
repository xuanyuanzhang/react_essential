import React, { Component } from 'react';
import Tweet from './Tweet';

let listStyle = {
    padding: '0'
};

let listItemStyle = {
    display: 'inline-block',
    listStyle: 'none'
};

class TweetList extends Component {

    constructor(props) {
        super(props);
        this.getListOfTweetIds = this.getListOfTweetIds.bind(this);
        this.getTweetElement = this.getTweetElement.bind(this);
    }

    getListOfTweetIds() {
        return Object.keys(this.props.tweets);
    }

    getTweetElement(tweetId) {
        let tweet = this.props.tweets[tweetId];
        let handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;
        let tweetElement;

        if (handleRemoveTweetFromCollection) {
            tweetElement = (
                <Tweet
                    tweet={tweet}
                    onImageClick={handleRemoveTweetFromCollection}
                />
            );
        }
        else {
            tweetElement = <Tweet tweet={tweet} />;
        }

        return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>;
    }

    render() {
        let tweetElements = this.getListOfTweetIds().map(this.getTweetElement);
        return (
            <ul style={listStyle}>
                {tweetElements}
            </ul>
        );
    }
}

export default TweetList;