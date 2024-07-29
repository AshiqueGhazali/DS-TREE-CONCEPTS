function HeapSort(array){ 
    const n = array.length

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array , n , i)
    }

    for (let i = n - 1; i >= 0; i--) {
        [array[0] , array[i]] = [array[i] , array[0]]
        heapify(array , i , 0)
    }

    return array
}  

function heapify( array , n , i){
    let largest = i
    let l = 2 * i + 1
    let r = 2 * i + 2

    if(l < n && array[l] > array[largest]){
        largest = l
    }
    if(r < n && array[r] > array[largest]){
        largest = r
    }

    if(largest !== i){
        [array[i] , array[largest]] = [array[largest] , array[i]]
        heapify(array , n , largest)
    }
}

const arrs = [5,47,23,6,4,8]

console.log(HeapSort(arrs)) 


// heap sort example 2
function heapSort(array) {
    const n = array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        minHeapify(array, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];

        minHeapify(array, i, 0);
    }

    return array;
}

function minHeapify(array, n, i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && array[left] < array[smallest]) {
        smallest = left;
    }
    if (right < n && array[right] < array[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        [array[i], array[smallest]] = [array[smallest], array[i]];
        minHeapify(array, n, smallest);
    }
}

const arr = [5, 47, 23, 6, 4, 8];

console.log(heapSort(arr));
