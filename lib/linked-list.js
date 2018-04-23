'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  insertAtEnd(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  pop() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    const pop = currentNode.value;
    currentNode = null;
    return pop;
  }

  remove(value) {
    let currentNode = this.head;
    while (currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    const remove = currentNode.next.value;
    currentNode.next = currentNode.next;
    return remove;
  }
};
