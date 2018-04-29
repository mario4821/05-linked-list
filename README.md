# Lab 05 - Linked List

**Author**: Mario Flores Jr.

**Version**: 1.0.0

## Overview

This linked list consists of nodes that are implemented by creating and inserting into the head or tail end of the list. The nodes consist of values as well as references to the next values in the linked list. 

## Functionality

###.insertAtHead(value)
This method that takes in a value and returns the linked list with the value inserted at the head of the linked list.

***Example:***
`.insertAtHead(6)` - will insert node value of 6 at the head of the list shifting other nodes.

###.insertAtEnd(value)
This method takes in a value and returns the linked list with the value inserted at the end of the linked list.

***Example:***
`.insertAtEnd(6)` - will insert node value of 6 at the end of the list.

###.pop()
This method locates the end of the linked list and removes the last node, returning the value of the node that was removed.
```
  pop() {
    let currentNode = this.head;
    if (!this.head) {
      logger.log(logger.INFO, '#pop could not find value.');
      return null;
    }
    if (!currentNode.next) {
      currentNode = null;
      return currentNode;
    }
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
        return null;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
```

###.remove(value)
This method takes in a value which will then be searched through every node in the linked list until it is located. Once node with value is located, it is then removed from the linked list and returned as it's value.

```
  remove(value) {
    if (!this.head) {
      logger.log(logger.INFO, '#remove Linked List could not find value.');
      return null;
    }

    if (this === value) {
      delete this.value;
    } else {
      logger.log(logger.INFO, '#remove does not exist.');
    }
    return undefined;
  }
```


###.map()
This method takes in a callback and performs the function on each node:
```
  map(callback) {
    if (!this.head) {
      logger.log(logger.INFO, '#method Array is empty and could not find value.');
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      currentNode.value = callback(currentNode.value);
      currentNode = currentNode.next;
    }
    return this;
  }
};
```
###Testing
To run test from terminal:
1. Ensure you have access to repsository. You may use: 
```git clone https://github.com/mario4821/05-linked-list.git```

2. Ensure you have required testing packages:
```npm i```

3. To run test:
```npm run test```


