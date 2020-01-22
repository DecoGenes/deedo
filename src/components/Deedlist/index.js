import React, { Component } from 'react'
import '../Deedlist/style.css'

export class DeedList extends Component {
    constructor(props){
    super(props)
    this.state={
    deeds : []
    }
    }
    render() {
        return (
            <div>
               <h1>Available Deeds</h1> 
               <div className="deedlist-card">
                   <h3><a href="" className="deedlist-deed">Taking out dogs for a walk</a></h3>
                   <h4>Location: Ramat-Gan Dov Friedman 8 </h4>
                   <p>10 points</p>
               </div>
               <div className="deedlist-card" >
                   <h3><a href="" className="deedlist-deed">Giving Bone marrow to Lital</a></h3>
                   <h4>Tel-Aviv Rotchild 64 </h4>
                   <p>30 points</p>
               </div>
               <div className="deedlist-card">
                   <h3><a href="" className="deedlist-deed">Giving Bone marrow to Lital</a></h3>
                   <h4>Location: Herzliya Sokolov 40 </h4>
                   <p>10 points</p>
               </div>
               <div className="deedlist-card" >
                   <h3> <a href="" className="deedlist-deed">Taking out dogs for a walk</a></h3>
                   <h4>Location: Ramat-Gan Zabotinski 38 </h4>
                   <p>20 points</p>
               </div>
            </div>
        )
    }
}

export default DeedList
