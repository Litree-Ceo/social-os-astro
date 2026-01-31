import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import Post from './Post.jsx';
import Auth from './Auth.jsx';

const CreatePost = ({ user, onPost }) => {
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() || imageUrl.trim()) {
      onPost({ content, imageUrl });
      setContent('');
      setImageUrl('');
    }
  };

  return (
    <div class="create-post-card bg-gray-800 bg-opacity-60 backdrop-blur-lg border border-gray-700 rounded-lg p-5 mb-8 shadow-2xl transition-all duration-300 hover:border-purple-500">
      <div class="flex items-start">
        <img src={user.photoURL} alt="User Avatar" class="w-12 h-12 rounded-full mr-4 border-2 border-gray-600 shadow-md" />
        <div class="w-full">
          <form onSubmit={handleSubmit}>
            <textarea 
              class="w-full bg-transparent text-white text-lg placeholder-gray-400 focus:outline-none resize-none" 
              rows="3" 
              placeholder={`What's pulsing on the network, @${user.displayName}?`} 
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

const InteractiveFeed = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handlePost = async ({ content, imageUrl }) => {
    if (user) {
      await addDoc(collection(db, 'posts'), {
        uid: user.uid,
        name: user.displayName,
        handle: user.email.split('@')[0],
        avatar: user.photoURL,
        content,
        imageUrl: imageUrl || null,
        timestamp: serverTimestamp(),
      });
    }
  };

  return (
    <div class="feed-container max-w-2xl mx-auto py-8">
      <Auth user={user} />
      {user && <CreatePost user={user} onPost={handlePost} />}
      <h2 class="text-3xl font-bold mb-6 text-white pt-8">Pulse Stream</h2>
      {loading && <p class="text-white">Loading posts...</p>}
      {!loading && posts.length === 0 && <p class="text-white">No posts yet. Be the first!</p>}
      {posts.map(post => <Post {...post} />)}
    </div>
  );
};

export default InteractiveFeed;
