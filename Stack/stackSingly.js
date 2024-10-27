class stack {
    constructor() {
        this.head = null;
    }
    push(stackData) {
        let newNode = new node (stackData);
        newNode.head = this.head;
        this.head = newNode;
    }
}

class node {
    constructor(stackData) {
        this.data = stackData;
        this.head = null;
    }
}

stack.push = function (stackData) {
    let newNode = new node (stackData);
    newNode.head = this.head;
    this.head = newNode;
}

stack.pop = function () {
    if (this.head == null) {
        return null;
    }
    let temp = this.head;
    this.head = this.head.head;
    return temp.data;
}

