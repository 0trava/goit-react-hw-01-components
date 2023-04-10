<h2>Task 1</h2>
Social network profile
It is necessary to create a component with which we could display information about the user of the social network.

![image](https://user-images.githubusercontent.com/102797527/230920586-f8b28e8f-518b-4351-b843-e845fa1fd233.png)


The component must accept multiple props with user information:

username — username
tag — social network tag without @
location - city and country
avatar - link to the image
stats - object with information about activity


<h2>Task 2</h2>
Statistics Section
Create a component that would display statistics on transmitted props. For example, uploads to the cloud by file type, visits to a web page by users from different countries, financial expenses, etc.

![image](https://user-images.githubusercontent.com/102797527/230920644-f140574e-2cdd-4ef9-884e-ba1f1515a333.png)


The component must accept two props title and stats, which specify the title and the statistics object.

title - is optional, and if it is not passed, the
title markup should not be rendered.
stats - an array of objects containing information about the statistics element. Can have any number of elements.
You can skip the background color of the statistics element in the design, or create a function to generate a random color.


<h2>Task 3</h2>
Friend list
We need to create a component with which we could display information about the user's friends. The component must accept one friends prop, which is an array of friend objects.

![image](https://user-images.githubusercontent.com/102797527/230920735-c5ddd48b-3c59-4099-a0c5-b92cf5705680.png)

You need to create a component.

The component must accept several props:

avatar - link to the avatar
name - friend's name
isOnline - a boolean indicating the status of a friend, online or not. Depending on the isOnline prop, the span.status background color should change.

<h2>Task 4</h2>
Transaction History
It is necessary to create a transaction history component in the personal account of the Internet Bank.

![image](https://user-images.githubusercontent.com/102797527/230920786-290dfb7a-8d34-4d43-a037-8a21273f7304.png)

The data for the list is available in JSON format in the transactions.json file. This is an array of objects, each object describes one transaction with the following properties:

id — unique transaction ID
type — transaction type
amount - transaction amount
currency - currency type
It is necessary to create a component that accepts one prop items - an array of transaction objects from transactions.json. The component creates the table markup. Each transaction is a table row.
