// dom-manipulation.js

function getElementById(id) {
    let foundElement = null;
  
    function traverse(element) {
      if (element.id === id) {
        foundElement = element;
        return; // Stop traversing once found
      }
  
      for (const child of element.children) {
        traverse(child);
        if (foundElement) return; // Stop if already found in a child
      }
    }
  
    traverse(document.body); // Start from the root of the DOM
    return foundElement;
  }
  
  function getElementsByTagName(tagName) {
    const elements = [];
  
    function traverse(element) {
      if (element.tagName === tagName.toUpperCase()) { // Tag names are case-insensitive
        elements.push(element);
      }
  
      for (const child of element.children) {
        traverse(child);
      }
    }
  
    traverse(document.body);
    return elements;
  }
  
  function getElementsByClassName(className) {
    const elements = [];
  
    function traverse(element) {
      if (element.classList && element.classList.contains(className)) {
        elements.push(element);
      }
  
      for (const child of element.children) {
        traverse(child);
      }
    }
  
    traverse(document.body);
    return elements;
  }
  
  module.exports = { getElementById, getElementsByTagName, getElementsByClassName };