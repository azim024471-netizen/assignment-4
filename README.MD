
<!-- ANS TO QUE: 1 -->

1. getElementById :

 getElementById is dom method of javascript.
  we can use this to find or select for an html element. 
  getElementById can select only a single element with the unique id.
  After selecting the element, we can modify its content, style, or attributes dynamically.
  it return a single element.
  example : document.getElementById("title")
 

2. getElementsByClassName :

getElementsByClassName is also a dom method of javascript.
by getElementsByClassName we can select multiple element at once.
its can select many element by the same type class-name from html.
we can modify all of selected items likes its contant, style , or attributes dynamically.
its return multiple element and those elemnet like an ARRAY not a pure ARRAY.
example: document.getElementsByClassName("card")

3. querySelector:

querySelector is another interestion dom method of js.
through the querySelector we can select single first matching element.
querySelector select single element by html-tag, class-name
it also return a single element which is the first matching element.

example: document.querySelector(".card")
         document.querySelector("#title")


4. querySelectorAll:

querySelectorAll is a important dom mathod of javascript.
we can selece multiple element by querySelectorAll
its works with the same type of id, class and html and its need html-class,id and tags
its return a static node list
exmple:document.querySelectorAll(".card")


  <!-- Ans to the que. no. :2 -->
   How do I create and insert a new element into the DOM :

   At first I will create an element by document.createElement("element name") and the into a variable. 
   After that I will add  content inside the element or add some of suitable attribute. 
   There are many kinds of insert methods in javascript. like appendChild(), append(), prepend()
   After all I will select element where I want to insert new element  by appendChild()   





 <!-- Ans to que no : 3 -->
 
 Event Bubbling : Event bubbling  is a mathod of javascript. where a event starts from the target element  and  
 bubbles up to it parent element one by one and rech the top of the dom.

 How its work : At first event starts on target element. Than it move on its parents element after its move step by step
 on parents parent  element and upto the document. we can stop the event bubbling on a targeted element byevent .stopPropagation(); 



<!-- Ans to the que. no : 4 -->

Event Delegation:

 In JavaScript  Event Delegation is a exiting tecnique. Where I do not need to add events listner in one by one, just need to add 
 event listner in the parent elemt. Its work like some of event bubbling  

Importance :

By this adding only one event listner in one element  we can control  all the the
the child elements events. 
Its improve performance and halpes to handel dynamic element.


<!-- Ans to the que. no : 5 -->

Difference between preventDefault() and stopPropagation() methods:

There are many difference between preventDefault() and stopPropagation() methods some of like ,
preventDefault() stops the browser’s default behavior on the other hand topPropagation() stops the event from bubbling up to parent elements.
preventDefault() prevents actions like link redirection, form submission, checkbox default toggle and stopPropagation() prevents parent
event listeners from being triggered.
preventDefault() does not stop propagation and stopPropagation() does not stop default browser behavior.
