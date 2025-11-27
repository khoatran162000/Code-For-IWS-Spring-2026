// 1. Destructure the `props` object directly in the function arguments.
//    This pulls out `name`, `email`, and `imageUrl` as local variables.
function UserProfile({ name, email, imageUrl }) {
  
  // 2. A default value can be set for props that might not be passed.
  const defaultImage = "https://via.placeholder.com/150";

  return (
    <div className="profile-card">
      <img 
        // 3. Use the dynamic prop values.
        //    Use the passed `imageUrl` or fall back to `defaultImage`.
        src={imageUrl || defaultImage} 
        alt={`Profile of ${name}`} 
        className="profile-image" 
      />
      {/* 4. Render the name and email props */}
      <h2 className="profile-name">{name}</h2>
      <p className="profile-email">{email}</p>
    </div>
  );
}

export default UserProfile;

