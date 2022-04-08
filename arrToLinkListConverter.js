/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const arrToLinkListConverter = (arr) => {
let head = arr.reverse().reduce((acc, curr) => {
  if (acc == null) {
    acc = new ListNode(curr);

  } else {
    acc = new ListNode(curr, acc);
  }
  return acc;
}, null);
  return head
}
