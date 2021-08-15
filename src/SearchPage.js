import React from 'react'
import "./SearchPage.css";
import Button from '@material-ui/core/Button';
import CardItem from "./CardItem";
import {  Link } from "react-router-dom";

const SearchPage = () => {
    return (
        <div className="searchpage">
            <h4>62 stays  20 august 30 august .  2 guest </h4>
            <h2>Stays near by</h2>
            <Link to='/'>
            <Button variant="contained" color="secondary" >Home</Button>
            </Link>
             
            <div className="search_page__btn">
           
            </div>
            <div className="searchPage__items">
               <CardItem
                   imgsrc="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               />
               <CardItem
                   imgsrc="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               />
               <CardItem
                   imgsrc="https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               />
               <CardItem
                   imgsrc="https://images.pexels.com/photos/210547/pexels-photo-210547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               />
               <CardItem
                   imgsrc="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               />
            </div>
        </div>
    )
}

export default SearchPage
