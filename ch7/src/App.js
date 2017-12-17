import React, { Component } from 'react';
import './App.css';
import Stream from './Components/Stream';
import Collection from './Components/Collection';

//TODO: tweet, Stream and Collection are all undefined.
// Stream: render a stream section of our user interface.
// Collection: render a collection section of our user interface.

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collectionTweets: {}
        };
        this.addTweetToCollection = this.addTweetToCollection.bind(this);
        this.removeAllTweetsFromCollection = this.removeAllTweetsFromCollection.bind(this);
        this.removeTweetFromCollection = this.removeTweetFromCollection.bind(this);
    }

    addTweetToCollection(tweet) {
        let collectionTweets = this.state.collectionTweets;
        collectionTweets[tweet.id] = tweet;
        this.setState({
            collectionTweets: collectionTweets
        });
    }

    removeTweetFromCollection(tweet) {
        let collectionTweets = this.state.collectionTweets;
        delete collectionTweets[tweet.id];
        this.setState({
            collectionTweets: collectionTweets
        });
    }

    removeAllTweetsFromCollection() {
        console.log("i am inside removeAll!");
        this.setState({
            collectionTweets: {}
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <Stream onAddTweetToCollection={this.addTweetToCollection}/>
                    </div>
                    <div className="col-md-8">
                        <Collection
                            tweets={this.state.collectionTweets}
                            onRemoveTweetFromCollection={this.removeTweetFromCollection}
                            onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;