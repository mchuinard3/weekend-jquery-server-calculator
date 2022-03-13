# **Weekend Challenge: Server Side Calculator Project**

## **Description**

The Server Side Calculator allows the user to enter in two numbers as two separate inputs. The user is then able to either add, subtract, multiply, or divide the two numbers that they place into the input fields. 

Once the numbers are placed into the input fields by the user, they are able to select one of the previously mentioned mathematical functions, and then click on the = button. Their answer will then be displayed underneath the inputs. A history of all mathematical operations that are performed by the user will also be displayed beneath their most recent answer. 

## **Problems I Ran Into**

The first problem I ran into was trying to figure out how to keep the historical record and math operations on the server side. I ended up creating two empty arrays on the server side, and then creating a switch statement to push the user's history as well as the user's answers into those two empty arrays. I then appended the information stored in those arrays to the DOM on the client side. The next problem I ran into was making my +, -, *, and / buttons work correctly. I ended up giving them each the same class name of "operator" in my index.html, creating a global variable called button, creating a function that set button equal to `$(this).text();`, then calling that function in my "operator" button click listener. This made it so the correct mathematical operation is performed depending on what button is selected by the suer. 

## **Built With**

- Javascript, jQuery, HTML, CSS, Express, and Postman

## **Acknowledgment**

Credit goes to Prime Digital Academy and my instructor Dane Smith for giving me the instruction and knowledge to make this project possible.


