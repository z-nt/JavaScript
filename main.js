const numbers = [ 1,2,3,4,5,6,7,8,9];

function getMinNumbers(arr){
    var temp = arr[0];
    for(var i = 0 ; i < arr.length ; i++){
            if(temp < arr[i]) arr[i] = temp;
    }
    console.log(temp);
}
//getMinNumbers(numbers);

function getMaxnumbers(arr){
    var temp = arr[0];
    for(var i = 0 ; i < arr.length ; i++){
        if(temp < arr[i]) temp = arr[i];
    }
    console.log(temp);
}
//getMaxnumbers(numbers);

const myString = "i am kian nosratian this is my test string";

function countstring(arr,word){
    var  count = 0;
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] == word) count++;
    }
    console.log(count);
}

//countstring(myString,"i");

function fibo(fib){
    var temp1 = 1;
    var temp2 = 2;
    var fibo = 0;
    for(var i = 0 ; i < fib; i++){
        fibo = temp2 + temp1;
        temp1 = temp2;
        temp2 = fibo
    }
    console.log(fibo);
}

///fibo(8);

function converF_To_c(startStep,endStep,step,C){
    var C;
    var F;
    var startStep,endStep,step;
    for(C = startStep; C<= endStep; C+=step ){
        F = (C * 1.8) + 35;
        console.log(C,F);
    }
}

//converF_To_c(10,20,1,40);





