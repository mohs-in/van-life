import React from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';

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

    let styles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        color: '#161616'
    }

    return (
        <section style={{marginTop: '2em'}}>
            <span style={{padding: '1em'}}>&larr;</span>
            <Link to='..' className='back-button' style={{textUnderlineOffset: '2px', color: '#161616'}}> <span>Back to all Vans</span></Link>
            <div className='host-van-detail-container'>
                <div className='host-van-detail'>
                    <img src={currentVan.imageUrl} alt="" />
                    <div className='host-van-detail-info'>
                        <i className={`vantype-{currentVan.type} vantype-w`}>{currentVan.type}</i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}<span style={{fontWeight: 400}}>/day</span></h4>
                    </div>
                </div>
                <div className="host-nav" style={{marginLeft: 0, paddingLeft: 0}}>
                    <NavLink to='.' style={({isActive}) => isActive ? styles : null} end>Details</NavLink>
                    <NavLink to='pricing' style={({isActive}) => isActive ? styles : null}>Pricing</NavLink>
                    <NavLink to='photos' style={({isActive}) => isActive ? styles : null}>Photos</NavLink>
                </div>
                
                <Outlet context={currentVan}/>
            </div>
        </section>
    )
}