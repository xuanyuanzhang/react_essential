import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';
import CollectionRenameForm from './CollectionRenameForm';
import CollectionExportForm from './CollectionExportForm';

class CollectionControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'new',
            isEditingName: false
        };
        this.getHeaderText = this.getHeaderText.bind(this);
        this.toggleEditCollectionName = this.toggleEditCollectionName.bind(this);
        this.setCollectionName = this.setCollectionName.bind(this);
    }

    getHeaderText() {
        let numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
        let text = numberOfTweetsInCollection;

        if (numberOfTweetsInCollection === 1) {
            text = text + ' tweet in your';
        }
        else {
            text = text + ' tweets in yours';
        }

        return (
            <span>
                {text} <strong>{this.state.name}</strong> collection
            </span>
        )
    }

    toggleEditCollectionName() {
        this.setState({
            isEditingName: !this.state.isEditingName
        });
    }

    setCollectionName(name) {
        this.setState({
            name: name,
            isEditingName: false
        });
    }

    render() {
        if (this.state.isEditingName) {
            return (
                <CollectionRenameForm
                    name={this.state.name}
                    onChangeCollectionName={this.setCollectionName}
                    onCancelCollectionNameChange={this.toggleEditCollectionName}
                />
            );
        }

        return (
            <div>
                <Header text={this.getHeaderText()} />

                <Button
                    label="Rename collection"
                    handleClick={this.toggleEditCollectionName}
                />

                <Button
                    label="Empty collection"
                    handleClick={this.props.onRemoveAllTweetsFromCollection}
                />
                <CollectionExportForm htmlMarkup={this.props.htmlMarkup}/>
            </div>
        );
    }
}

export default CollectionControls;
