console.log(" ");
console.log("-------HTML DOM-Intro------");
/* The HTML DOM (Document Object Model)
With the HTML DOM, JS can access and change all the elements of an HTML document. ALL elements are objects:
HTML DOM methods are actions you can perform (on HTML Elements).
HTML DOM properties are values (of HTML Elements) that you can set or change.*/
console.log("-------ex1------");
// changes the content (the innerHTML) of the <p> element with id="demo". getElementById is a method, while innerHTML is a property.
document.getElementById('demo').innerHTML = 'Asta Pasta';
/*The HTML DOM document object is the owner of all other objects in your web page. The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object.*/
console.log("-------Finding elements------");
/*document.getElementById(id)  / method
document.getElementsByTagName(tagName) / method
document.getElementsByClassName(className) / method */ 
console.log("-------Changing elements------");
/*element.innerHTML =  new html content //property
element.attribute = new value //property
element.style.property = new style //property
element.setAttribute(attribute, value) / method */
console.log("-------Adding and Deleting Elements------");
/*document.createElement(element) / method
document.removeChild(element) /method
document.appendChild(element) /method
document.replaceChild(new, old) /method
document.write(text) /method */
console.log("-------Adding Events Handlers------");
/*document.getElementById(id).onclick = function(){code} / method*/

