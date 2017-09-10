import { Component } from 'preact';

import Header from './header';
import { Button, Icon } from 'preact-mdl'
import MapContainer from './maps';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="header">
                    <Header />
                </div>
                <div className="map">
                    <MapContainer />
                </div>
                <div className="buttonContainer">
                    <Button
                        fab
                        colored
                        raised
                        onClick={this.toggleCameraModal}
                    >
                        <Icon icon="camera"/>
                    </Button>
                </div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.indigo-pink.min.css" />
            </div>
        );
    }
}
