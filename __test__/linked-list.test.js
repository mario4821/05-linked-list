'use strict';

const LinkedList = require('../lib/linked-list');

describe('linked-list.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  test('#insertAtHead', () => {
    const testList = new LinkedList();
    testList.insertAtHead(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtHead(6);
    expect(testList.head.value).toEqual(6);
    expect(testList.head.next.value).toEqual(5);

    testList.insertAtHead(7);
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(5);
  });

  test('#insertAtEnd', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(1);
    expect(testList.head.value).toEqual(1);

    testList.insertAtEnd(2);
    expect(testList.head.value).toEqual(1);
    expect(testList.head.next.value).toEqual(2);


    testList.insertAtEnd(3);
    expect(testList.head.value).toEqual(1);
    expect(testList.head.next.value).toEqual(2);
    expect(testList.head.next.next.value).toEqual(3);

    testList.insertAtEnd(4);
    expect(testList.head.value).toEqual(1);
    expect(testList.head.next.value).toEqual(2);
    expect(testList.head.next.next.value).toEqual(3);
    expect(testList.head.next.next.next.value).toEqual(4);
  });

  test('#pop', () => {
    const testList = new LinkedList();

    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    testList.insertAtEnd(8);

    testList.pop();
    expect(testList.head.next.next.value).toEqual(7);
    expect(testList.head.next.next.next).toBeNull();
  });

  test('#pop is empty and returns null', () => {
    const testList = new LinkedList();
    testList.pop();
    expect(testList.pop()).toBeNull();
  });

  test('#remove(value)', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtEnd(6);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);

    testList.insertAtEnd(7);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(7);

    testList.remove(7);
    expect(testList.head.next.value).toEqual(6);
  });

  test('#remove should return null if empty', () => {
    const testList = new LinkedList();
    testList.remove(5);
    expect(testList.remove(5)).toBeNull();
  });

  test('#map', () => {
    const testList = new LinkedList();
    const callback = x => x / 2;

    testList.insertAtEnd(6);
    testList.insertAtEnd(8);
    testList.insertAtEnd(12);

    testList.map(callback);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(6);
  });
     
  test('#map is empty and should return null', () => {
    const testList = new LinkedList();
    testList.map();
    expect(testList.map()).toBeNull();
  });
});
