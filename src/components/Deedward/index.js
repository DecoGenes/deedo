import React from 'react';
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
]





const DeedWard = () => {

    return (
        <div className="rewards-page-container">
            <div className="total-pts">Total Available Points: 500</div>

            <div class="row">
                <div class="col-sm-3 reward-card">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{rewards[0].storeName}</h5>
                            <p class="card-text">{rewards[0].storeDescription}</p>
                            <p class="card-text reward-cost">{rewards[0].cost}</p>
                            <a href={rewards[0].mapURL} class="btn btn-primary" target="_blank">See map</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 reward-card">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{rewards[1].storeName}</h5>
                            <p class="card-text">{rewards[1].storeDescription}</p>
                            <p class="card-text reward-cost">{rewards[1].cost}</p>
                            <a href={rewards[1].mapURL} class="btn btn-primary">See map</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 reward-card">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{rewards[2].storeName}</h5>
                            <p class="card-text">{rewards[2].storeDescription}</p>
                            <p class="card-text reward-cost">{rewards[2].cost}</p>
                            <a href={rewards[2].mapURL} class="btn btn-primary">See map</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 reward-card">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{rewards[0].storeName}</h5>
                            <p class="card-text">{rewards[0].storeDescription}</p>
                            <p class="card-text reward-cost">{rewards[0].cost}</p>
                            <a href={rewards[0].mapURL} class="btn btn-primary" target="_blank">See map</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 reward-card">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{rewards[1].storeName}</h5>
                            <p class="card-text">{rewards[1].storeDescription}</p>
                            <p class="card-text reward-cost">{rewards[1].cost}</p>
                            <a href={rewards[1].mapURL} class="btn btn-primary">See map</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 reward-card">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{rewards[2].storeName}</h5>
                            <p class="card-text">{rewards[2].storeDescription}</p>
                            <p class="card-text reward-cost">{rewards[2].cost}</p>
                            <a href={rewards[2].mapURL} class="btn btn-primary">See map</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 reward-card">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{rewards[0].storeName}</h5>
                            <p class="card-text">{rewards[0].storeDescription}</p>
                            <p class="card-text reward-cost">{rewards[0].cost}</p>
                            <a href={rewards[0].mapURL} class="btn btn-primary" target="_blank">See map</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 reward-card">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{rewards[1].storeName}</h5>
                            <p class="card-text">{rewards[1].storeDescription}</p>
                            <p class="card-text reward-cost">{rewards[1].cost}</p>
                            <a href={rewards[1].mapURL} class="btn btn-primary">See map</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 reward-card">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{rewards[2].storeName}</h5>
                            <p class="card-text">{rewards[2].storeDescription}</p>
                            <p class="card-text reward-cost">{rewards[2].cost}</p>
                            <a href={rewards[2].mapURL} class="btn btn-primary">See map</a>
                        </div>
                    </div>
                </div>
            </div>






            <div>
                <p>Location</p>
            </div>
            <div className='rewards-list-container'>

            </div>
        </div>
    )
}

export default DeedWard;
