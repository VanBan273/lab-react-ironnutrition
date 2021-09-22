import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);


  const handleNameInput = (e) => setName(e.target.value)

  const handleCaloriesInput = (e) => setCalories(e.target.value)

  const handleImageInput = (e) => setImage(e.target.value)

  const handleServingsInput = (e) => setServings(e.target.value)

  return (
    <div>
      <label>Name </label>
      <input value={name} type="text" onChange={handleNameInput} />
      <label>Image </label>
      <input value={image} type="text" onChange={handleImageInput} />
      <label>Calories </label>
      <input value={calories} type="text" onChange={handleCaloriesInput} />
      <label>Servings </label>
      <input value={servings} type="text" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </div>
  );
}

export default AddFoodForm;
