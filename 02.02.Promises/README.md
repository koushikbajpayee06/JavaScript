
const card = ["shoes","pants","kurta"];

//This api takes cart and return order details
// OrerId(This will create an order in our database)
createOrder(cart); 
//This api will take  orderId and will take to the proceed to payment
proceedToPayment(orderId);

//These two api are asynchronous we dont know how much timw it will take, and they are dependent on each other . 
// We can only do proceed to payment once we have created the order.