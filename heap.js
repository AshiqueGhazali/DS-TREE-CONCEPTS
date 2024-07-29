class mainHeap{
    constructor(){
        this.heap = []
    }

    parent(i){
        Math.floor((i-1)/2)
    }

    leftChild(i){
        return 2 * i + 1
    }

    swap(i, j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }

    insert(data){
        this.heap.push(data)
        this.heapify()
    }

    heapify(){
        let i =  this.heap.length-1

        while(i > 0 && this.heap[i] < this.heap[this.parent(i)]){
            this.swap(i , this.parent(i))
            i = this.parent(i)
        }
    }

    pop(){
        return this.extractMin()
    }

    extractMin(){
        if(this.heap.length === 0)return null
        if(this.heap.length === 1)return this.heap.pop()

            this.heap[0] = this.heap.pop()
            this.heapifyDown()

    }


    heapifyDown(){
        let length = this.heap.length
        let i = 0

        while(true){
            let l = this.leftChild(i)
            let r = this.rightChild(i)
            let smallest = i

            if(l < length && this.heap[l] < this.heap[smallest]){
                smallest = l
            }
            if(r < length && this.heap[r] < this.heap[smallest]){
                smallest = r
            }
            if(i === smallest){
                break
            }
            this.swap(i , smallest)
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