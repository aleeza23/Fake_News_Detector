import Contentbox from "../components/Contentbox";
import Layout from "../components/Layout";
import '../assets/styles/Quickscan.css'
import QuickAnalysis from "../components/QuickAnalysis";
const QuickScan = () => {
    return <>
        <Layout>
            <Contentbox>
                <div className="row">
                    <div className="col-6">
                        <label>News title</label>
                        <input type="text" placeholder="News title..." className="shadow-sm" />
                    </div>
                    <div className="col-6">
                        <label>Author name (optional)</label>

                        <input type="text" placeholder="Author name..." className="shadow-sm" />
                    </div>

                    <div className="col">
                        <label>Add news</label>
                        <textarea placeholder="Post news..." cols="40" rows="6" className="shadow-sm"></textarea>
                    </div>
                </div>

                <QuickAnalysis />                
            </Contentbox>
        </Layout>
    </>;
};

export default QuickScan;
