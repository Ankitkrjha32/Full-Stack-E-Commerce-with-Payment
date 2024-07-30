// Layout.js
import React from 'react';
import Header from './header';
import Footer from './footer';


const Layout = ({ children }) => (
    <div>
        <Header/>
        <div style={{  marginTop: '105px' }}>
            {children}
        </div>
        <Footer/>
    </div>
);

export default Layout;
