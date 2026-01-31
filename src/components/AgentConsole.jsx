import { useState, useEffect } from 'preact/hooks';
import { supabase } from '../lib/supabase';

export default function AgentConsole() {
  const [session, setSession] = useState(null);

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
    <div className="agent-console-inner glass-card">
      {!session ? (
        <button onClick={handleLogin} className="github-login-btn">
          Login with GitHub
        </button>
      ) : (
        <div className="user-session">
          <p>Welcome, {session.user.email}</p>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      )}
    </div>
  );
}