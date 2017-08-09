import { Component } from 'preact';
import style from './style';

export default class Header extends Component {
    render() {
        return (
            <header class={style.header}>
                <h1>Pin Pic</h1>
                <nav>
                </nav>
            </header>
        );
    }
}
