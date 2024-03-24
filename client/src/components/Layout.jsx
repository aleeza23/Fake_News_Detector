import Contentbox from "./Contentbox";
import Sidebar from "./Sidebar";
import '../assets/styles/Layout.css'

const Layout = () => {
    return <>

        <div className="d-flex bg-light " style={{ height: '100vh' }}>
            <Sidebar />
            <Contentbox />
        </div>

    </>;
};

export default Layout;
