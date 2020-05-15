import React from 'react';


import styles from './App.module.css'
import {Cards , Chart ,CountryPicker} from './components';

class App extends React.Component {

    render () {
        return (
            <div>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;