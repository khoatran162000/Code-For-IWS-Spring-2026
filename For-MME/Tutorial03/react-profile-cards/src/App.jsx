import './App.css';
import UserProfile from './components/UserProfile.jsx';

// Data for a user
const userAvatar = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=300";

function App() {
  return (
    <div>
      {/* 
        We pass data as attributes.
        Strings use quotes: name="..."
        JS expressions (like variables) use curly braces: imageUrl={...} 
      */}
      <UserProfile 
        name="Alice Smith"
        email="alice.smith@example.com"
        imageUrl={userAvatar} 
      />
    </div>
  );
}

export default App;

