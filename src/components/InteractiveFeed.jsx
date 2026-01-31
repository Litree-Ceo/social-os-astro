import { h } from 'preact';
import { useState } from 'preact/hooks';
import Post from './Post.jsx';

const CreatePost = ({ onPost }) => {
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // State for the image URL

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() || imageUrl.trim()) {
      onPost({ content, imageUrl }); // Pass an object with both content and imageUrl
      setContent('');
      setImageUrl(''); // Reset the image URL field
    }
  };

  return (
    <div class="create-post-card bg-gray-800 bg-opacity-60 backdrop-blur-lg border border-gray-700 rounded-lg p-5 mb-8 shadow-2xl transition-all duration-300 hover:border-purple-500">
      <div class="flex items-start">
        <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="User Avatar" class="w-12 h-12 rounded-full mr-4 border-2 border-gray-600 shadow-md" />
        <div class="w-full">
          <form onSubmit={handleSubmit}>
            <textarea 
              class="w-full bg-transparent text-white text-lg placeholder-gray-400 focus:outline-none resize-none" 
              rows="3" 
              placeholder="What's pulsing on the network, @Larry?" 
              value={content} 
              onInput={(e) => setContent(e.target.value)}
            ></textarea>
            
            <input 
              type="text"
              class="w-full bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none rounded-md px-3 py-2 mt-2 border border-gray-700 focus:border-cyan-400 transition-colors"
              placeholder="Paste an image URL (optional)..."
              value={imageUrl}
              onInput={(e) => setImageUrl(e.target.value)}
            />

            <div class="flex items-center justify-between mt-4 pt-3 border-t border-gray-700/50">
              <div class="flex space-x-3 text-gray-400">
                {/* Icons would be components here */}
              </div>
              <button type="submit" class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const InteractiveFeed = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);

  const handlePost = ({ content, imageUrl }) => {
    const newPost = {
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      name: 'Larry',
      handle: 'Larry',
      time: 'Just now',
      content: content,
      image: imageUrl || null, // Use the imageUrl, or null if it's empty
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div class="feed-container max-w-2xl mx-auto py-8">
      <CreatePost onPost={handlePost} />
      <h2 class="text-3xl font-bold mb-6 text-white pt-8">Pulse Stream</h2>
      {posts.map(post => <Post {...post} />)}
    </div>
  );
};

export default InteractiveFeed;
