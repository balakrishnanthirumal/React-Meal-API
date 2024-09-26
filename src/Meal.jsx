import { useState } from "react";
import "./index.css";
import { useEffect } from "react";
import axios from "axios";

function Meal(){
    const [items, setItems] = useState([])
    useEffect (() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res => {
            console.log(res.data);
            setItems(res.data.meals)
        }).catch((err) =>{
            console.log(err);
            
            
        });
        
    },[])
    
  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card" key={Math.random() * 1000}>
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    )
  });




    return (
        <>
        <div className="items-container">{itemslist}</div>
        </>
    )
}

export default Meal;