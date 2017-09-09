import { Component } from 'preact';

import Header from './header';
import MapContainer from './maps';

export default class App extends Component {
    render() {
        return (
            <div id="app">
                <Header />
                <MapContainer />
            </div>
        );
    }
}
