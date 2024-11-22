import React, { useState } from 'react';
import './BlogPage.css';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string; // For Instagram-like posts
  likes: number;
  hearts: number;
  emojiReactions: { [key: string]: number };
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "First Blog Post",
      content: "This is the content of the first blog post. It looks like Instagram!",
      image: "https://via.placeholder.com/500", // Placeholder image
      likes: 10,
      hearts: 5,
      emojiReactions: { "😊": 3, "🔥": 4, "👍": 2 },
    },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "", image: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

  const addNewPost = () => {
    if (!newPost.title || !newPost.content || !newPost.image) return;
    const newPostObject: BlogPost = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      image: newPost.image,
      likes: 0,
      hearts: 0,
      emojiReactions: { "😊": 0, "🔥": 0, "👍": 0 },
    };
    setPosts([newPostObject, ...posts]);
    setNewPost({ title: "", content: "", image: "" });
  };

  const handleReaction = (postId: number, type: "likes" | "hearts") => {
    setPosts(
      posts.map(post => {
        if (post.id === postId) {
          post[type]++;
        }
        return post;
      })
    );
  };

  const handleEmojiReaction = (postId: number, emoji: string) => {
    setPosts(
      posts.map(post => {
        if (post.id === postId) {
          post.emojiReactions[emoji]++;
        }
        return post;
      })
    );
  };

  const openEditPost = (post: BlogPost) => {
    setIsEditing(true);
    setCurrentPost(post);
  };

  const saveEditPost = () => {
    if (currentPost) {
      setPosts(
        posts.map(post => (post.id === currentPost.id ? currentPost : post))
      );
      setIsEditing(false);
      setCurrentPost(null);
    }
  };

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Instagram-Inspired Blog</h1>
        <button className="add-post-button" onClick={addNewPost}>
          + Add Post
        </button>
      </header>

      {isEditing && currentPost && (
        <div className="edit-banner">
          <h2>Edit Post</h2>
          <input
            type="text"
            value={currentPost.title}
            onChange={(e) =>
              setCurrentPost({ ...currentPost, title: e.target.value })
            }
          />
          <textarea
            value={currentPost.content}
            onChange={(e) =>
              setCurrentPost({ ...currentPost, content: e.target.value })
            }
          />
          <button onClick={saveEditPost}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}

      <div className="add-post-form">
        <input
          type="text"
          placeholder="Enter post title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Enter post content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter image URL"
          value={newPost.image}
          onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
        />
        <button onClick={addNewPost}>Submit Post</button>
      </div>

      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <div className="reactions">
                <button onClick={() => handleReaction(post.id, "likes")}>
                  👍 Like ({post.likes})
                </button>
                <button onClick={() => handleReaction(post.id, "hearts")}>
                  ❤️ Heart ({post.hearts})
                </button>
                {["😊", "🔥", "👍"].map(emoji => (
                  <button
                    key={emoji}
                    onClick={() => handleEmojiReaction(post.id, emoji)}
                  >
                    {emoji} ({post.emojiReactions[emoji]})
                  </button>
                ))}
              </div>
              <button
                className="edit-button"
                onClick={() => openEditPost(post)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
