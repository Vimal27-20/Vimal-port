import './VideoGallery.css';

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      category: 'VENTURE-BAG',
      title: 'The Bag Videography Showcasing Style and Utility',
      description: 'A simple yet captivating video showcasing the design, details, and functionality of the bag, perfect for highlighting its style and everyday use.',
      videoUrl: 'https://www.youtube.com/embed/t2NFC6vPZFI',
      thumbnail: 'https://via.placeholder.com/300x200?text=Thailand',
    },
    {
      id: 2,
      category: 'Random clips',
      title: 'Day-by-Day Travel Vlogs: My Journey',
      description: 'Follow my daily travel journey as I explore new places, cultures, and experiences, sharing the highlights and hidden gems along the way.',
      videoUrl: 'https://www.youtube.com/embed/stN3E6MtqO8?si=7tCiPNyulbL3xpeK',
      thumbnail: 'https://via.placeholder.com/300x200?text=Amazon',
    },
    {
      id: 3,
      category: 'Memories-Vlog',
      title: 'Moment- Share the Good Life',
      description: 'Capture and share the special moments that make life beautiful, celebrating joy, memories, and the little things that bring happiness.',
      videoUrl: 'https://www.youtube.com/embed/RNxZBb8OoRY?si=yLwHXZCp11eKyDUT',
      thumbnail: 'https://via.placeholder.com/300x200?text=Gadgets',
    },
    {
      id: 4,
      category: 'Education',
      title: 'Learn Coding in 10 Days',
      description: 'A comprehensive guide to learning programming basics in a short timeframe.',
      videoUrl: 'https://www.youtube.com/embed/samplevideo3',
      thumbnail: 'https://via.placeholder.com/300x200?text=Coding',
    },
    {
      id: 5,
      category: 'Fitness',
      title: '5-Minute Daily Workouts',
      description: 'Quick and effective workout routines to stay fit and healthy every day.',
      videoUrl: 'https://www.youtube.com/embed/samplevideo4',
      thumbnail: 'https://via.placeholder.com/300x200?text=Workouts',
    },
  ];

  return (
    <div className="video-gallery">
      <h1 className="gallery-title">Video Gallery</h1>
      <div className="video-cards">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <div className="video-thumbnail">
              <iframe
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-content">
              <span className="video-category">{video.category}</span>
              <h2 className="video-title">{video.title}</h2>
              <p className="video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
