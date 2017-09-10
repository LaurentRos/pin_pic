import { Component } from 'preact';

export default class Header extends Component {
    render() {
        return (
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Pin Pic</h1>
                <nav style={styles.headerNav}>
                </nav>
            </header>
        );
    }
}

const styles = {
    header: {
        left: 0,
        top: 0,
        width: '100%',
        height: 56,
        padding: 0,
        background: '#673AB7',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
        zIndex: 50,
        alignItems: 'center',
        display: 'flex',
    },
    
    headerTitle: {
        float: 'left',
        margin: 0,
        padding: '0 15px',
        fontSize: 24,
        fontWeight: 400,
        color: '#FFF',
    },
    
    headerNav: {
        float: 'right',
        fontSize: '100%',
    }
}
