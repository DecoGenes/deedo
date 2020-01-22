import React from 'react';
import './styles.css';
import qrcode from '../../images/qrcode.png'


const userData = {
    firstName: 'Lily',
    lastName: 'Potter',
    deedId: 554321,
    bloodType: 'O',
    RhD: '-',
    plasmaDonor: true,
    organDonor: false,
}


const Deedcard = () => {



    return (
        <div className="deedcard-container">
            <div className="deedcard card">
                <div className="deedcard-header title">
                    <h1>DeedCard</h1>
                </div>

                <div className="deedcard-user info">
                    <div className="deedcard-user detail">
                        <h2 className="deedcard-detail deedcard-header name">{userData.firstName} {userData.lastName}</h2>
                        <p className="deedcard-detail blood">Blood Type:
                            <span className="space-info">{userData.bloodType}{userData.RhD}
                            </span>
                        </p>
                        <p className="deedcard-detail plasma">Plasma Donor:
                        {userData.plasmaDonor && <span className="space-info">Yes</span>}
                            {!userData.plasmaDonor && <span className="space-info">No</span>}
                        </p>
                        <p className="deedcard-detail blood">Organ Donor:
                        {userData.organDonor && <span className="space-info">Yes</span>}
                            {!userData.organDonor && <span className="space-info">No</span>}
                        </p>
                    </div>
                    <div className="deedcard-user qr">
                        <div className="qrcode"></div>
                    </div>

                </div>
            </div>

        </div>

    )


}

export default Deedcard;
