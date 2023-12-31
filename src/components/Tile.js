import { Card } from "react-bootstrap";
import "./css/tile.css"

export default function Tile(props) {
  return (
    <Card style={{ width: '18rem', border: 'none', color: 'white', backgroundColor: 'transparent' }}>
      <Card.Img variant="top" className="rounded im" src={props.thumbnail}/>
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}