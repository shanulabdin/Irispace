document.querySelectorAll('.nav-link').forEach(link => {
  // 1. Get the text (e.g., "Services")
  const text = link.textContent.trim();
  
  // 2. Clear the link content
  link.textContent = "";

  // 3. Create a span for every letter
  [...text].forEach((letter, index) => {
    const span = document.createElement("span");
    
    // If it's a space, use a non-breaking space entity
    span.textContent = letter === " " ? "\u00A0" : letter;
    
    // Set variables for CSS to use
    span.style.setProperty("--i", index);
    span.setAttribute("data-letter", letter);
    
    link.appendChild(span);
  });
});