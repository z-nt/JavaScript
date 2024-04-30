const numbers = [2,3,4,1,0,9,8,7,6,5];


/*sort algorithm  in array */
//bubble sort
function bubbleSort(arr){
    for(var i = 0 ; i < arr.length - 1   ; i++){
            for(var j = 0  ; j < arr.length - i - 1 ; j++){
                if(arr[j] > arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
    }
    console.log(numbers);
}
//selection sort
function selectionSort(arr){
    for(var i = 0 ; i < arr.length - 1 ; i++){
        let index = i;
        for(var j = i + 1 ; j < arr.length ; j++){
            if(arr[i]  > arr[j+1]){
                let temp = arr[i];
                arr[i] = arr[j+1];
                arr[j+1] = temp;

            }
        }
    }
    console.log(arr);
}
//insertion sort 
function insertionSort(arr){
    for(var i = 0 ; i < arr.length ; i++){
        let insertIndex = arr[i];
        let current = i;
        let j = i - 1;
        while( j >= 0 && arr[j] > insertIndex){
                arr[j+1] = arr[j];
                current = j ;
                j--;
        }
        arr[current] = insertIndex;
    }
    console.log(arr);
}
//quichSort
function quichSort(arr,low,high){

    if(low < high){
        let pivotindex = partiion(arr,low,high);
        quichSort(arr,low,pivotindex-1);
        quichSort(arr,pivotindex +1 , high)

    }



    console.log(arr);
}


//partiion
function partiion(arr,low,high){
    let pivot = arr[high];
    let i = low - 1;
    for(var j= low ; j < high;j++){
        if(arr[j] <= pivot){
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

///counting sort 
const numbersCount = [2,2,2,1,0,3,3,3,4,4,5,5,7,7,8,8];
function countingSort(arr){
    let max_val = arr[0];

    for(var i = 0; i <arr.length;i++){
        if(max_val < arr[i]){
            max_val = arr[i];
        }
    }
    let count = [max_val + 1 ];
    for(var i = 0 ; i < max_val ; i++){
        count[i] =0;
    }
    
    for(var i = 0 ; i < max_val;i++){
        count[arr[i]]++; 
    }
    
    let index = 0;
    for(var i = 0 ; i < max_val;i++){
        while(count[i] > 0){
            arr[index++] = i;
            count[i]--;
        }
    }
    console.log(numbersCount);
}
// merge sort
function merge(left,leftSize, right,rightSize,result){
    let j,k,i;
    j = 0;
    k = 0;
    i = 0;
    while(i < leftSize && j < rightSize){
        if(left[i]  < right[j]){
            result[k++] = left[i++];
        }else{
            result[k++] = right[j++];
        }
    }
    while(i < leftSize){
        result[k++] = left[i++];
    }

    while(j < rightSize){
        result[k++] = right[j++];
    }
}

function mergesort(arr){
    let step = 1;
    while(step < arr.length){
        for(var i = 0 ; i < arr.length ; i +=2 * step){
            let leftSize = step;
            
            let rightSize = step;
            
            if(i+step >= arr.length) leftSize = arr.length- i;
            
            if(i + 2 *step >= arr.length) rightSize = arr.length - i - step;

            let left  =[leftSize];
            let right =[rightSize];

            for(var j = 0 ; j < leftSize;++j){
                left[j] = arr[i+j];
            }
            for(var j = 0 ; j < rightSize ; ++j){
                right[j] = arr[i + step + j];
            }

            let merged = [leftSize + rightSize];

            merge(left,leftSize,right,rightSize,merged);

            for(var j = 0 ; j < leftSize + rightSize ; ++j){
                arr[i+j] = merged[j];
            }
        }
        step *= 2;
    }
    console.log(numbers);
}

/// liner search 

function linerSearch(arr,pos){
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] == pos) console.log(i);
    }

}


//binarty search

function binarySearch(arr, target,size){
    let left  = 0;
    let right = size - 1;

    while(left <= right){
      let mid = (left + right) / 2;

      if(arr[mid] == target) return (mid);
      
      if(arr[mid] < target){
        left = mid +1 ;
       
      }else{
        right = mid - 1;
       
      }

    }
    return -1;
}

let result = binarySearch(numbers,9,10);
console.log(result);

























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

