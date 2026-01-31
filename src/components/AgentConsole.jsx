import { useState, useEffect } from 'preact/hooks';

// A custom hook to create a typewriter effect for text
const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};

export default function AgentConsole() {
  const logText = useTypewriter('System online. AI agent initialized. Listening for user commands...');

  // All Supabase-related state and effects have been removed.
  // The component no longer tries to manage authentication.

  const handleConnect = () => {
    // This function can be used in the future to connect to a new backend.
    alert('Connection feature coming soon!');
  };

  return (
    <div className="agent-console-inner glass-card p-4 rounded-lg shadow-lg w-96 font-mono text-sm">
      <div className="log-output text-green-400 mb-4 h-20 overflow-y-auto border border-green-700 bg-black bg-opacity-50 p-2 rounded-md">
        <p>{logText}</p>
      </div>
      {/* The component now always shows the connect button and does not handle a session. */}
      <button onClick={handleConnect} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
        Connect with GitHub
      </button>
    </div>
  );
}
