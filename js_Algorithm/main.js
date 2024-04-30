const numbers = [2,3,4,1,0,9,8,7,6];







///find minimum and maximum number in array;
function findminimumnumber(arr){
    let temp = arr[0];
    for(var i = 0 ; i < arr.length ; i++){
        if(temp > arr[i]) temp = arr[i];
    }
    console.log(temp);
    return temp;

}

function findMaxNumber(arr){
    let temp = arr[0];
    for(var i = 0 ; i < arr.length ; i++){
        if(temp < arr[i]) temp = arr[i];
    }
    console.log(temp);
    return temp;
}

