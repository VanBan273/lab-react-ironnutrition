import { useState } from "react";
import { Form, Input, Button } from "antd";

function AddFoodForm(props) {
  const [inputName, setName] = useState("");
  const [inputImage, setCalories] = useState(0);
  const [inputCalories, setImage] = useState("");
  const [inputServings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value);

  const newFood = () => {
    const newObjet = {
      name: inputName,
      image: inputImage,
      calories: inputCalories,
      servings: inputServings,
    };

    props.setFoodList([...props.food, newObjet]);

    return (
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="vertical"
          style={{ marginLeft: 500 }}
        >
          <Form.Item label="Name">
            <Input value={inputName} type="text" onChange={handleNameInput} />
          </Form.Item>
          <Form.Item label="Image">
            <Input value={inputImage} type="text" onChange={handleImageInput} />
          </Form.Item>
          <Form.Item label="Calories">
            <Input
              value={inputCalories}
              type="text"
              onChange={handleCaloriesInput}
            />
          </Form.Item>
          <Form.Item label="Servings">
            <Input
              value={inputServings}
              type="number"
              onChange={handleServingsInput}
            />
          </Form.Item>
          <Button
            onClick={(event) => {
              event.preventDefault();
              newFood();
            }}
            type="submit"
            className=""
          >
            Create
          </Button>
        </Form>
      </div>
    );
  };
}

export default AddFoodForm;
