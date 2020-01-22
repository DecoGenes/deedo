import React from 'react';

const rewards = [
    {
        storeName: "Aroma",
        location: "Kibbutz Galuyot Rd 71, Tel Aviv-Yafo",
        city: "Tel Aviv",
        cost: "min. 50 pts.",
        mapURL: "https://goo.gl/maps/1tW88vrw4RUC3wAt5"
    },
    {
        storeName: "Falafel Gina",
        location: "Shoken St 22, Tel Aviv-Yafo",
        city: "Tel Aviv",
        cost: "min. 30 pts.",
        mapURL: "https://goo.gl/maps/45RBg7EPSQfQDg3s6"
    },
    {
        storeName: "Rupee 24",
        location: "Shoken St 16, Tel Aviv-Yafo",
        city: "Tel Aviv",
        cost: "min. 20 pts.",
        mapURL: "https://g.page/24rupee?share"
    },
]





const DeedWard = () => {

    return (
        <div className="rewards-page-container">
            <div className="total-pts">Total Available Points:{rewards[0].cost}</div>
            <div>
                <p>Location</p>
            </div>
            <div className='rewards-list-container'>

            </div>
        </div>
    )
}

export default DeedWard;
