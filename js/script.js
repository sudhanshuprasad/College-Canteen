// console.log("test");
document.getElementById("order1").onclick = function() {order(1)};
document.getElementById("order2").onclick = function() {order(2)};
document.getElementById("order3").onclick = function() {order(3)};
let orderlist=[];
function order(item_num){
    orderlist.push(item_num);
    console.log("ordered "+item_num);
    return 0;
}
// document.getElementById("more").onclick=function(){
//     document.getElementById("more").innerHTML=`<li><a href="#5">Shop 5</a></li>
//     <li><a href="#6">Shop 6</a></li>
//     <li><a href="#7">Shop 7</a></li>
//     <li><a href="#8">Shop 8</a></li>
//     <li><a href="#9">Shop 9</a></li>`;
// }