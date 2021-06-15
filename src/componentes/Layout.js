import React from 'react';
import Header from './Header';
import MiniHeader from './MiniHeader';

function Layout(props) {
    return (
        <React.Fragment>
            <Header />
            <MiniHeader />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;