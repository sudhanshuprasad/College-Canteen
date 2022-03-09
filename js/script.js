// console.log("test");
// document.getElementById("order1").onclick = function() {order(1)};
// document.getElementById("order2").onclick = function() {order(2)};
// document.getElementById("order3").onclick = function() {order(3)};
let orderlist=[];
function order(item_num){
    orderlist.push(item_num);
    console.log("ordered "+item_num);
    return 0;
}
module.exports = order;