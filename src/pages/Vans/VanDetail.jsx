import { useParams, Link, useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'
export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = useState(null)
    const location = useLocation()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    const search = location.state?.search || ""

    return (
        <div className="van-detail-container">
            <span style={{padding: '1em'}}>&larr;</span>
            <Link 
                to={`..?${search}`}
                relative="path"
                className='back-button' 
                style={{textUnderlineOffset: '2px', color: '#161616'}}
            > <span>Back to {search !== "" ? (search.split("=")[1]) : "all"} vans</span></Link>

            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p id="van-detail-description">{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}