import PropTypes from "prop-types"
import BookItem from "../bookitem/BookItem"

const Books = ({ books }) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {books.map((book) => (
                <BookItem 
                    key={book.id}
                    title={book.bookTitle}
                    author={book.author}
                    rating={book.bookRating.length}
                    pageCount={book.pageCount}
                    imageUrl={book.imageUrl}
                />
            ))}
        </div>
    )
}

Books.propTypes = {
    books: PropTypes.array,
};

export default Books;