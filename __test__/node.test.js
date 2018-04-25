'use strict';

const Node = require('../lib/node');

describe('node.js', () => {
  test('#constructor', () => {
    const node = new Node('This is a test');
    
    expect(node.value).toEqual('This is a test');
    expect(node.next).toEqual(null);
  });
});
