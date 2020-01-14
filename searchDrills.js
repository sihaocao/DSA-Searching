const BinarySearchTree = require('./binarySearchTree');
const Queue = require('./queue');

const tree = new BinarySearchTree()
tree.insert(25)
tree.insert(15)
tree.insert(50)
tree.insert(10)
tree.insert(24)
tree.insert(35)
tree.insert(70)
tree.insert(4)
tree.insert(12)
tree.insert(18)
tree.insert(31)
tree.insert(44)
tree.insert(66)
tree.insert(90)
tree.insert(22)

const dataSet = [
    89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32,
    26, 2, 14, 33,45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28,
    16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27,
    97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69,
    90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42,
    51, 54, 84, 34, 53, 78, 40, 14, 5
   ]

function main() {
    console.log(linear(dataSet, 2));
    console.log(linear(dataSet, 9));
    dataSet.sort((a, b) => a - b);
    console.log(binary(dataSet, 2));
    console.log(binary(dataSet, 9));
    console.log(inOrder((values = []), tree));
    console.log(preOrder((values = []), tree));
    console.log(postOrder((values = []), tree));
    console.log(breadthOrder(tree));
}

main();

function linear(arr, value) {
    let searchCount = 0;
    for (let i = 0; i < arr.length; i++) {
        searchCount++
        if (arr[i] == value) {
            return searchCount
        }
    }
    return `Searched ${searchCount} times and item was not found in the array`
}

function binary(array, value, start, end) {
    let start = start === undefined ? 0 : start;
    let end = end === undefined ? array.length : end;
    let count = count === undefined ? 0 : count;

    if (start > end) {
        return `Searched ${count} times and the item was not found in the array`
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index]

    count++
    if (item == value) {
        return count
    } else if (item < value) {
        return binary(array, value, index + 1, end, count)
    } else if (item > value) {
        return binary(array, value, start, index - 1, count)
    }
}

function inOrder(values, node) {
    if (node.left) {
        inOrder(values, node.left)
    }
    values.push(node.key)

    if (node.right) {
        inOrder(values, node.right)
    }
    return values
}

function preOrder(values, node) {
    values.push(node.key)
    if (node.left) {
        preOrder(values, node.left)
    }
    if (node.right) {
        preOrder(values, node.right)
    }
    return values
}

function postOrder(values, node) {
    if (node.left) {
        postOrder(values, node.left)
    }
    if (node.right) {
        postOrder(values, node.right)
    }
    values.push(node.key)
    return values
}

function breadthOrder(tree) {
    values = []
    const q = new Queue()
    q.enqueue(tree)
    while (q.first !== null) {
        const node = q.dequeue()
        console.log(node)
        values.push(node.key)

        if (node.left) {
            q.enqueue(node.right)
        }

        if (node.right) {
            q.enqueue(node.right)
        }
    }
    return values
}