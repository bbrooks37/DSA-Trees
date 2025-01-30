// path-sum.js
const { BinaryTreeNode } = require('./binary-tree');

function hasPathSum(root, targetSum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right && root.val === targetSum) {
    return true;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

function pathSum(root, targetSum) {
  const result = [];

  function findPaths(node, currentSum, currentPath) {
    if (!node) {
      return;
    }

    currentSum += node.val;
    currentPath.push(node.val);

    if (!node.left && !node.right && currentSum === targetSum) {
      result.push([...currentPath]); // Correct: Add a COPY of the path
    } else {
      findPaths(node.left, currentSum, [...currentPath]); // Correct: Pass a COPY!
      findPaths(node.right, currentSum, [...currentPath]); // Correct: Pass a COPY!
    }

    currentPath.pop(); // Backtrack: Remove the last element (crucial!)
  }

  findPaths(root, 0, []);
  return result;
}

module.exports = { hasPathSum, pathSum };