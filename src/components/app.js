import { Component } from 'preact';

import Header from './header';
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
            </div>
        );
    }
}
