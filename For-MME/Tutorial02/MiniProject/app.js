// We wrap our code in a 'DOMContentLoaded' event listener.
// This ensures the script doesn't run until the HTML (e.g., the form)
// is fully loaded and ready to be interacted with.
document.addEventListener('DOMContentLoaded', () => {

  // 1. Select the form element using its ID
  const contactForm = document.querySelector('#contact-form');

  // 2. Add the 'submit' event listener to the form
  contactForm.addEventListener('submit', async (event) => {
    
    // 3. Prevent the default form submission (which reloads the page)
    event.preventDefault();
    console.log('Form submission intercepted!');

    // 4. Use a try...catch block for robust error handling
    try {
      
      // 5. Create the data object from the form
      // new FormData(event.target) -> Gathers all inputs with 'name' attributes
      // Object.fromEntries() -> Converts the FormData object to a plain JS object
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      console.log('Form data object created:', data);

      // 6. Define the API endpoint and the fetch options
      const endpoint = 'https://jsonplaceholder.typicode.com/posts';
      const options = {
        // We are CREATING a new resource
        method: 'POST', 
        
        // We are telling the server to expect JSON
        headers: {
          'Content-Type': 'application/json'
        },
        
        // We MUST serialize our JS object to a JSON string
        body: JSON.stringify(data) 
      };

      // 7. Execute the fetch request using async/await
      console.log('Sending data to server...');
      const response = await fetch(endpoint, options);

      // 8. Check if the request was successful (status 200-299)
      if (!response.ok) {
        // If not ok, throw an error to be caught by the 'catch' block
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // 9. Parse the JSON response from the server
      const result = await response.json();
      
      // 10. Log the server's response to show success
      console.log('Success! Server responded:', result);
      alert('Form submitted successfully! Check the console for the server response.');
      
      // Optional: Clear the form after successful submission
      // event.target.reset(); 

    } catch (error) {
      // 11. Handle any errors that occurred during the process
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please check the console for details.');
    }
  });
});
