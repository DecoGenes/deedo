import React, { Component, useState, useEffect } from 'react'
import '../Deedlist/style.css'

const deedsList = [
    {
        title: "Blood Donation",
        organization: "Magen David Adom",
        location: "Multiple",
        pointsToEarn: 10,
        mapURL: "https://www.dam.org.il/en/regular-donation-station/",
    },
    {
        title: "Plasma Donation",
        organization: "Magen David Adom",
        location: "Multiple",
        pointsToEarn: 15,
        mapURL: "https://www.dam.org.il/en/regular-donation-station/",
    },
    {
        title: "Taking Out Dogs for a Walk",
        organization: "Let Live",
        location: "Ramat-Gan Dov Friedman 8",
        pointsToEarn: 10,
        mapURL: "http://www.letlive.org.il/eng/?cat=50"
    },
    {
        title: "Giving Bone Marrow to Lital",
        organization: "Kids in Need",
        location: "Tel-Aviv Rotchild 64",
        pointsToEarn: 150,
        mapURL: "https://goo.gl/maps/CfU1FARYEp7DKjUN7"
    },
    {
        title: "Fixing Homes",
        organization: "Living together",
        location: "Herzliya Sokolov 40",
        pointsToEarn: 10,
        mapURL: "https://goo.gl/maps/RFkq8jRDjSiXByim6"
    },
    {
        title: "Save the Street Cats",
        organization: "Animal SOS",
        location: "Ramat-Gan Zabotinski 38",
        pointsToEarn: 20,
        mapURL: "https://goo.gl/maps/XHfPgure4gYC9eLN6"
    },
    {
        title: "Private English Lessons",
        organization: "Rabin School",
        location: "Givatayim Arlozorov 13",
        pointsToEarn: 10,
        mapURL: "https://goo.gl/maps/LXgnkkn4GHoB2x159"
    },
    {
        title: "Helping the Homeless",
        organization: "TLV City Council",
        location: "Tel-Aviv Shaked 51",
        pointsToEarn: 15,
        mapURL: "https://goo.gl/maps/iwzAL8fitHwRZMVj7"
    },
    {
        title: "Spend Time with Elderly",
        organization: "Age and Health",
        location: "Kiryat Ono Hanasi 112",
        pointsToEarn: 10,
        mapURL: "https://goo.gl/maps/h53ZYkS9t3dPProT7"
    },
    {
        title: "Cleaning the Safari",
        organization: "Safari",
        location: "Safari Ramat-Gan",
        pointsToEarn: 20,
        mapURL: "https://goo.gl/maps/x835zPGqH4KsVSxK8"
    },
]

const DeedList = () => {
    const [showDeeds, setShowDeeds] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowDeeds(true);
        }, 500)
    }, [deedsList])

    return (
        <div className="deedslist-container">
            <div className="deedslist-headline-container">
                <h2 className="deedslist-headline">Available Deeds</h2>
            </div>
            <div className="row justify-content-center deeds-items-container">
                {deedsList.map((deed, index) =>
                    <div
                        className="col-sm-3 deed-card"
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
                                <p className="card-text">Location: {deed.location}</p>
                                <p className="card-text deedsdone-pts-earned">
                                    <em>{deed.pointsToEarn} points to earn</em>
                                </p>
                                <div className="deedward-link">
                                    <a
                                        href={deed.mapURL}
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See location
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
// }

export default DeedList;
