import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet'
import Header from './Header'

class StreamTweet extends Component {
    constructor(props) {
        super(props);
        console.log('[Snapterest] StreamTweet: 1. Running' +
            ' getInitialState()');
        this.state = {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        };
    }

    // Good place to initialize global variables
    componentWillMount() {
       console.log('[Snapterest] StreamTweet: 2. Running' +
            ' componentWillMount()');
       this.setState({
           numberOfCharactersIsIncreasing: true,
           headerText: "Latest public photo from Twitter"
       }) ;
       window.snapterest={
           numberOfReceivedTweets: 1,
           numberOfDisplayedTweets: 1
       };
    }

    componentDidMount() {
        console.log('[Snapterest] StreamTweet: 3. Running' +
            ' componentDidMount()');
        let componentDOMRepresentation = ReactDOM.findDOMNode(this);
        window.snapterest.headerHtml = componentDOMRepresentation.
            children[0].outerHTML; // this is our header.
        window.snapterest.tweetHtml= componentDOMRepresentation.
            children[1].outerHTML; // this is our tweet.
    }

    // Good place to remove global variables
    componentWillUnmount() {
        console.log('[Snapterest] StreamTweet: 8. Running' +
            ' componentWillUnMount()');
        delete window.snapterest;
    }

    render() {
        console.log('[Snapterest] StreamTweet: Running render()');
        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection}
                />
            </section>
        )
    }
}

export default StreamTweet;
