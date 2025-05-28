import blog from '../assets/blog.jpg'
import blog1 from '../assets/blog2.jpg'
import blog2 from '../assets/blog3.jpg'

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

const blogData: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of Digital Reading in 2025",
    excerpt: "Explore how modern technology is reshaping our reading habits and the future of digital books.",
    author: "Sarah Johnson",
    date: "May 15, 2025",
    category: "Digital Reading",
    imageUrl: blog,
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Classic Literature in Contemporary Context",
    excerpt: "Discovering the relevance of classic literature in today's rapidly changing world.",
    author: "Michael Chen",
    date: "May 20, 2025",
    category: "Literature",
    imageUrl: blog1,
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Self-Publishing Success Stories of 2025",
    excerpt: "Stories of authors who made it big through self-publishing platforms this year.",
    author: "Emma Parker",
    date: "May 25, 2025",
    category: "Publishing",
    imageUrl: blog2,
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover insights, tips, and stories from the world of literature
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#FF6B6B] text-white text-sm px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    By {post.author}
                  </span>
                  <button className="text-[#FF6B6B] font-medium hover:text-[#FF5252] transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;