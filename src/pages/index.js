import React from 'react';
import { Link } from 'gatsby';

import Footer from '../components/footer';
import Header from '../components/header';

const IndexPage = () => {
    return(
        <div>
            <Header/>
           <h2> mythLabs - Amit bisht - full stack developer</h2>
           <p>Need help? <Link to="/contact">Contact me</Link></p>
           <Footer/>
        </div>
    )
}

export default IndexPage;
