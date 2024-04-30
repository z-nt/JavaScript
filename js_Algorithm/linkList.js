/* Create linklis {single,doubl ,circle , insert element , delet element  , delete element in pos, travers }*/


//new node ;
class Node{
    constructor(data){
        this.data = data;
        this.next= null;
        this.prev = null;
    }
}

//list 
class nodeList{
    constructor(head = null){
        this.head = head;
    }
    ///print node list
    printList(node){
        while(node){
            console.log(node);
            node = node.next;
            node.prev = node - 1 ;
        }
        return null;
    }
    //find lowest node in list
    findLowestValue(node){
        var minValue = node.data;
        let currentNode = node.next;
        while(currentNode){
            if(currentNode.data < minValue){
                minValue = currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return minValue;
    }
    //delete node from list
    deletNode(node,nodeToDelete){
        if(node == nodeToDelete){
            node  = node.next;
            return node;
        }
        let currentNode = node;
        while(currentNode.next  && currentNode.next
        != nodeToDelete){
                currentNode = currentNode.next;
        }
        if(currentNode.next == null){
            return node;
        }
        currentNode.next = currentNode.next.next;
        return node;
    }
    insertNode(node , newNode , pos){
        if(pos == 1 ){
            newNode.next = node;
            return newNode;
        }
        let currentNode = node;
        for(var i = 0 ; i < pos - 1 && currentNode != null;i++){
            currentNode  = currentNode.next;
        }
        if(currentNode != null){
            newNode.next = currentNode.next;
            currentNode.next = newNode.next;
        }
        return node;
    }
}

var  node1 = new Node(1);
var  node2 = new Node(2);
var  node3 = new Node(3);
var  node4 = new Node(4);
node1.prev = null;
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = null;






