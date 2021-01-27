import React from 'react';
import Layout from './Layout';

const About = () => {

    return (
        <Layout title="About" description="This is the About page" >
            <div className="text-center mt-5">
                <a className="btn btn-primary" href="https://github.com/AlexSegen/react-shopping-cart">
                    <h5 width={"18px"} /> <span className="ml-2 mr-4">Visit Repo</span></a>
            </div>
        </Layout>
    );
}

export default About;