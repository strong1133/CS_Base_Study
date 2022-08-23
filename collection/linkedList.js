class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    append(newElement) {
        let newNode = new Node(newElement); // 새로운 노드 생성
        let current = this.head;    // 시작 노드 지정
        while (current.next != null) {
            current = current.next; // 맨끝 노드 찾기
        }
        current.next = newNode; // 맨끝 노드 다음에 새로운 노드 삽입
    }

    insert(newElement, item) {
        let newNode = new Node(newElement); // 새로운 노드 생성
        let current = this.find(item);  // 삽입할 위치의 노드 찾기
        newNode.next = current.next;    // 찾은 노드가 가리키는 노드를 새로운 노드가 가르키게 함.
        current.next = newNode;     // 찾은 노드는 이제부터 새로운 노드를 가리킴.
    }

    remove(item) {
        let preNode = this.findPrevious(item); // 삭제 하려는 노드를 가르키는 노드 찾기
        preNode.next = preNode.next.next    // 삭제할 노드의 다음노드를 가르키게 수정.
    }

    find(item) {
        let curNode = this.head; // 시작 노드 지정 (해더)
        while (curNode.element !== item) { // 시작 노드 부터 element를 비교.
            curNode = curNode.next;     // 찾고자 하는 값과 일치하면 해당 node의 next를 반환
        }
        return curNode;
    }

    findPrevious(item) {
        let curNode = this.head;  // 시작 노드 지정 (해더)
        while (curNode.element != null && curNode.next.element !== item) {  // null 이 아니면서 가르키는 다음 노드의 element가 item 과 일치하는 경우
            curNode = curNode.next; 
        }
        return curNode;
    }

    toString(){
        let array = [];
        let curNode = this.head;
        while(curNode.next !== null){
            array.push(curNode.next.element);
            curNode = curNode.next;
        }
        return array;
    }

}

let linkedList = new LinkedList();
linkedList.insert('A', 'head');
linkedList.insert('B', 'A');
linkedList.insert('C', 'B');
linkedList.remove('B');
linkedList.append('B');
linkedList.append('D');
linkedList.append('E');


console.log(linkedList.head);
console.log(linkedList.head.next);
console.log(linkedList.head.next.next);
console.log(linkedList.head.next.next.next);
console.log(linkedList.toString());