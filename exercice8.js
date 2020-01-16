class Addandpop {

    constructor() {
        this.data1 = [];
        this.data2 = [];
    }

    push(newdata) {
        this.data1.push(newdata);
    }

    dequeue() {
        if (this.data1.size() === 0 && this.data2.size() === 0) {
            return "tableau vide"
        }
        if (this.data2.size() === 0) {
            while (this.data1.size() !== 0) {
                this.data2.push(this.data1.pop());
            }
        }
        return this.data2.pop();
    }


}

export { Addandpop };