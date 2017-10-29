import { Component } from 'preact';

import Header from './header';
import { Button, Icon } from 'preact-mdl'
import MapContainer from './maps';
import CameraModal from './cameraModal';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.setState({
            isCameraModalOpen: false,
        })
        this.toggleCameraModal = this.toggleCameraModal.bind(this);
    }

    toggleCameraModal() {
        const isCameraModalOpen = this.state.isCameraModalOpen;
        this.setState({
            isCameraModalOpen: !isCameraModalOpen
        });
    }

    render() {
        return (
            <div className="app">
                <div className="header">
                    <Header />
                </div>
                <div className="map">
                    <MapContainer />
                </div>
                <CameraModal
                    isModalOpen={this.state.isCameraModalOpen}
                    toggleCameraModal={this.toggleCameraModal}
                />
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
