import React from 'react';
import "./Card.css";




const Card = ({imgsrc}) => {
    return (
        <div className="card">
         <img src={imgsrc} alt="not" />
         <div className="card__info">
             <h2>Online Exprience</h2>
             <p>Lorem ipsum, dolor sit amet consectetur 
             adipisicing elit. Sunt deserunt nihil ut exercitationem dolorum
              odio non nostrum omnis debitis consequatur!</p>
              <h4 className="price_tag">$202</h4>
         </div>
            
        </div>
    )
}

export default Card
