import React, { useState, useEffect } from 'react';
import "../Deedward/style.css"


const rewards = [
    {
        storeName: "Eco Store",
        location: "Ma'avar Yabok 5, Tel Aviv-Yafo",
        city: "Tel Aviv",
        storeDescription: "Eco friendly store in Israel",
        cost: "min. 35 pts.",
        mapURL: "https://g.page/ecostoretlv?share",
        website: "https://www.ecostore.co.il/"
    },
    {
        storeName: "Amazon",
        location: "Derech Menachem Begin 121, Tel Aviv-Yafo",
        city: "Tel Aviv",
        storeDescription: "Multinational technology company which includes e-commerce",
        cost: "min. 60 pts.",
        mapURL: "https://goo.gl/maps/phXxp8w6JAQyokZTA",
        website: "https://www.aboutamazon.com/sustainability"
    },
    {
        storeName: "H&M",
        location: "Multiple locations",
        city: "Tel Aviv",
        storeDescription: "Multinational clothing retail company",
        cost: "min. 50 pts.",
        mapURL: "https://www.google.com/maps/search/h%26m+israel/@32.0717697,34.7869346,17z/data=!3m1!4b1",
        website: "https://hmgroup.com/sustainability.html"
    },
    {
        storeName: "Bird",
        location: "Multiple locations",
        city: "Tel Aviv",
        storeDescription: "Electric scooter rental service",
        cost: "min. 20 pts.",
        mapURL: "https://www.bird.co/map/",
        website: "https://www.bird.co/"
    },
    {
        storeName: "Lime",
        location: "Multiple locations",
        city: "Tel Aviv",
        storeDescription: "Electric scooter rental service",
        cost: "min. 20 pts.",
        mapURL: "https://www.li.me/locations",
        website: "https://www.li.me/"
    },
    {
        storeName: "Tel-O-Fun",
        location: "Multiple locations",
        city: "Tel Aviv",
        storeDescription: "Bicycle sharing service",
        cost: "min. 20 pts.",
        mapURL: "https://www.tel-o-fun.co.il/en/TelOFunLocations.aspx",
        website: "https://www.tel-o-fun.co.il/en/"
    },
    {
        storeName: "Rebar",
        location: "Multiple locations",
        city: "Tel Aviv",
        storeDescription: "A chain offering healthy drinks",
        cost: "min. 20 pts.",
        mapURL: "https://www.rebar.co.il/branch/",
        website: "https://www.rebar.co.il/"
    },
    {
        storeName: "Dizengof Center",
        location: "Dizengoff St 50, Tel Aviv-Yafo",
        city: "Tel Aviv",
        storeDescription: "Israel's first eco-friendly shopping center",
        cost: "min. 20 pts.",
        mapURL: "https://goo.gl/maps/s17jcPxKV6UH1fDi6",
        website: "https://www.dizengof-center.co.il/en/"
    },
]


const DeedWard = () => {
    const [points, setPoints] = useState('400');
    const [showRewards, setShowRewards] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowRewards(true);
        }, 500)
    }, [rewards])

    return (
        <div className="rewards-page-container">
            <div className="total-pts">
                <h2>Available Points: {points}</h2>
            </div>

            <div class="row justify-content-center">
                {rewards.map((reward, index) =>
                    <div
                        className="col-sm-3 reward-card"
                        key={reward.storeName + index}
                        style={{
                            opacity: showRewards ? 1 : 0,
                            transitionDelay: (index * 0.2) + 's'
                        }}
                    >
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{reward.storeName}</h5>
                                <p className="card-text">{reward.storeDescription}</p>
                                <p className="card-text reward-cost">{reward.cost}</p>
                                <p className="reward-location"><em>{reward.location}</em></p>
                                <div className="deedward-link">
                                    <a href={reward.mapURL}
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See map
                                    </a>
                                </div>
                                <div className="deedward-link">
                                    <a href={reward.website}
                                        className="btn btn-warning"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See website
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

export default DeedWard;
