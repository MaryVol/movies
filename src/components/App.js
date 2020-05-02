import React, { Component } from 'react';
import Header from './header/Header';
import MainContent from './mainContent/MainContent';

class App extends Component {
    render(){
        return(
        <div>
            <h1>hiiiiiii</h1>
            <Header />
            <MainContent />
        </div>
        );
    }
}

export default App;