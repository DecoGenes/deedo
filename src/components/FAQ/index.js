import React, { Component } from 'react'

export default class FAQ extends Component {
    render() {
        return (
            <div>
                <h2>I want to know more about:</h2>
                <button className='btn btn-primary'>Deedo</button>
                <button className='btn btn-primary'>Giving blood</button>
                <button className='btn btn-primary'>Helping Animals</button>
                <button className='btn btn-primary'>Teaching others</button>
            </div>
        )
    }
}
