import React, { Component } from 'react';
import SnapkiteStreamClient from 'snapkite-stream-client';
import StreamTweet from './StreamTweet';
import Header from './Header';

class Stream extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tweet: null
        };
        this.handleNewTweet = this.handleNewTweet.bind(this);
    }

    componentDidMount() {
        SnapkiteStreamClient.initialiseStream(this.handleNewTweet);
    }

    componentWillUnmount() {
        SnapkiteStreamClient.destroyStream();
    }

    handleNewTweet(tweet) {
        this.setState({
            tweet: tweet
        });
    }

    render() {
        let tweet = this.state.tweet;

        if (tweet) {
            return (
                <StreamTweet
                    tweet={tweet}
                    onAddTweetToCollection={this.props.onAddTweetToCollection}
                />
            );
        }

        return (
            <Header text="Waiting for public photos from Twitter..."/>
        )
    }
}
export default Stream;
