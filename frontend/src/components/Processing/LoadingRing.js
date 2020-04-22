import React, { Component } from 'react';

import './spinner.css';


class Spinner extends Component {
    render() {
        return (
            <div className='container'>
                <div className='loader'></div>
            </div>
        )
    }
}

export default Spinner;