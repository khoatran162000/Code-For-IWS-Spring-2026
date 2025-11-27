document.addEventListener("DOMContentLoaded", () => {
  
  const quoteButton = document.getElementById("quote-btn");
  const quoteDisplay = document.getElementById("quote-display");
  
  async function getQuote() {
    quoteDisplay.innerHTML = "<p>Loading...</p>";
    
    try {
      const response = await fetch("https://api.quotable.io/random");
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      quoteDisplay.innerHTML = `
        <p>"${data.content}"</p>
        <span>- ${data.author}</span>
      `;
      
    } catch (error) {
      console.error("Error fetching quote:", error);
      quoteDisplay.innerHTML = "<p>Failed to fetch quote. Please try again.</p>";
    }
  }
  
  quoteButton.addEventListener("click", getQuote);
});
