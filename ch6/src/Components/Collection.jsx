import React, { Component } from 'react';
import ReactDOMServer from 'react-dom';
import CollectionControls from './CollectionControls';
import TweetList from './TweetList';
import Header from './Header';

class Collection extends Component {

    createHtmlMarkupStringOfTweetList() {
        let htmlString = ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets={this.props.tweets} />
        );

        let htmlMarkup = {
            html: htmlString
        };

        return JSON.stringify(htmlMarkup);
    }

    getListOfTweetIds() {
        return Object.keys(this.props.tweets);
    }

    getNumberOfTweetsInCollection() {
        return this.getListOfTweetIds().length;
    }

    render() {
       let numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();
       if (numberOfTweetsInCollection > 0) {
           let tweets = this.props.tweets;
           let htmlMarkup = this.createHtmlMarkupStringOfTweetList();
           let removeAllTweetsFromCollection = this.props.onRemoveTweetFromCollection;
           let handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

           return (
               <div>
                   <CollectionControls
                       numberOfTweetsInCollection={numberOfTweetsInCollection}
                       htmlMarkup={htmlMarkup}
                       onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}
                   />
                   <TweetList
                       tweets={tweets}
                       onRemoveTweetFromCollection={handleRemoveTweetFromCollection}
                   />
               </div>
           );
       }
       return <Header text="Your collection is empty" />;
    }
}

export default Collection;
