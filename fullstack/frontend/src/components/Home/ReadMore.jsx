import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "../Home/readmore.scss";
import { mainContext } from "../../Context/ContextProvider";

const ReadMore = () => {
 
  const {reads}=useContext(mainContext)
 
  return (
    <div className="readmore">
      <div className="container">
        <div className="row g-2">
          {reads?.map((read)=>{
            return(  <div className="col-lg-4 col-md-4 col-sm-12  " key={read._id}>
            <div className="read_card1">
              <img
                src={read.image}
                alt="card1"
              />
              <div className="card1_color" style={{backgroundColor:read.color}}></div>
            <h3>{read.title}</h3>
              <Link to="/events" className="read_link">
                <button>Read More</button>
              </Link>
            </div>
          </div>)
          })}
        
        
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
