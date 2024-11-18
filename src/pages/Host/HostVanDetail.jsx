import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function HostVanDetail() {

    const { id } = useParams();
    const [ currentVan , setCurrentVan ] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans))
    }, [])

    if(!currentVan) {
        return <h1 style={{padding: '1em'}}>Loading...</h1>
    }

    return (
        <section>
            <span style={{padding: '1em'}}>&larr;</span>
            <Link to='..' className='back-button'> <span>Back to all Vans</span></Link>
            <div className='host-van-detail-container'>
                <div className='host-van-detail'>
                    <img src={currentVan.imageUrl} alt="" />
                    <div className='host-van-detail-info'>
                        <i className={`van-type vantype-{currentVan.type}`}>{currentVan.type}</i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}<span style={{fontWeight: 400}}>/day</span></h4>
                    </div>
                </div>
            </div>
        </section>
    )
}