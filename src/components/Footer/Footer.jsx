import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Header>Обратная связь</Card.Header>
      <Card.Body>
        <Card.Title>Контактные номера</Card.Title>
        <Card.Text>номер:+996700147183</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HeaderAndFooterExample;
