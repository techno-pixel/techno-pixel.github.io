// JavaScript Document

// to link up the event listener to the button
let addButton = document.querySelector('button',[0]);

function addText()  // function that adds the lists together
{
  var unorderedList = document.querySelector('ul');   // grab the unorderedList tag
  var newList = document.createElement('li');         // create a list element 
  newList.className = 'myList';                       // give it a class name for css targeting later
  var newLabel = document.createElement('label');     // create label to nest inside the list
  newLabel.className = 'myLabel';                     // give it a class name for css targeting later
  var newTask = document.getElementById('myInput').value;   // to grab the value of the task added
  var newInput = document.createElement('input');     // create the input to hold checkbox 
  newInput.type = 'checkbox';                         // create checkbox
  newInput.className = 'added';                       // add classname
  newInput.value = newTask;                           // have the value be the same as the input
  newInput.id = 'checked';                            // for checking checked box later
  newInput.addEventListener('change', checkBox);
  var newSpan = document.createElement('span');       // create span
  var textNode = document.createTextNode(newTask);    // create the text node
  var delNode = document.createTextNode('Delete');    // creating the text for the button
  //let newBreak = document.createElement('br');      // was adding a break but the spacing was ugly
  //newList.appendChild(newBreak);                    // see above
  var delButton = document.createElement('button');   // create delete button
  delButton.addEventListener('click', masterEventHandler);     // event listener to delete the list
  delButton.id = 'delete';                            // id for delete
  delButton.appendChild(delNode);
  newSpan.appendChild(textNode);                      // insert text into the span
  newList.appendChild(newLabel);                      // start appending the children into the list
  newList.appendChild(newInput);
  newList.appendChild(newSpan);
  newList.appendChild(delButton);
  unorderedList.appendChild(newList);                 // and finally into the unordered list

  function masterEventHandler() {
    if(true) {
      if(confirm('Are you sure you want to send this task to the void?')) {
        newList.style.display = 'none';                 // to remove lists when delete button is hit
      }
    }
  }

  function checkBox() {
    if(newInput.checked == true) {
      newList.style.textDecoration = 'line-through';  // adds a line through if checkbox is checked
      newList.style.color = 'green';                  // makes it green text on checkbox
      document.getElementById('ding').play();         // ding sound when checked 
      unorderedList.appendChild(newList);             // brings list item last
    } else {
      newList.style.textDecoration = 'none';          // removes it
      newList.style.color = 'black';                  // returns it back to normal on uncheck
      unorderedList.prepend(newList);                 // brings list item to top if unchecked
    }
  }  
}

addButton.addEventListener('click', addText);         // eventlistener for the add button


// i had to keep the functions nested because it couldn't access the newly created items within the add text functions
