import { Outlet } from "react-router-dom";
import Footer from "./Footer";


const Layout = () => {
    return (
        <>
            <div className="layout-margen">
                <Outlet />
            </div>
            <Footer/>
        </>
    );
};

export default Layout;