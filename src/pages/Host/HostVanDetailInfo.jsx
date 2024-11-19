import { useOutletContext } from 'react-router-dom';

export default function HostVanDetailInfo() {
    const currentVan = useOutletContext();
    return (
        <>
            <div className='van-detail-container-content'>
                <p> <b>Name:</b> {currentVan.name} </p>
                <p> <b>Category:</b> {currentVan.type}</p>
                <p> <b>Description:</b> {currentVan.description}</p>
                <p> <b>Visibility:</b> Public</p>
            </div>
        </>
    )
}