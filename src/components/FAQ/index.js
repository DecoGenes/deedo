import React, { Component } from 'react'
import './style.css'

export default class FAQ extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDeedo:false,
            showBlood:false,
            showAnimals:false,
            showTeaching:false,
        }
        
    }
    handleDeedoFaq(){
        this.setState({showDeedo:true, showBlood:false, showAnimals:false, showTeaching:false })
    }
    handleBloodFaq(){
        this.setState({showDeedo:false, showBlood:true, showAnimals:false, showTeaching:false })
    }
    handleAnimalsFaq(){
        this.setState({showDeedo:false, showBlood:false, showAnimals:true, showTeaching:false })
    }
    handleTeachingFaq(){
        this.setState({showDeedo:false, showBlood:false, showAnimals:false, showTeaching:true })
    }
    render() {
        return (
            <div>
                <h2 className="faq-headline">I want to know more about:</h2>
                <button className='btn btn-primary faq-btn' onClick={() => this.handleDeedoFaq()}>Deedo</button>
                <button className='btn btn-primary faq-btn' onClick={() => this.handleBloodFaq()}>Giving blood</button>
                <button className='btn btn-primary faq-btn' onClick={() => this.handleAnimalsFaq()}>Helping Animals</button>
                <button className='btn btn-primary faq-btn' onClick={() => this.handleTeachingFaq()}>Teaching others</button>
                
                <div className="Deedo-faq" style={{display: this.state.showDeedo ? 'block' : 'none' }}>
                    <h3>Deedo</h3>
                    <h5>Who is Deedo....</h5>
                    <p>bla bla bla</p>
                    <h5>Why should I use Deedo?</h5>
                    <p>bla bla bla</p>
                </div>
                <div className="Blood-faq" style={{display: this.state.showBlood ? 'block' : 'none' }}>
                    <h3>Giving Blood</h3>
                    <h5>How can i give blood?</h5>
                    <p>bla bla bla</p>
                    <h5>Where do I give blood?</h5>
                    <p>bla bla bla</p>
                </div>
                <div className="Animals-faq" style={{display: this.state.showAnimals ? 'block' : 'none' }}>
                    <h3>Helping Animals</h3>
                    <h5>Where can i help Animals?</h5>
                    <p>bla bla bla</p>
                    <h5>Which Animals can i help?</h5>
                    <p>bla bla bla</p>
                </div>
                <div className="Teaching-faq" style={{display: this.state.showTeaching ? 'block' : 'none' }}>
                    <h3>Teaching</h3>
                    <h5>What does teaching include?</h5>
                    <p>bla bla bla</p>
                    <h5>I don't have a teaching diploma. Can I help anyway?</h5>
                    <p>bla bla bla</p>
                </div>

            </div>
        )
    }
}
