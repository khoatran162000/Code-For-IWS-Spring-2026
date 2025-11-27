/*
  Goal: Create a <div> with an <h1> inside it and add it to the <body>.
  Analysis: This requires 6 discrete, step-by-step commands.
*/

// 1. Find the parent element
const bodyTag = document.querySelector('body');

// 2. Create the child element
const divTag = document.createElement('div');

// 3. Create the grandchild element
let h1Tag = document.createElement('h1');

// 4. Add content to the grandchild
h1Tag.innerText = "Hello World";

// 5. Append the grandchild to the child
divTag.append(h1Tag);

// 6. Append the child to the parent
bodyTag.append(divTag);
