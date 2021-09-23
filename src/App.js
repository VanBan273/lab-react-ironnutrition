// src/App.js
import { useState } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./componets/FoodBox";
import { Row } from "antd";
import AddFoodForm from './componets/AddFoodForm';


function App() {
  const [foodInfo, setFoodInfo] = useState(foods);

  return (
    
    
    <div className="App">
      <Row>
        {foodInfo.map((food) => {
        return <FoodBox comidas={food} />
        })}
      </Row>
      
    </div>
    
  );

}
export default App;
