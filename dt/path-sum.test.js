// path-sum.test.js
const { hasPathSum, pathSum } = require('./path-sum');
const { BinaryTreeNode } = require('./binary-tree'); // Import BinaryTreeNode

describe('pathSum', () => {
  let root;

  beforeEach(() => {
    // Construct a sample tree for testing
    root = new BinaryTreeNode(5);
    root.left = new BinaryTreeNode(4);
    root.right = new BinaryTreeNode(8);
    root.left.left = new BinaryTreeNode(11);
    root.left.left.left = new BinaryTreeNode(7);
    root.left.left.right = new BinaryTreeNode(2);
    root.right.left = new BinaryTreeNode(13);
    root.right.right = new BinaryTreeNode(4);
    root.right.right.right = new BinaryTreeNode(1);
  });

  describe('hasPathSum', () => {
    it('should return true if a path with the target sum exists', () => {
      expect(hasPathSum(root, 22)).toBe(true);
    });

    it('should return false if no path with the target sum exists', () => {
      expect(hasPathSum(root, 20)).toBe(false);
    });

    it('should handle empty trees correctly', () => {
      expect(hasPathSum(null, 5)).toBe(false);
    });

    it('should handle single-node trees correctly', () => {
      const singleNode = new BinaryTreeNode(5);
      expect(hasPathSum(singleNode, 5)).toBe(true);
      expect(hasPathSum(singleNode, 10)).toBe(false);
    });
  });

  describe('pathSum', () => {
    it('should return all paths with the target sum', () => {
      const expectedPaths = [[5, 4, 11, 2], [5, 8, 13], [5, 8, 4, 1]];
      expect(pathSum(root, 22)).toEqual(expect.arrayContaining(expectedPaths));
      expect(pathSum(root, 22).length).toBe(expectedPaths.length); // Check for the correct number of paths
    });

    it('should return an empty array if no paths with the target sum exist', () => {
      expect(pathSum(root, 20)).toEqual([]);
    });

    it('should handle empty trees correctly', () => {
      expect(pathSum(null, 5)).toEqual([]);
    });

    it('should handle single-node trees correctly', () => {
      const singleNode = new BinaryTreeNode(5);
      expect(pathSum(singleNode, 5)).toEqual([[5]]);
      expect(pathSum(singleNode, 10)).toEqual([]);
    });

        it('should handle negative numbers', () => {
            const rootNegative = new BinaryTreeNode(-2);
            rootNegative.left = new BinaryTreeNode(-1);
            rootNegative.right = new BinaryTreeNode(-3);
            expect(pathSum(rootNegative, -5)).toEqual([[-2, -3]]);
        });
  });
});