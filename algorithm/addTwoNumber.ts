class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sum = 0;
    let cur = new ListNode(0);
    let result = cur;
    while (l1 || l2) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        sum = sum > 9 ? 1 : 0;
    }
    if (sum) {
        cur.next = new ListNode(sum);
    }
    return result.next;
}

function convertArrayToListNode(arr: number[]): ListNode | null {
    let x = arr.pop();
    if (arr.length === 0) {
        return new ListNode(x, null);
    }
    return new ListNode(x, convertArrayToListNode(arr));
}

const l1 = [2, 3, 4, 5, 4, 5];
const l2 = [3, 5, 6, 3, 6, 4, 8];
let l3 = addTwoNumbers(convertArrayToListNode(l1), convertArrayToListNode(l2));

const res: number[] = [];
while (l3) {
    res.push(l3.val);
    l3 = l3.next;
}
console.log(res.reverse());
