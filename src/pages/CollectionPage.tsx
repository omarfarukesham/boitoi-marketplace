import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  oldPrice?: number;
  cover: string;
  category: string;
  rating: number;
  subject: string;
  publisher: string;
  stock: number;
}

const academicBooks: Book[] = [
  {
    id: 1,
    title: "Advanced Calculus: Theory and Practice",
    author: "Dr. Robert Matthews",
    price: 79.99,
    oldPrice: 99.99,
    cover: book1,
    category: "Mathematics",
    rating: 4.5,
    subject: "Mathematics",
    publisher: "Academic Press",
    stock: 0,
  },
  {
    id: 2,
    title: "Introduction to Organic Chemistry",
    author: "Prof. Sarah Wilson",
    price: 85.0,
    oldPrice: 95.0,
    cover: book2,
    category: "Chemistry",
    rating: 4.8,
    subject: "Chemistry",
    publisher: "Science Publications",
    stock: 0,
  },
  {
    id: 3,
    title: "Modern Physics: Quantum Mechanics",
    author: "Dr. James Anderson",
    price: 89.99,
    cover: book3,
    category: "Physics",
    rating: 4.7,
    subject: "Physics",
    publisher: "University Press",
    stock: 0,
  },
];

const Collection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Special Collection</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">Showing {academicBooks.length} special books</p>
            <select className="border rounded-lg px-4 py-2">
              <option>Sort by: Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Popular</option>
            </select>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
                  {book.category}
                </span>
                {book.stock === 0 && (
                  <span className="absolute bottom-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
                    Out of Stock
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-2">by {book.author}</p>
                <p className="text-sm text-gray-500 mb-2">{book.publisher}</p>

                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(book.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({book.rating})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-blue-600">${book.price}</span>
                    {book.oldPrice && (
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        ${book.oldPrice}
                      </span>
                    )}
                  </div>
                  <button
                    disabled={book.stock === 0}
                    className={`px-4 py-2 rounded-lg transition-colors w-full ${
                      book.stock > 0
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {book.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
