// DFS interative, Time: O(n), Space:O(n)
const depthFirstValues = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left)
  }
  
  return result;
};


// DFS recursion Time: O(n), Space:O(n)
const depthFirstValues = (root) => {
  if (root === null) return [];
  
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  
  return [ root.val, ...leftValues, ...rightValues];
  
}

//BFS
// Time: O(n)
// Space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). JavaScript does not have a native queue data structure that is maximally efficient.
const breadthFirstValues = (root) => {
  if (root === null) return [];
  
  const values = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const node = queue.shift();
    values.push(node.val);
    
    if (node.left) queue.push(node.left);  //if (node.left !== null) queue.push(node.left)
    if (node.right) queue.push(node.right);
  }
  return values;
};
