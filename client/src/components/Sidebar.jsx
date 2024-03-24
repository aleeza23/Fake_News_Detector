import logo from '../assets/images/logo.png'
import Button from './Button';
import Navbar from './Navbar';
import { HiDotsVertical } from "react-icons/hi";
import { PiCrownLight } from "react-icons/pi";


const Sidebar = () => {
    return <>
        <div className="sidebar " style={{ width: '25vw', backgroundColor: ' #09092c' }}  >
            <div className="container-fluid" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>

                {/* logo */}
                <div className="row">
                    <div className="col">
                        <img src={logo} alt="logo-img" className='img-fluid' style={{ height: '5rem' }} />
                    </div>
                </div>

                {/* user */}

                <div className="row my-3">
                    <div className="col ">
                        <div className="d-flex px-2" style={{ justifyContent: 'space-between', backgroundColor: '#ffff' }}>
                            <div className='d-flex gap-2 '>
                                <div className='d-flex justify-content-center text-white align-item-center my-auto' style={{ backgroundColor: '#09092c', width: '2rem', height: '2rem', borderRadius: '50%' }}><p className='my-auto'>AR</p></div>
                                <div className=' mt-3'><strong >Aleeza Rubab</strong>
                                    <p className='text-container'>aleezarubab23@gmail.com</p>
                                </div>
                            </div>
                            <HiDotsVertical className='my-auto' />
                        </div>
                    </div>
                </div>

                {/* navbar */}
                <Navbar />

                {/* upgrade plans */}

                <div className="row mt-auto mb-3">
                    <div className="col">
                        <div className="bg-light py-2" >
                            <div className='d-flex justify-content-center mb-2  align-item-center'>
                                <PiCrownLight className='mx-auto fs-1 ' style={{ color: '#FFD62F' }} />

                            </div>
                            <p className='text-center'>Ready to go beyond? Upgrade for premium features</p>
                            <Button className={'mx-auto'}>Get started</Button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </>;
};

export default Sidebar;
