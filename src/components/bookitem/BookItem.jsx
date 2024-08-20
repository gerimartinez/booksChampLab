import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const BookItem = ({ title, author, pageCount, rating, imageUrl }) => {
    return (
        <Card style={{ width: "22rem", margin: 15}}>
            17
            Unidad 1.2: Lógica de componentes - Laboratorio de computación III - TUP
            <Card.Img
                height={400}
                variant="top"
                src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>{rating?.length} estrellas</div>
                <p>{pageCount} páginas</p>
            </Card.Body>
        </Card>
    );
};

BookItem.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pageCount: PropTypes.number,
    rating: PropTypes.number,
    imageUrl: PropTypes.string,
};
export default BookItem;