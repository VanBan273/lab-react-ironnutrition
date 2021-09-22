import { Card, Col, Divider, Button } from "antd";

function FoodBox(props) {
  return (
    <Col>
      <Card title={props.comidas.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={props.comidas.image} alt="img" height={60} />
        <p>Calories: {props.comidas.calories}</p>
        <p>Servings: {props.comidas.servings}</p>
        <p>
          <b>Total Calories: {props.comidas.calories * props.comidas.servings} </b> kcal
        </p>
        <Button type="primary"  >
          Delete
        </Button>
      </Card>
    </Col>
  );
}
export default FoodBox;
