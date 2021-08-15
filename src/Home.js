import './App.css';
import React,{useState} from "react"
import Header from "./Header";
import Banner from "./Banner";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Button from '@material-ui/core/Button';
import Card from "./Card";
import Footer from "./Footer";
import {  Link } from "react-router-dom";


const Home = () => {
    const [show,setShow]=useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };
      function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className="app_page">
          <Button  onClick={()=>setShow(!show)} selected={startDate} onChange={(date) => setStartDate(date)} className="showBtn" color="secondary" variant="outlined" >
          {!show ? ("search details"):("Hide")}
        </Button>
        {
            show ? (
        <div className="date__picker">
         <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
         <Link to="/search">
         <Button  className="banner__btn" variant="contained" color="secondary">
                 search
        </Button>
         </Link>
        </div>
            ):("")
        }
         
        
      <Banner/>
      <div className="app__section">
        <Card 
            imgsrc="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Card
            imgsrc="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Card
            imgsrc="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />

      </div>
      <div className="app__section">
        <Card
            imgsrc="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Card 
            imgsrc='https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        />
        <Card
            imgsrc='https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        />

      </div>
       <Footer/>

    </div>
    )
}

export default Home;
