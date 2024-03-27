import Button from "./Button";

const Contentbox = ({ children }) => {
    return <>
        <main className="bg-light" style={{ width: '75vw',}}>
            <div className="container-fluid p-0 d-flex " style={{ height: '100vh' }}>
                <div className="container-fluid p-0 " >
                    {/* content body start */}
                    <div className="d-flex align-items-center px-3 shadow-sm" style={{ height: '12%', width: '100%', padding: '0', backgroundColor: '#ffff' }}>
                        <h3>Scan News</h3>
                        <Button className={'ms-auto '}>Log out</Button>

                    </div>
                    <div className="scroll-box " style={{ height: "88%" }}>
                        <div className="scroll-inner ">
                            <div className="px-4 py-2" style={{ height: '88%' }}>
                                {children}
                            </div>

                            {/* content body end */}
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </>;
};

export default Contentbox;
