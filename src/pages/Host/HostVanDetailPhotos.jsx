import { useOutletContext } from 'react-router-dom'

export default function HostVanDetailPhotos() {
    const currentVan = useOutletContext();
    return (
        <>
            <div>
                <img src={currentVan.imageUrl} style={{margin: '0 .75em', height: '300px', width: '300px', borderRadius: '5px'}} alt={`Image of ${currentVan.name}`} />
            </div>
        </>
    )
}