import './App.css';
import UserProfile from './components/UserProfile.jsx';

// In a real application, this data might come from an API.
const users = [
  { name: "Alice", email: "alice@example.com", imageUrl: "https://via.placeholder.com/150" },
  { name: "Bob", email: "bob@example.com", imageUrl: "https://via.placeholder.com/150" },
  { name: "Charlie", email: "charlie@example.com", imageUrl: "https://via.placeholder.com/150" }
];
// Note: While iteration with.map() is common [56],
// manual rendering is used here for explicit clarity.

function App() {
  return (
    // 1. Use the.app-container to apply the flexbox layout
    <div className="app-container">
      
      {/* 2. Render the component three times with different props */}
      <UserProfile 
        name={users[0].name}
        email={users[0].email}
        imageUrl={users[0].imageUrl}
      />
      <UserProfile 
        name={users[1].name}
        email={users[1].email}
        imageUrl={users[1].imageUrl}
      />
      <UserProfile 
        name={users[2].name}
        email={users[2].email}
        imageUrl={users[2].imageUrl}
      />
      
      {/* 3. Render a component without an imageUrl prop 
             to test the default fallback */}
      <UserProfile
        name="Default User"
        email="no.avatar@example.com"
      />

    </div>
  );
}

export default App;
