import { Card } from "react-bootstrap";

const StoreItem = (id, name, price, imgUrl) => {
    return (
        <Card>
            <Card.Img variant="top" src={imgUrl} height="200px"
            style={{ objectFit: 'cover'}}/>
        </Card>
    )
};

export default StoreItem;