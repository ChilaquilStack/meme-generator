import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MemeGenerator from './components/MemeGeneratos';

const App = () => {
    return(
        <React.Fragment>
            <Header/>
            <MemeGenerator/>
        </React.Fragment>
    )
}

export default App;
