import React from 'react'
import Button from '@material-ui/core/Button';
import "./CardItem.css";

const CardItem = ({imgsrc}) => {
    return (
        <div className="carditem">
          <img src={imgsrc} alt="not" />
            <div className="carditem__info">
                 <h5>private floor in London</h5>
                 <h2>30 min to oxford street</h2>
            <Button variant="contained">Flixibility</Button>
            <Button variant="contained">Type opf place</Button>
            <Button variant="contained">Price</Button>
            <Button variant="contained">Rooms and beds</Button>
            <Button variant="contained">More..</Button>
            <p>🌟🌟</p>
            </div>
            <div className="carditem__price">
                <h2>$25/night</h2>
                <p>$120 total</p>
            </div>
            
        </div>
    )
}

export default CardItem
