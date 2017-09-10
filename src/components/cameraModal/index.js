import { Component } from 'preact';

import Camera from 'react-camera';

export default class CameraModal extends Component {
    constructor(props) {
        super(props);
        this.takePicture = this.takePicture.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    static defaultProps = {
        isModalOpen: false,
    };

    takePicture() {
        this.camera.capture()
        .then(blob => {
        });
        this.props.toggleCameraModal()
    }

    hideModal() {
        return this.props.isModalOpen ? {top: 0, opacity: 1} : {top: '100vh', opacity: 0}
    }

    render() {
        return (
            <div
                style={{
                    ...style.container,
                    ...this.hideModal()
                }}
            >
                <Camera
                    style={style.preview}
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                >
                    <div style={style.captureContainer} onClick={this.takePicture}>
                        <div style={style.captureButton} />
                    </div>
                </Camera>
                <img
                    style={style.captureImage}
                    ref={(img) => {
                        this.img = img;
                    }}
                />
            </div>
        );
    }
}

const style = {
    preview: {
        position: 'relative',
    },
    container: {
        height: '100%',
        width: '100%',
        zIndex: 100,
        position: 'absolute',
        background: 'black',
        transition: 'all 0.3s',
    },
    captureContainer: {
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        zIndex: 1,
        bottom: 0,
        width: '100%'
    },
    captureButton: {
        backgroundColor: '#fff',
        borderRadius: '50%',
        height: 56,
        width: 56,
        color: '#000',
        margin: 20
    },
    captureImage: {
        width: '100%',
    }
};
