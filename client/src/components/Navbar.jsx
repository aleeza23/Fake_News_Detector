import { TbSettingsCancel } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import { PiCrownLight } from "react-icons/pi";
import { RiBarChart2Line } from "react-icons/ri";

const Navbar = () => {
    return <>
        <div className="row ">
            <div className="col  ">
                <ul className="rounded py-2 px-3" style={{ backgroundColor: '#FFD62F' }}>
                    <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '.7rem' }}> <TbSettingsCancel /> <a href="/" style={{ textDecoration: 'none', color: '#09092C', fontWeight: 'bold', fontSize: '.rem' }}>Quick Scan</a></li>
                </ul>
                <ul className="rounded py-2 px-3 text-white" style={{ backgroundColor: '' }} >
                    <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '.7rem', }}>
                        <RiBarChart2Line /> <a href="/" style={{ textDecoration: 'none', color: '#ffff', fontWeight: 'bold', fontSize: '.rem' }}>Usage</a>
                    </li>
                </ul>
                <ul className="rounded py-2 px-3 text-white" style={{ backgroundColor: '' }} >
                    <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '.7rem', justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }} >
                            <TbReportSearch /> <a href="/" style={{ textDecoration: 'none', color: '#ffff', fontWeight: 'bold', fontSize: '.rem' }}>More Insights</a>
                        </div>
                        <div className="px-3 rounded-pill text-black" style={{ backgroundColor: "#FFD62F" }}><PiCrownLight /></div>
                    </li>
                </ul>
            </div>
        </div>


    </>;
};

export default Navbar;
