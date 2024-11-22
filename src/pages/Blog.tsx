
import { useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Tree-Chair-Aesthetic: My Journey of Capturing Nature’s Serenity",
      date: "May 17, 2023",
      author: "Admin",
      description:
        "This particular shot, which I call the Tree-Chair-Aesthetic, encapsulates everything I adore about nature photography....",
      image: "https://via.placeholder.com/300x200?text=Blog+1",
      views: 222,
      readTime: "2 min read",
    },
    {
      id: 2,
      title: "The Stair-Life: Finding Beauty in the Overlooked",
      date: "May 16, 2023",
      author: "Admin",
      description:
        "The Stair-Life stands out as a deeply personal and reflective shot....",
      image: "https://via.placeholder.com/300x200?text=Blog+2",
      views: 310,
      readTime: "3 min read",
    },
  ];

  const handleRedirect = (id: number) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <p>All Posts</p>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div
            className="blog-card"
            key={post.id}
            onClick={() => handleRedirect(post.id)}
          >
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-meta">
                {post.author} | {post.date} | {post.readTime}
              </p>
              <p className="blog-description">{post.description}</p>
              <p className="blog-views">{post.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
