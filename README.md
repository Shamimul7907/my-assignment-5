#1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

##answer:

**getElementById
>Call the Id of HTML in Javascript;

>Output is Only One DOM element;
>It's return only one element;

**getElementsByClassName:
>call the class of HTML in javascript;
>it's supposed to be an array of object;
>it's return more than one element;

**querySelector:
>It's a CSS selector;
>It's only satisfy the first element of array;


**querySelectorAll:

>it's satisfy the element like an array of object;
.it's a CSS selector







#2.How do you create and insert a new element into the DOM?

##answer:

document.createElement(""),In this empty string we can create new element like div and if we want to add new element or feature we can use innerText or InnerHTML;
 const newCard = document.createElement("div");
       newCard.innerHTML or new card.innerText





#3.What is Event Bubbling and how does it work?

##answer:


If we click the child element -
->firstly event handler of a child element are active,then the event find the parent element,then find the parent of parent....this whole process looks like a bubble ,and it's called event bubbling.





##4.What is Event Delegation in JavaScript? Why is it useful?

#answer:



In this case ,child element are not individually connected with the event listener,they create only one event listener into their parent element.

It is useful for handle dynamic Elements.





#5.What is the difference between preventDefault() and stopPropagation() methods?

##answer:

**preventDefault():
>prevent then actual work of event;

**stopPropagation() :
>stop the event bubbling in a DOM
