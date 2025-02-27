function max(n1,n2,n3){
    return n1 >n2 && n1>n3 ? n1: n2>n1 && n2>n3?n2 : n3 >n2 && n3>n1 ? n3: "Same number";
} 
console.log(ma(4,5,6)) //output : 6