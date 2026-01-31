import { h } from 'preact';

const Icon = ({ name }) => {
    const icons = {
        'mdi:dots-horizontal': '...',
        'mdi:comment-outline': 'C',
        'mdi:sync': 'S',
        'mdi:heart-outline': 'H',
        'mdi:chart-bar': 'B',
    }
    return <span class="icon">{icons[name] || ''}</span>
}

// A simple function to format the timestamp
const formatTime = (timestamp) => {
  if (!timestamp) return '';
  const now = new Date();
  const postDate = timestamp.toDate(); // Convert Firestore timestamp to JS Date
  const diffInSeconds = Math.floor((now - postDate) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
  return postDate.toLocaleDateString();
};

const Post = ({ avatar, name, handle, timestamp, content, image }) => {
  const time = formatTime(timestamp);

  return (
    <div class="post-card bg-gray-800 bg-opacity-40 backdrop-blur-md border border-gray-700 rounded-lg p-6 mb-8 shadow-lg transition-all duration-300 hover:border-cyan-400 hover:shadow-cyan-400/20">
      <div class="flex items-center mb-4">
        <img src={avatar} alt={`${name}'s avatar`} class="w-12 h-12 rounded-full mr-4 border-2 border-gray-600" />
        <div class="flex-grow">
          <p class="font-bold text-white">{name}</p>
          <p class="text-sm text-gray-400">@{handle} &middot; {time}</p>
        </div>
        <button class="text-gray-500 hover:text-white">
          <Icon name="mdi:dots-horizontal" />
        </button>
      </div>

      <p class="text-gray-300 mb-4">{content}</p>

      {image && <img src={image} alt="Post image" class="rounded-lg w-full mb-4 border border-gray-700"/>}

      <div class="flex justify-between text-gray-500">
        <button class="flex items-center space-x-2 hover:text-cyan-400">
          <Icon name="mdi:comment-outline" />
          <span>12</span>
        </button>
        <button class="flex items-center space-x-2 hover:text-green-400">
          <Icon name="mdi:sync" />
          <span>8</span>
        </button>
        <button class="flex items-center space-x-2 hover:text-pink-400">
          <Icon name="mdi:heart-outline" />
          <span>42</span>
        </button>
        <button class="flex items-center space-x-2 hover:text-purple-400">
          <Icon name="mdi:chart-bar" />
          <span>1.2k</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
