import React, { Component } from 'react'
import './style.css'

export default class FAQ extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        
    }
    handleDeedoFaq(){

    }
    render() {
        return (
            <div>
                <h2 className="faq-headline">I want to know more about:</h2>
                <button className='btn btn-primary faq-btn' onClick={() => this.handleDeedoFaq()}>Deedo</button>
                <button className='btn btn-primary faq-btn'>Giving blood</button>
                <button className='btn btn-primary faq-btn'>Helping Animals</button>
                <button className='btn btn-primary faq-btn'>Teaching others</button>
                <div className="Deedo-faq">
                    <h3>Deedo</h3>
                    <h5>Who is Deedo....</h5>
                    <p>bla bla bla</p>
                    <h5>Why should I use Deedo?</h5>
                    <p>bla bla bla</p>
                </div>
            </div>
        )
    }
}
