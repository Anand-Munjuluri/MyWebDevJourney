import RestaurantCard from "./RestaurantCard";
import ResList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const[ListofRes,setListofRes]= useState(ResList);
    return(
        <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredList = ListofRes.filter((res) => res.info.avgRating > 4);
                setListofRes(filteredList);
                                                          }
                                                   }
            >
                Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
            {
                    ListofRes.map(restaurant => <RestaurantCard key={restaurant.info.id} ResData={restaurant}/>)
            }
        </div>
    </div>
    
    )
    }

export default Body;