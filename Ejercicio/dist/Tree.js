"use strict";
class TreeNode {
    constructor(value) {
        this.value = value;
        this.rigth = null;
        this.left = null;
    }
}
function preOrderTraversal(node) {
    if (node === null)
        return;
    console.log(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.rigth);
}
function inOrderTraversal(node) {
    if (node === null)
        return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.rigth);
}
function postOrderTraversal(node) {
    if (node === null)
        return;
    postOrderTraversal(node.left);
    postOrderTraversal(node.rigth);
    console.log(node.value);
}
function insertBinaryTreeNode(root, value) {
    if (root === null) {
        return new TreeNode(value);
    }
    if (value < root.value) {
        root.left = insertBinaryTreeNode(root.left, value);
    }
    else {
        root.rigth = insertBinaryTreeNode(root.rigth, value);
    }
    return root;
}
const root = new TreeNode(10);
insertBinaryTreeNode(root, 5);
insertBinaryTreeNode(root, 3);
insertBinaryTreeNode(root, 2);
insertBinaryTreeNode(root, 8);
insertBinaryTreeNode(root, 23);
insertBinaryTreeNode(root, 15);
inOrderTraversal(root);
