import Sidebar from "./Sidebar";
import '../assets/styles/Layout.css'

const Layout = ({children}) => {
    return <>

        <div className="d-flex bg-light " style={{ height: '100vh' }}>
            <Sidebar />
            {children}
        </div>

    </>;
};

export default Layout;
