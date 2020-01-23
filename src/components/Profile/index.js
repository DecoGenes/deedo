import React, { useState, useEffect } from 'react'
import "./style.css";

export default function Profile() {

    const [deedId, setDeedId] = useState('yahenpodsandakp')
    const [firstName, setFirstName] = useState('Andre')
    const [lastName, setLastName] = useState('Genes')
    const [birthDate, setBirthDate] = useState('17/07/1985')
    const [deedBalance, setDeedBalance] = useState(0)
    const [address, setAddress] = useState({
        address1: 'Lavie 8',
        address2: '',
        zip: '5332638',
        city: 'Givatayim',
        country: 'Israel',
    })
    const [blood, setBlood] = useState({
        bloodType: 'AB',
        RhD: '+',
        plasmaDonor: true
    })
    const [plasmaDonor, setPlasma] = useState(false)
    const [organDonor, setOrganDonor] = useState(true)
    const [category, setCategory] = useState([])
    const [deedDone, setDeedDone] = useState({
        category: 'Blood Donation',
        deedDate: '22/01/2020',
        typeOfDeed: '',
        pointsPerDeed: '5',
    })
    const [nextAvailableDeedDate, setNextAvailableDeedDate] = useState('22/04/2020')
    const [deedWards, setDeedWards] = useState({
        deedWardsBalance: '',
        deedWardRetrieved: '',
        deedWardDate: '',
        deedWardPointUsed: '',
    })

    function handlePlasmaDonor() {
        setBlood({ plasmaDonor: true })
    }

    function handleOrganDonor() {
        setOrganDonor(true)
    }

    return (
        <div className='profile-page'>
            
            <div className='user-card'>
                <div className='card card1'>
                    <div>First Name: {firstName}</div>
                    <div>Last Name: {lastName}</div>
                    <div>Birth Date: {birthDate}</div>
                    <div>Deed Balance: {deedBalance}</div>
                </div>
                <div className='card card1'> Address:
                    <div>{address.address1}</div>
                    <div>{address.address2}</div>
                    <div>{address.city}</div>
                    <div>{address.country}</div>
                    <div>{address.zip}</div>
                </div>
                <div className='card card1'> Blood:
                <span>Blood Type: {blood.bloodType}</span>
                    <span>RhD: {blood.RhD}</span>
                    <label>Plasma Donor:
                <input type='checkbox' onChange={(event) => handlePlasmaDonor(event)} value={blood.plasmaDonor} />
                    </label>
                    <label>Organ Donor:
                <input type='checkbox' onChange={(event) => handleOrganDonor(event)} value={organDonor} />
                </label>
                </div>
                <div className='card card1'>
                    <div>Category: {category}</div>
                    <div>{deedDone.category}</div>
                    <div>Deed Date: {deedDone.deedDate}</div>
                    <div>Points: {deedDone.pointsPerDeed}</div>
                    <div>Deed Type: {deedDone.typeOfDeed}</div>
                </div>
                
                
                <div className='card card1'> DeedWards
                <div>Date: {deedWards.deedWardDate}</div>
                    <div>DeedWard Retrieved: {deedWards.deedWardRetrieved}</div>
                    <div>Points Used: {deedWards.deedWardPointUsed}</div>
                </div>
                
            </div>
        </div>
    )
}
