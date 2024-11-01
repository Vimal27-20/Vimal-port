import './VideoGallery.css';


const VideoGallery = () => {
  return (
    <div className="container">
      <h1>Video Gallery</h1>
      <div className="card">
        <h2>Project Videos</h2>
        <p>
          Watch some of our recent project demos and learn how we bring ideas to life through collaboration and innovation.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/samplevideo" title="Video 1" frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="card">
        <h2>Behind the Scenes</h2>
        <p>
          A behind-the-scenes look at our development process, from brainstorming to final deployment.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/samplevideo" title="Video 2" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default VideoGallery;
