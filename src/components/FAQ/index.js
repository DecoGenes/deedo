import React, { Component } from 'react'
import './style.css'

export default class FAQ extends Component {
    render() {
        return (
            <div>
                <h2 className="faq-headline">I want to know more about:</h2>
                <button className='btn btn-primary faq-btn'>Deedo</button>
                <button className='btn btn-primary faq-btn'>Giving blood</button>
                <button className='btn btn-primary faq-btn'>Helping Animals</button>
                <button className='btn btn-primary faq-btn'>Teaching others</button>
            </div>
        )
    }
}
