import React, { Component } from 'react'
import './style.css'

export default class FAQ extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDeedo:true,
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
                <div className="faq-text">
                <div className="Deedo-faq faq-div" style={{display: this.state.showDeedo ? 'block' : 'none' }}>
                    <h3 className="faq-header">Deedo</h3>
                    <h5>Who is Deedo?</h5>
                    <p>We are all about doing good. We wanted to motivte people to do more good by giving back</p>
                    <h5>Why should I use Deedo?</h5>
                    <p>Why not? You give to others and you get back. Deedo is friendly easy to use and mostly importantly so much fun </p>
                </div>
                <div className="Blood-faq faq-div" style={{display: this.state.showBlood ? 'block' : 'none' }}>
                    <h3 className="faq-header">Giving Blood</h3>
                    <h5>How can I give blood?</h5>
                    <p>Just go to your nearest Mada station. </p>
                    <h5>How often can I give blood?</h5>
                    <p>Every 3 months.</p>
                </div>
                <div className="Animals-faq faq-div" style={{display: this.state.showAnimals ? 'block' : 'none' }}>
                    <h3 className="faq-header">Helping Animals</h3>
                    <h5>Where can I help Animals?</h5>
                    <p>a lot of different organizations are looking for volunteers.</p> 
                     <p>   SOS, Tzar balei Chaim and Tno Lachaiot Lichyot aare just to name a few</p>
                    <h5>Which Animals can I help?</h5>
                    <p>Cats and dogs are the most popular but you can also find different kind of birds, reptiles and mammals.  </p>
                </div>
                <div className="Teaching-faq faq-div" style={{display: this.state.showTeaching ? 'block' : 'none' }}>
                    <h3 className="faq-header">Teaching</h3>
                    <h5>What does teaching include?</h5>
                    <p>There is a large variaty of people needing tutering. 
                        starting from young children, teens and even adults.</p>
                    <h5>I don't have a teaching diploma. Can I help anyway?</h5>
                    <p>Sure! As long as you feel comfortable with teaching a subject you can do it.</p>
                </div>
                </div>
            </div>
        )
    }
}
