function createOrderManager(){
    let order = [];
    return {
      addOrder : function(order){
        order.push(order);
      },
      updateOrder : function(orderId, updatedOrder){
        let index = orders.findIndex(order =>
        order.id===orderId);
        if(index !== -1){
          orders[index]==
          
          {...orders[index], ...updatedOrder };
        }
      }, sortOrders : function(key, ascending= true ){
        orders.sort((a,b) => 
            ascending ? a[key]-b[key]: b[key]-a[key] 
      );
    },
       exportOrders : function(){
         return JASON.stringify(orders, null, 2);
       }
    };
  }
  let orderManager = createOrderManager();
  
  orderManager.addOrder({id:1, item :"Laptop", price:90000, status : "Pending"});
  orderManager.addOrder({id:2, item :"phone", price:60000, status : "Shipped"})
  orderManager.addOrder({id:3, item :"Charger", price:5000, status : "Delivered"})
  console.log(orderManager.exportOrders());
  
  orderManager.updatedOrder(1, {status:"Delivered",price:9500});
  console.log(orderManager.updatedOrder());
  