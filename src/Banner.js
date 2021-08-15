import React from 'react'
import "./Banner.css";

import Button from '@material-ui/core/Button';
import {  Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner_info">
                 <h2>Get out  and stretch your imagination</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                 b assumenda quam reiciendis repudiandae harum animi impedit suscipit e
                 xplicabo corrupti perspiciatis?</p>
                 <Link to="/search">
                 <Button  className="banner__btn" variant="contained" color="secondary">
                 Explory nearby 
                </Button>
                 </Link>
                
            </div>
        </div>
    )
}

export default Banner
