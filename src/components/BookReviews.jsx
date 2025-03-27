import { createElement } from "react";

function BookReviews({ book }) {
  const reviews = book.reviews;

  const toStar = (rating) => {
    return Array.from({ length: rating }, (_, index) =>
      createElement("span", { className: "text-yellow-500", key: index }, "★")
    );
  };

  const reviewList = reviews.map((review, index) => (
    <div
      key={index}
      className="review-card bg-white shadow-lg rounded-lg p-6 mb-4"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-800">{review.reviewer}</h3>
        <div className="flex">{toStar(review.rating)}</div>
      </div>
      <p className="text-gray-600 text-sm">{review.comment}</p>
    </div>
  ));

  return (
    <section className="reviews-section bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          What People Are Saying
        </h2>
        <div className="reviews-list">{reviewList}</div>
      </div>
    </section>
  );
}

export default BookReviews;