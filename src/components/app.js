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
            <div style={styles.app}>
                <Header />
                <div style={styles.mapContainer}>
                    <MapContainer />
                </div>
                <CameraModal
                    isModalOpen={this.state.isCameraModalOpen}
                    toggleCameraModal={this.toggleCameraModal}
                />
                <div style={styles.buttonContainer}>
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

const styles = {
    app: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    
    mapContainer: {
        position: 'relative',
        display: 'flex',
        flex: 1,
    },
    
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    }    
}
