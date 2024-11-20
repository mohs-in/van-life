import { useOutletContext } from 'react-router-dom'

export default function HostVanDetailPricing() {
    const currentVan = useOutletContext();

    return (
        <div style={{margin: '0 .65em'}}>
            <h1 style={{display: 'inline'}}>${currentVan.price}.00</h1><span style={{fontSize: '1.3rem'}}> /day</span>
        </div>
    )
}