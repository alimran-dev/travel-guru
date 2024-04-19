import { Outlet } from "react-router-dom";
import Navbar from "../pages/components/Navbar";

const Root = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Root;