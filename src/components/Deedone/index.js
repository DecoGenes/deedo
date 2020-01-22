import React, { Component } from 'react'
import '../Deedone/style.css'

export default class DeedDone extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <div>
                 <h1 className="deedsdone-headline">Your Deeds History</h1>
                 <div className="deedsdone-card">
                   <p className="deedsdone-date">14 December 2019 </p>
                   <h3>Adop a dog for a day</h3>
                   <h4>Organization: Tno Lachaiot Lichyot</h4>
                   <p>10 points</p>
               </div> 
               <div className="deedsdone-card">
                   <p className="deedsdone-date">25 December 2019 </p>
                   <h3>Host a soldier for a dinner</h3>
                   <h4>Organization: IDF</h4>
                   <p>5 points</p>
               </div> 
               <div className="deedsdone-card">
                   <p className="deedsdone-date">10 January 2019 </p>
                   <h3>Young scientist</h3>
                   <h4>Organization: Ministry of Education</h4>
                   <p>10 points</p>
               </div> 
            </div>
        )
    }
}
