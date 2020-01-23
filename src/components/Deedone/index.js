import React, { Component } from 'react'
import '../Deedone/style.css'

const deedsHistory = [
    {
        title: "Blood Donation",
        organization: "Magen David Adom",
        date: "05 July 2019",
        pointsEarned: 10,
    },
    {
        title: "Adopt a dog for a day",
        organization: "Tno Lachaiot Lichyot",
        date: "14 December 2019",
        pointsEarned: 10,
    },
    {
        title: "Blood Donation",
        organization: "Magen David Adom",
        date: "18 December 2019",
        pointsEarned: 10,
    },
    {
        title: "Host a soldier for a dinner",
        organization: "IDF",
        date: "25 December 2019",
        pointsEarned: 5,
    },
    {
        title: "Young scientist",
        organization: "Ministry of Education",
        date: "10 January 2020",
        pointsEarned: 5,
    },

]

export default class DeedDone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="deedsdone-headline-container">
                <h1 className="deedsdone-headline">Your Deeds History</h1>
                </div>
                <div class="row justify-content-center">
                    {deedsHistory.map(deed =>
                        <div className="col-sm-3 reward-card">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title deedsdone-title">{deed.title}</h3>
                                    <h5>Organization: {deed.organization}</h5>
                                    <p className="card-text">{deed.date}</p>
                                    <p className="card-text deedsdone-pts-earned"><em>{deed.pointsEarned} points earned</em></p>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>

            // <div>
            //     <h1 className="deedsdone-headline">Your Deeds History</h1>
            //     <div className="deedsdone-card">
            //         <p className="deedsdone-date">14 December 2019 </p>
            //         <h3>Adop a dog for a day</h3>
            //         <h4>Organization: Tno Lachaiot Lichyot</h4>
            //         <p>10 points</p>
            //     </div>
            //     <div className="deedsdone-card">
            //         <p className="deedsdone-date">25 December 2019 </p>
            //         <h3>Host a soldier for a dinner</h3>
            //         <h4>Organization: IDF</h4>
            //         <p>5 points</p>
            //     </div>
            //     <div className="deedsdone-card">
            //         <p className="deedsdone-date">10 January 2019 </p>
            //         <h3>Young scientist</h3>
            //         <h4>Organization: Ministry of Education</h4>
            //         <p>10 points</p>
            //     </div>
            // </div>
        )
    }
}
