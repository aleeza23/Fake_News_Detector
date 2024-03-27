import { RiDeleteBin6Line } from "react-icons/ri";

const QuickAnalysis = () => {
    return <>

   
        <p className="ms-1 fs-4 mt-5" style={{fontFamily : "'Poppins', sans-serif"}}>Results</p>
        <div className="row">
            <div className="col">
                <div className="result-box mb-3 px-3">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div className="my-auto">
                            <strong>This is the first news</strong>
                            <br />
                            <i>Dec 02/ 2020</i>
                        </div>
                        <div className="d-flex  gap-2"><div className="real-news rounded text-white">Real</div>
                            <div className="bg-light px-2 text-black rounded">2.08</div>
                            <RiDeleteBin6Line className="my-auto" />
                        </div>





                    </div>
                </div>

            </div>
        </div>
    </>;
};

export default QuickAnalysis;
