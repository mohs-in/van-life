import React from 'react'
import { Link } from 'react-router-dom'

export default function HostVans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const renderVans = vans.map(van => (
        <div key={van.id} >
            <Link to={`/host/vans/${van.id}`} className='host-listed-van'>
                <img src={van.imageUrl} alt="Van image" />
                <div className='host-listed-van-desc'>
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
            </Link>
        </div>
    ))
    return (
        <div className="host-listed-vans-div">
            <h2>Your Listed Vans</h2>
            {renderVans}
        </div>
    )
}