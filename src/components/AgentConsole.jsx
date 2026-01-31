import { useState, useEffect } from 'preact/hooks';
import { supabase } from '../lib/supabase';

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
  const [session, setSession] = useState(null);
  const logText = useTypewriter('System online. AI agent initialized. Listening for user commands...');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'github' });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="agent-console-inner glass-card p-4 rounded-lg shadow-lg w-96 font-mono text-sm">
      <div className="log-output text-green-400 mb-4 h-20 overflow-y-auto border border-green-700 bg-black bg-opacity-50 p-2 rounded-md">
        <p>{logText}</p>
      </div>
      {!session ? (
        <button onClick={handleLogin} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
          Connect with GitHub
        </button>
      ) : (
        <div className="user-session text-center">
          <p className="mb-2">Welcome, {session.user.user_metadata.full_name || session.user.email}</p>
          <button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}