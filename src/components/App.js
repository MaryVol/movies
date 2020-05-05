import React, { Component } from 'react';
import Header from './header/Header';
import MainContent from './mainContent/MainContent';

class App extends Component {
    render(){
        return(
        <div>
            <Header />
            <MainContent />
        </div>
        );
    }
}

export default App;