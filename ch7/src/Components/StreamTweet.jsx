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
       });
       window.snapterest={
           numberOfReceivedTweets: 1,
           numberOfDisplayedTweets: 1
       };
    }

    componentDidMount() {
        console.log('[Snapterest] StreamTweet: 3. Running' +
            ' componentDidMount()');
        let componentDOMRepresentation = ReactDOM.findDOMNode(this);
        window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML; // this is our header.
        window.snapterest.tweetHtml= componentDOMRepresentation.children[1].outerHTML; // this is our tweet.
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Snapterest] StreamTweet: 4. Running' +
            ' componentWillReceiveProps()');
        let currentTweetLength = this.props.tweet.text.length;
        let nextTweetLength = nextProps.tweet.text.length;
        let isNumberOfCharactersIncreasing = (nextTweetLength
            > currentTweetLength);
        let headerText;

        this.setState({
            numberOfCharactersIncreasing: isNumberOfCharactersIncreasing
        });

        if (isNumberOfCharactersIncreasing) {
            headerText = 'Number of characters is increasing';
        }
        else {
            headerText = 'Latest public photo from Twitter';
        }

        this.setState({
            headerText: headerText
        });

        window.snapterest.numberOfReceivedTweets++;
    }

    // Determines whether we will call render.
    // If next tweet's length is > 1, we call render.
    shouldComponentUpdate(nextProps) {
        console.log('[Snapterest] StreamTweet: 5. Running' +
            ' shouldComponentUpdate()');
        return (nextProps.tweet.text.length > 1);
    }

    componentWillUpdate() {
        console.log('[Snapterest] StreamTweet: 6. Running' +
            ' componentWillUpdate()');
    }

    componentDidUpdate() {
        console.log('[Snapterest] StreamTweet: 7. Running' +
            ' componentDidUpdate()');
        window.snapterest.numberOfDisplayedTweets++;
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
