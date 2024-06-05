import { Outlet } from 'react-router-dom'

export default function Host() {
    return (
        <>
            <h1>dashboard page goes here...</h1>
            <Outlet />
        </>
    )
}