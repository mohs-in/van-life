import {Link} from 'react-router-dom'
export default function Nav() {
    return (
        <nav>
            <h1>#VANLIFE</h1>
            <div className="nav--div">
                <Link to='/about' className='nav--links'><p>About</p></Link>
                <Link to='/vans' className='nav--links'><p>Vans</p></Link>
            </div>
        </nav>
        
    )
}