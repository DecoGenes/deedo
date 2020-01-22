import React, {useState} from 'react';
import "./style.css"


const rewards = [
    {
        storeName: "Aroma",
        location: "Kibbutz Galuyot Rd 71, Tel Aviv-Yafo",
        city: "Tel Aviv",
        storeDescription: "Israeli espresso and coffee chain",
        cost: "min. 50 pts.",
        mapURL: "https://goo.gl/maps/1tW88vrw4RUC3wAt5",
        description: ""
    },
    {
        storeName: "Falafel Gina",
        location: "Shoken St 22, Tel Aviv-Yafo",
        city: "Tel Aviv",
        storeDescription: "Delicious falafel restaurant",
        cost: "min. 30 pts.",
        mapURL: "https://goo.gl/maps/45RBg7EPSQfQDg3s6"
    },
    {
        storeName: "Rupee 24",
        location: "Shoken St 16, Tel Aviv-Yafo",
        city: "Tel Aviv",
        storeDescription: "Fun vegetarian Indian restaurant",
        cost: "min. 20 pts.",
        mapURL: "https://g.page/24rupee?share"
    },
    {
        storeName: "Tampopo",
        location: "Reviyat Florentin 43, Tel Aviv-Yafo",
        city: "Tel Aviv",
        storeDescription: "Serves authentic Japanese cuisine",
        cost: "min. 40 pts.",
        mapURL: "https://goo.gl/maps/ZjK7EeqXhC6opUK37"
    },
    {
        storeName: "Caldo",
        location: "Derech Metsada 47, Be'er Sheva",
        city: "Beer Sheva",
        storeDescription: "Gourmet pizza bar",
        cost: "min. 30 pts.",
        mapURL: "https://goo.gl/maps/6GgYRkK6eRK7jyvd8"
    },
    {
        storeName: "Goomba",
        location: "Yes Planet Unit 2, Be'er Sheva",
        city: "Beer Sheva",
        storeDescription: "Authentic Italian restaurant",
        cost: "min. 30 pts.",
        mapURL: "https://goo.gl/maps/ZRkvoY2JfWioJwuW6"
    },
    {
        storeName: "Sifriya",
        location: "Yitshak Nafha St 25, Be'er Sheva",
        city: "Beer Sheva",
        storeDescription: "Awesome family restaurant",
        cost: "min. 50 pts.",
        mapURL: "https://goo.gl/maps/xEedyhiePqbENBdh9"
    },
]


const DeedWard = () => {
    const [points, setPoints] = useState('400')

    return (
        <div className="rewards-page-container">
            <div className="total-pts">
                <h2>Available Points: {points}</h2>
            </div>

            <div class="row justify-content-center">
                {rewards.map(reward =>
                    <div className="col-sm-3 reward-card">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{reward.storeName}</h5>
                                <p className="card-text">{reward.storeDescription}</p>
                                <p className="card-text reward-cost">{reward.cost}</p>
                                <p className="reward-location"><em>{reward.location}</em></p>
                                <a href={reward.mapURL} className="btn btn-primary" target="_blank">See map</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DeedWard;
