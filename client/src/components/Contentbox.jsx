import Button from "./Button";

const Contentbox = () => {
    return <>
        <main style={{ width: '75vw', backgroundColor: '#DADADA' }}>
            <div className="container-fluid p-0 d-flex " style={{ height: '100vh' }}>
                <div className="container-fluid p-0 " >
                    {/* content body start */}
                    <div className="d-flex align-items-center px-3" style={{ height: '12%', width: '100%', padding: '0', backgroundColor: '#ffff' }}>
                   
                    <Button className={'ms-auto '}>Log out</Button>

                

                    </div>
                    <div className="scroll-box " style={{ backgroundColor: "#e6e6e6", height: "88%" }}>
                        <div className="scroll-inner ">
                            <div className="px-4 py-2" style={{ height: '88%' }}>

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
