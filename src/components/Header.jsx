import { NavLink } from "react-router-dom"

export default function Header() {
    let styles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        color: '#161616'
    }
    return (
        <header>
            <NavLink className="site-logo" to="/">#VanLife</NavLink>
            <nav>
                <NavLink 
                    to='/host' 
                    style={({isActive}) => isActive ? styles : null}
                >
                    Host
                </NavLink>

                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? styles : null}
                >
                    About
                </NavLink>
                
                <NavLink 
                    to="/vans"
                    style={({isActive}) => isActive ? styles : null}
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}