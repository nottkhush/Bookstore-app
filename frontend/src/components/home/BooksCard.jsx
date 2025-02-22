import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => { // Destructure 'books' from props
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => ( // Iterate over the array properly
        <BookSingleCard key={book._id} book={book}/>
      ))}
    </div>
  );
};

export default BooksCard;
