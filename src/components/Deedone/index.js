import React, { Component, useState, useEffect } from 'react'
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
        organization: "Let Live",
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


const DeedDone = () => {
    const [showDeeds, setShowDeeds] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowDeeds(true);
        }, 500)
    }, [deedsHistory])

    return (
        <div className="history-page-container">
            <div className="deedsdone-headline-container">
                <h2 className="deedsdone-headline">Your Deeds History</h2>
            </div>
            <div className="row justify-content-center history-items-container">
                {deedsHistory.map((deed, index) =>
                    <div className="col-sm-3 deed-card"
                        key={deed.title + index}
                        style={{
                            opacity: showDeeds ? 1 : 0,
                            transitionDelay: (index * 0.2) + 's'
                        }}
                    >
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title deedsdone-title">{deed.title}</h3>
                                <h5>Organization: {deed.organization}</h5>
                                <p className="card-text deedsdone-pts-earned">
                                    <em>{deed.pointsEarned} points earned</em>
                                </p>
                                <p className="card-text">{deed.date}</p>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}


export default DeedDone;