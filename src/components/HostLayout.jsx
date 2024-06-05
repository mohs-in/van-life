import { Link } from "react-router-dom";

export default function HostLayout () {
    return (
        <div className="host-nav">
            <Link to=''>Dashboard</Link>
            <Link to='income'>Income</Link>
            <Link to='/vans'>Vans</Link>
            <Link to='reviews'>Reviews</Link>
        </div>
    )
}