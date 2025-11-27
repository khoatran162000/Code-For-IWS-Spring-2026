const data = { name: "Test User", email: "test@example.com" };

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
};

fetch('https://api.example.com/users', options);

// headers: {
//   'Content-Type': 'application/json', // I am sending JSON
//   'Accept': 'application/json'         // I want JSON back
// }

