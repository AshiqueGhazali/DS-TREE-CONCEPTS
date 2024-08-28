class Heap {
    constructor(){
        this.heap =[]
    }

    parent(i){
        return Math.floor((i-1)/2)
    }

    leftChild(i){
        return 2*i+1
    }

    rightChild(i){
        return 2*i+2
    }

    

    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }

    insert(value){
        this.heap.push(value)
        this.heapify()
    }

    heapify(){
        let i = this.heap.length-1

        while(i > 0 && this.heap[i] < this.heap[this.parent(i)]){
            this.swap(i,this.parent(i))
            i = this.parent(i)
        }
    }


    pop(){
        return this.extractMin()
    }

    extractMin(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()

        this.heap[0] = this.heap.pop()
        this.heapifyDown()
    }

    heapifyDown(){
        let length = this.heap.length
        let i = 0

        while(true){
            let left = this.leftChild(i)
            let right = this.rightChild(i)
            let smallest = i

            if(left < length && this.heap[left] < this.heap[smallest]){
                smallest = left
            }

            if(right < length && this.heap[right] < this.heap[smallest]){
                smallest = right
            }

            if(i === smallest){
                break
            }

            this.swap(i,smallest)
            i = smallest
        }
    }

    reverse(){
        const array = []
        for (let i = this.heap.length-1 ; i >= 0; i--) {
            array.push(this.heap[i]);
        }
        console.log(array); 
    }
}

const heap = new Heap()

heap.insert(10)
heap.insert(20)
heap.insert(3)
heap.insert(66)
heap.insert(88)
heap.insert(1)

heap.pop()

console.log(heap);
