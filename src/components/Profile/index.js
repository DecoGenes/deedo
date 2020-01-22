import React, { useState, useEffect } from 'react'

export default function Profile() {

    // const [profile, setProfile] = useState({
    //     deedId /*User Id */: '',
    //     id: '',
    //     firstName: '',
    //     lastName: '',
    //     birthDate: '',
    //     email: '',
    //     address: {
    //         address1: '',
    //         address2: '',
    //         zip: '',
    //         city: '',
    //         country: '',
    //     },
    //     bloodType: '',
    //     RhD: '',
    //     plasmaDonor: true,
    //     organDonor: true,
    //     deedDone: {
    //         category: {
    //             blood: {
    //                 deedDate: '',
    //                 typeOfDeed: '',
    //                 pointsPerDeed: '',
    //             },
    //         }
    //     },
    //     nextAvailableDeedDate: '',
    //     deedWards: {
    //         deedWardRetrieved: '',
    //         deedWardDate: '',
    //         deedWardPointUsed: '',
    //     }
    // })

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [address, setAddress] = useState({
        address1: '',
        address2: '',
        zip: '',
        city: '',
        country: '',
    })
    const [blood, setBlood] = useState({
        bloodType: '',
        RhD: '',
        plasmaDonor: true
    })
    // const [plasmaDonor, setPlasma] = useState(false)
    const [organDonor, setOrganDonor] = useState(false)
    const [category, setCategory] = useState([])
    const [deedDone, setDeedDone] = useState({
        category: '',
        deedDate: '',
        typeOfDeed: '',
        pointsPerDeed: '',
    })
    const [nextAvailableDeedDate, setNextAvailableDeedDate] = useState('')
    const [deedWards, setDeedWards] = useState({
        deedWardRetrieved: '',
        deedWardDate: '',
        deedWardPointUsed: '',
    })

    return (
        <div>
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{birthDate}</div>
            <div>
                <div>{address.address1}</div>
                <div>{address.address2}</div>
                <div>{address.city}</div>
                <div>{address.country}</div>
                <div>{address.zip}</div>
            </div>
            <div>
                <div>{blood.bloodType}</div>
                <div>{blood.RhD}</div>
                <div>{blood.plasmaDonor}</div>
            </div>
            <div>{organDonor}</div>
            <div>
                <div>{category}</div>
                <div>{deedDone.category}</div>
                <div>{deedDone.deedDate}</div>
                <div>{deedDone.pointsPerDeed}</div>
                <div>{deedDone.typeOfDeed}</div>
            </div>
            <div>{nextAvailableDeedDate}</div>
            <div>
                <div>{deedWards.deedWardDate}</div>
                <div>{deedWards.deedWardPointUsed}</div>
                <div>{deedWards.deedWardRetrieved}</div>
            </div>
        </div>
    )
}
