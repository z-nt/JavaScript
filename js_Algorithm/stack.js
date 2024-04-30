// stack data structure in javaScripts
class Stack{
    constructor(top,capacity){
        this.top = top;
        this.capacity = capacity;
        this.stack=[];
    }
    createStack(capa){
        let newstack = new Stack;
        newstack.top = -1;
        newstack.capacity = capa;
        return newstack;
    }
    push(s , element){
        if(s.top == s.capacity  -1 ){
            console.log("stack is Empty");
        }
        s.stack.push(element);
    }
    pop(s){
        if(s.top == s.capacity - 1){
            console.log("stack is Empty");
        }
        s.stack.pop(stack1.top);
    }
    peak(s){
        if(s.top == -1){
            console.log("stack is empty");
            return -1;
        }
        console.log(s.stck[s.top]);
    }
    isEmpty(s){
        return s.top == -1;
    }
    size(s){
        return s.top + 1;

    }

}


let stack1 = new Stack(10);
stack1.push(stack1,"A");
stack1.push(stack1,"B");
stack1.push(stack1,"C");

console.log(stack1);

stack1.pop(stack1);
console.log(stack1);

console.log(stack1.size(stack1));
