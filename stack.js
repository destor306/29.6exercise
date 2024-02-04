/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let new_node = new Node(val)
    if (this.first == null){
      this.first = new_node;
      this.last = new_node;
    }
    else{
      let temp = this.first;
      this.first = new_node;
      this.first.next = temp;
    }
    this.size +=1
    return undefined
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) throw new Error("Empty Stack");
    let value = this.first.val;
    this.first = this.first.next
    this.size--;

    return value;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size ===0;
  }
}

module.exports = Stack;

// stack = new Stack()
// stack.push(10);
// console.log(stack);
// console.log(stack.peek());

