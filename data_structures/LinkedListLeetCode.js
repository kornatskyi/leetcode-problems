
var MyLinkedList = function () {

    this.head = null



};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (typeof index !== 'number') return -1

    if (this.head === null) return null
    let temp = this.head
    let i = 0
    while (i < index && temp !== null) {
        temp = temp.next
    }
    if (temp === null) return -1

    return temp.val

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = {}
    newNode.val = val
    newNode.next = null
    let temp = this.head
    this.head = newNode
    this.head.next = temp



};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {

    if (this.head === null) {
        this.head = {
            val,
            next: null
        }
        return
    }

    let temp = this.head
    while (temp.next) {
        temp = temp.next
    }
    const newNode = {}
    newNode.val = val
    newNode.next = null
    temp.next = newNode

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {


    let temp = this.head
    let i = 0

    while (i < index - 1 && temp !== null) {
        temp = temp.next
    }

    if (temp === null) {
        return -1
    }
    const newNode = {}
    newNode.val = val
    newNode.next = temp.next
    temp.next = newNode


};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {

    let temp = this.head
    let i = 0

    while (i < index - 1 && temp !== null) {
        temp = temp.next
    }

    if (temp.next === null) {
        return - 1
    }

    temp.next = temp.next.next

};

const newLL = new MyLinkedList()

newLL.addAtHead(5)
newLL.addAtHead(3)
newLL.addAtTail(10)

newLL.addAtIndex(1, "addAtIndex")
console.log(newLL.get(0));
console.log(newLL.head);
/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */