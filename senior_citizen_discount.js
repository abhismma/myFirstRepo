function check_age(n){
    if(n>=1 && n>=60){
        console.log("Eligible for Senior discount")
    } else if(n>=1 && n<60){
        console.log("Not Eligible for Senior Discount")
    } else{
        console.log("Invalid Age")
    }
}