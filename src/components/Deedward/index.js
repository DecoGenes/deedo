import React from 'react';

const rewards = [
    {
        storeName: "Aroma",
        location: "Kibbutz Galuyot Rd 71, Tel Aviv-Yafo",
        city: "Tel Aviv",
        cost: "min. 50 pts.",
        mapURL: "https://goo.gl/maps/1tW88vrw4RUC3wAt5"
    },
]





const DeedWard = () => {

    return (
        <div className="rewards-page-container">
            <div className="total-pts">Total Available Points:</div>
            <div>
                <p>Location</p>
            </div>
            <div className='rewards-list-container'>

            </div>
        </div>
    )
}

export default DeedWard;
