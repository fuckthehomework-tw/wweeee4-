import books_reviews from "../json/books_reviews.json";
import BookItem from "./BookItem";

function BookList() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Explore Our Collection
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Discover the best books from a variety of genres. Find your next
          favorite read today!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books_reviews.map((book) => (
            <BookItem key={book.ID} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookList;