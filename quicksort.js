'use strict';

let randomArray = Array.from({length:100}, ()=>{
    return Math.floor(Math.random()*1000)
});

console.log(`Before: \n${randomArray}`);
quicksort(randomArray);
console.log(`After: \n${randomArray}`);



function quicksort(baseArray, lowIndex=0, highIndex = baseArray.length-1){
    if(lowIndex>=highIndex)return;

    const pivotIndex = Math.floor(Math.random()*(highIndex-lowIndex))+lowIndex;
    let pivot = baseArray[pivotIndex];
    swap(baseArray, pivotIndex, highIndex);

    const midPoint = partition(baseArray, lowIndex, highIndex, pivot);
    
    //calling for left subArray
    quicksort(baseArray, lowIndex, midPoint-1);
    //calling for right subArray
    quicksort(baseArray, midPoint+1, highIndex);
}


function partition(baseArray, lowIndex, highIndex, pivot){
    let leftPointer = lowIndex;
    let rightPointer = highIndex-1;

    while(leftPointer<rightPointer){
        while(baseArray[leftPointer]<=pivot && leftPointer<rightPointer){
            leftPointer++;
        }
        while(baseArray[rightPointer]>=pivot && leftPointer<rightPointer){
            rightPointer--;
        }
        swap(baseArray, leftPointer, rightPointer);
    }

    if(baseArray[leftPointer]>baseArray[highIndex]){
        swap(baseArray, leftPointer, highIndex);
    }
    else {
        leftPointer = highIndex;
    }
    //returning the midpoint = pivot's index
    return leftPointer;
}


function swap(baseArray, leftIndex, rightIndex){
    let temp = baseArray[leftIndex];
    baseArray[leftIndex] = baseArray[rightIndex];
    baseArray[rightIndex] = temp;
}