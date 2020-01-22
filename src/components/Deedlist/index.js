import React, { Component } from 'react'
import '../Deedlist/style.css'

export class DeedList extends React.Component {
    constructor(props){
    super(props)
    this.state={
    deeds : []
    }
    }
    render() {
        return (
            <div>
               <h1 className="deedslist-headline">Available Deeds</h1> 
               <div className="deedlist-card">
                   <h3><a href="" className="deedlist-deed">Taking out dogs for a walk</a></h3>
                   <h4>Organization: Tno Lachaiot Lichyot</h4>
                   <h4>Location: Ramat-Gan Dov Friedman 8 </h4>
                   <p>10 points</p>
               </div>
               <div className="deedlist-card" >
                   <h3><a href="" className="deedlist-deed">Giving Bone marrow to Lital</a></h3>
                   <h4>Organization: Kids in need</h4>
                   <h4>Location: Tel-Aviv Rotchild 64 </h4>
                   <p>30 points</p>
               </div>
               <div className="deedlist-card">
                   <h3><a href="" className="deedlist-deed">Fixing homes</a></h3>
                   <h4>Organization: Living together</h4>
                   <h4>Location: Herzliya Sokolov 40 </h4>
                   <p>10 points</p>
               </div>
               <div className="deedlist-card" >
                   <h3> <a href="" className="deedlist-deed">Save the street cats</a></h3>
                   <h4>Organization: Animal sos</h4>
                   <h4>Location: Ramat-Gan Zabotinski 38 </h4>
                   <p>20 points</p>
               </div>
               <div className="deedlist-card">
                   <h3><a href="" className="deedlist-deed">Private English lessons</a></h3>
                   <h4>Organization: Rabin School</h4>
                   <h4>Location: Givatayim Arlozorov 13 </h4>
                   <p>10 points</p>
               </div>
               <div className="deedlist-card" >
                   <h3><a href="" className="deedlist-deed">Helping the homeless</a></h3>
                   <h4>Organization: TLV city council</h4>
                   <h4>Location: Tel-Aviv Shaked 51 </h4>
                   <p>15 points</p>
               </div>
               <div className="deedlist-card">
                   <h3><a href="" className="deedlist-deed">Spend time with elderly</a></h3>
                   <h4>Organization: Age and health</h4>
                   <h4>Location: Kiryat Ono Hanasi 112 </h4>
                   <p>10 points</p>
               </div>
               <div className="deedlist-card" >
                   <h3> <a href="" className="deedlist-deed">Cleaning the Safari</a></h3>
                   <h4>Organization: Safari</h4>
                   <h4>Location: Safari Ramat-Gan </h4>
                   <p>20 points</p>
               </div>
            </div>
        )
    }
}

export default DeedList
