
import { useParams } from "react-router-dom";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "Tree-Chair-Aesthetic: My Journey of Capturing Nature’s Serenity",
      date: "May 17, 2023",
      author: "Admin",
      readTime: "2 min read",
      
      content: `
        Nature has always been my escape, and I find immense joy in capturing its beauty through my lens. As someone who loves aesthetic views, my passion for photography often drives me to seek out frames that convey peace, vivid colors, and intricate details.

This particular shot, which I call the Tree-Chair-Aesthetic, encapsulates everything I adore about nature photography. 

The scene stood out to me with its crisp details of the trees, a soft interplay of light and clouds, and a serene foreground marked by a table and chairs. The combination of these elements felt like a perfect harmony, and I knew I had to preserve it through my camera.

The Story Behind the Shot
Whenever I arrived early at the university, I would often sit at the table shown in the image. This spot became my go-to refuge, where I could relax, reflect, or have a meaningful conversation with friends. On this day, as I paused to take in the morning calm, I was struck by how the weather amplified the natural beauty of the trees. The varying hues of green, enhanced by the interplay of light and shadow, felt dramatically vibrant. It was a sight too captivating to ignore, and I instinctively decided to capture it.

As I framed the shot, I was mesmerized by how the towering trees framed the view, while the table added a grounding element to the composition. This picture is not just a representation of a scene but a memory of tranquility and inspiration.

The Technical Details
For this capture, I used my mobile phone, a reliable partner in my photography pursuits. Here's how I approached it:

Focal Length: I adjusted it to F1.8, ensuring enough light was captured for a detailed shot, even in subtle lighting conditions.
Shutter Speed: At S 1/1727, I was able to freeze the scene perfectly without any blurring from movement.
ISO Settings: Keeping the ISO at 32 helped maintain a crisp image with minimal noise, highlighting the sharpness of the details.
Lens & Angle: Using the wide-angle mode (13mm), I managed to encompass the vastness of the scene, giving justice to the towering trees and the surrounding atmosphere.
My mobile phone, equipped with Leica Lux, performed exceptionally well in reproducing the natural colors and textures. With its intuitive features and wide-angle capabilities, I could focus entirely on composition and storytelling.

Reflections on the Experience
This photograph reminds me of how nature can be both grounding and uplifting. It captures a fleeting moment of calmness amidst the hustle of life. Whether it’s the vibrant colors of the trees or the inviting simplicity of the table, every element holds a story of its own. For me, photography isn’t just about clicking pictures; it’s about connecting with the environment and finding joy in the smallest details.

Mobile photography has become my go-to medium, proving that with the right perspective and settings, one can create stunning visuals without needing professional gear. This shot stands as a testament to how the simplicity of a smartphone camera, combined with an eye for aesthetics, can result in a picture worth cherishing.
        `,
      image: "https://via.placeholder.com/600x400?text=Blog+1",
      views: 222,
    }
    ,{
      id: 2,
      title: "The Stair-Life: Finding Beauty in the Overlooked",
      date: "May 17, 2023",
      author: "Admin",
      readTime: "2 min read",
      content: `
       Photography has always been a way for me to capture the moments that resonate with my emotions. Among the countless photos I’ve taken, The Stair-Life stands out as a deeply personal and reflective shot. This picture, taken from the third floor of the CS building, carries a story that goes beyond its visual appeal—it’s a narrative of life’s ups and downs and the beauty of appreciating the little things.

The Story Behind the Frame
Every day as I walk past this staircase, the view through the large window never fails to catch my attention. It feels comforting, almost like a familiar companion on my journey to pursuing my master’s degree. To me, the downward stairs represent life’s struggles and challenges, while the staircase leading up to my class symbolizes progress, hope, and the good times that await.

I had walked past this view multiple times before, but on the third day, something clicked. I paused, noticing how the soft hues of the sky, the trees in the distance, and the geometric beauty of the staircase came together to create something extraordinary. This moment reminded me to take notice of the beauty around me—something I had been overlooking amidst my busy routine.

How I Captured the Shot
Equipped with my trusty smartphone, I used its wide-angle capabilities to bring this vision to life. Here's a breakdown of how I captured this serene frame:

Focal Length: I chose a focal length of F2.4, balancing depth and light for a crisp, detailed shot.
Shutter Speed: Set to S 1/384, it allowed me to freeze the moment perfectly, even with subtle movements around me.
ISO Settings: Using an ISO of 20, I ensured minimal noise in the image while maintaining excellent clarity.
Wide-Angle Lens: The 13mm wide-angle lens helped me capture the expansive view of the staircase and the scenery beyond the window.
The smartphone’s Leica Lux capabilities worked like magic, perfectly capturing the warm hues of the sky, the textures of the stairs, and the intricate play of light and shadow. It’s amazing how mobile photography allows me to document such vivid details with ease.

Reflections on the Experience
This picture is more than just a photograph. It’s a reminder to stop and appreciate life’s small yet significant moments. In the hustle and bustle of daily life, we often overlook the simple beauty around us. Taking this picture encouraged me to slow down and take a moment to reflect and appreciate my surroundings.

Through The Stair-Life, I’ve come to realize that life’s staircase is never linear. There are highs and lows, struggles, and joys—but there’s always beauty to be found if you take a moment to look.
        `,
      image: "https://via.placeholder.com/600x400?text=Blog+2",
      views: 222,
    }


    
  ];

  const blog = blogPosts.find((post) => post.id === Number(id));

  if (!blog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="blog-detail-container">
      <h1>{blog.title}</h1>
      <p className="blog-detail-meta">
        {blog.author} | {blog.date} | {blog.readTime}
      </p>
      <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      <div className="blog-detail-content">
        <p>{blog.content}</p>
      </div>
      <p className="blog-detail-views">{blog.views} views</p>
    </div>
  );
};

export default BlogDetail;
