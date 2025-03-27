import AddToCart from "./AddToCart";
import BookReviews from "./BookReviews";

function BookDetail({ book }) {
  return (
    <div className="bg-red-50 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* 左側：產品圖片 */}
        <div className="lg:col-span-5">
          <img
            alt={book.title}
            className="w-full h-auto object-cover object-center rounded-lg shadow-lg border-4 border-yellow-500"
            src={book.cover}
          />
        </div>

        {/* 右側：產品資訊 */}
        <div className="lg:col-span-7">
          <h1 className="text-red-700 text-5xl font-bold mb-4">{book.title}</h1>
          <h2 className="text-yellow-600 text-2xl font-medium mb-4">
            By {book.author}
          </h2>
          <p className="text-gray-800 text-lg leading-7 mb-6">{book.summary}</p>
          <div className="text-4xl font-bold text-green-700 mb-6">
            ${book.price}
          </div>
          <AddToCart book={book} />
        </div>
      </div>

      {/* 評論區 */}
      <div className="mt-12 bg-yellow-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">
          What People Are Saying
        </h2>
        <BookReviews book={book} />
      </div>

      {/* 新年裝飾 */}
      <div className="mt-12 text-center">
        <p className="text-red-600 text-xl font-bold">
          🎉 Happy New Year! 🎉
        </p>
        <p className="text-yellow-700">
          Enjoy the festive season with your favorite books!
        </p>
      </div>
    </div>
  );
}

export default BookDetail;