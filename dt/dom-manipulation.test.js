// dom-manipulation.test.js
const { getElementById, getElementsByTagName, getElementsByClassName } = require('./dom-manipulation');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM(`
<!DOCTYPE html>
<html>
<head>
  <title>DOM Test</title>
</head>
<body>
  <div id="container">
    <p class="my-class">Paragraph 1</p>
    <span class="my-class other-class">Span</span>
    <p>Paragraph 2</p>
    <div id="inner-container">
      <a href="#" id="my-link">Link</a>
      <button>Button</button>
    </div>
  </div>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</body>
</html>
`);

global.document = dom.window.document; // Set the global document

describe('DOM Manipulation', () => {
  describe('getElementById', () => {
    it('should return the element with the given ID', () => {
      const container = getElementById('container');
      expect(container).not.toBeNull();
      expect(container.tagName).toBe('DIV');
    });

    it('should return null if no element with the given ID exists', () => {
      const nonExistent = getElementById('non-existent');
      expect(nonExistent).toBeNull();
    });
  });

  describe('getElementsByTagName', () => {
    it('should return all elements with the given tag name', () => {
      const paragraphs = getElementsByTagName('p');
      expect(paragraphs.length).toBe(2);
      expect(paragraphs[0].textContent).toBe('Paragraph 1');
      expect(paragraphs[1].textContent).toBe('Paragraph 2');
    });

    it('should return an empty array if no elements with the given tag name exist', () => {
      const nonExistent = getElementsByTagName('h1');
      expect(nonExistent.length).toBe(0);
    });
  });

  describe('getElementsByClassName', () => {
    it('should return all elements with the given class name', () => {
      const myClassElements = getElementsByClassName('my-class');
      expect(myClassElements.length).toBe(2);
      expect(myClassElements[0].tagName).toBe('P');
      expect(myClassElements[1].tagName).toBe('SPAN');
    });

    it('should return an empty array if no elements with the given class name exist', () => {
      const nonExistent = getElementsByClassName('non-existent-class');
      expect(nonExistent.length).toBe(0);
    });

        it('should handle elements with multiple classes', () => {
            const elements = getElementsByClassName('my-class');
            expect(elements.length).toBe(2);
            const elementWithMultipleClasses = getElementsByClassName('other-class');
            expect(elementWithMultipleClasses.length).toBe(1);
            expect(elementWithMultipleClasses[0].textContent).toBe('Span');
        });
  });
});