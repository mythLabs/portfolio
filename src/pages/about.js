import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p> <Link to='/contact'>Reach Out</Link></p>
        </div>
    )
}


export default AboutPage;