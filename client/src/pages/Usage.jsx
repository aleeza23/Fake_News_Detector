import Contentbox from "../components/Contentbox";
import Layout from "../components/Layout";
import usageImg from '../assets/images/image.png'
import usageFlow from '../assets/images/flow new 2.png'

const Usage = () => {
    return <>
        <Layout>
            <Contentbox>
                <div className="row">
                    <div className="col">
                        <h4 className="text-center fw-bold">Welcome to the Fake News Detector App</h4>
                        <img src={usageImg} alt="usage-img" className="img-fluid mb-2" style={{ height: 'auto', width: '100%' }} />
                        <p>Thank you for choosing our app to help you discern between real and fake news. Below, we have outlined how to effectively use the Fake News Detector to make informed decisions about the information you consume.</p>
                        <img src={usageFlow} alt="usage-flow" className="img-fluid mt-4 mb-2" /> 
                    </div>
                </div>
            </Contentbox>
        </Layout>
    </>;
};

export default Usage;
