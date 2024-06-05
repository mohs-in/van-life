import { Outlet } from "react-router-dom";
import HostLayout from '/src/components/HostLayout'
export default function Host () {
    return (
        <>
            <HostLayout />
            <Outlet />
        </>
    )
}