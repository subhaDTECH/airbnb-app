import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import Avatar from '@material-ui/core/Avatar';
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
        <img src="https://econsultancy.imgix.net/content/uploads/2016/08/06100751/csm_03.07._-_airbnb_wirbt_fuer_erlebnis-angebote_05e6f6316d.jpg?auto=compress,enhance,format,redeye&crop=faces,entropy,edges&fit=crop&q=60&w=6001&h=3001" alt="" />
           <div className="header__center">
               <input type="text" />
               <SearchIcon/>
           </div>
           <div className="header__right">
              <h2>Become a  host</h2>
              <LanguageIcon/>
              <ExpandMoreIcon/>
              <Avatar classname="avatr_img"  />
           </div>
        </div>
    )
}

export default Header;
