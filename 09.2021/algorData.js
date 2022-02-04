// // //1
// // //the-deca-tree
// class tree
// {
//     constructor(trunks)
//     {
//         this.trunks = trunks
//         this.branches = trunks * 10
//         this.twigs = trunks * 100
//         this.leaves = trunks * 1000
//     }
    
//     chopTrunk(n)
//     {
//         this.trunks = Math.max(this.trunks - n, 0)
//         this.chopBranch(n * 10)
//     }
//     chopBranch(n)
//     {
//         this.branches = Math.max(this.branches - n, 0)
//         this.chopTwig(n * 10)
//     }
//     chopTwig(n)
//     {
//         this.twigs = Math.max(this.twigs - n, 0)
//         this.chopLeaf(n * 10)
//     }
//     chopLeaf(n)
//     {
//         this.leaves = Math.max(this.leaves - n, 0)
//     }
    
//     describe()
//     {
//         return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`
//     }
// }

// var myTree = new tree(10);
// myTree.chopLeaf(1);
// console.log(myTree.leaves)//, 9999);


// function tree(trunks) {
//     this.trunks = trunks;
//     this.branches = trunks * 10;
//     this.twigs = trunks * 100;
//     this.leaves = trunks * 1000;
// }

// //your methods here...
// tree.prototype.chopLeaf = function(n){
//   this.leaves = Math.max(this.leaves - n, 0);
// }

// tree.prototype.chopTwig = function(n){
//   this.twigs = Math.max(this.twigs - n, 0);
//   this.chopLeaf(n * 10);
// }

// tree.prototype.chopBranch = function(n){
//   this.branches = Math.max(this.branches - n, 0);
//   this.chopTwig(n * 10);
// }

// tree.prototype.chopTrunk = function(n){
//   this.trunks = Math.max(this.trunks - n, 0);
//   this.chopBranch(n * 10)
// }

// tree.prototype.describe = function () {
//   return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.` 
// }


//2
// получить простое число


// long version
//const nextPrime=a=>{if(a<2)return 2;for(;a++;){for(c=0,b=2;b<a;b++)a%b||c++;if(!c)return a;}}
  

// function nextPrime(n){
//   let count=0;
//   for(let i=n+1;i>0;i++){
//   if (isPrime(i)){count = i; break}
//   }
//    return count
// }

// function isPrime(n) {
//   let rt = Math.sqrt(n);
//   for(let i = 2; i <= rt; i++) {
//     if(n % i === 0) return false; 
//   }
//   return n !== 1;
// }
         
// console.log(nextPrime(0))//, 2);
// console.log(nextPrime(1))//, 2);

// console.log(nextPrime(2971))//, 2999);

//3
//lotery ticket
function bingo(ticket, win){
  if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
   {
     return "Winner!";
   }
   return "Loser!";
 }
 //4
 //maxSum
 function maxSum(root) {
  if (!root) return 0
  return root.value + Math.max(maxSum(root.left),maxSum(root.right))
}


//5
// RGB To Hex Conversion

function rgb(r, g, b){
  function componentToHex(x){
    let hex= x.toString(16).toUpperCase();
    return hex.length==1 ? ("0"+ hex) : (x >=255 ) ? "FF" : (x<0) ? "00": hex
    
  }
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgb(0, 0, 0))//, '000000')
console.log(rgb(0, 0, -20))//, '000000')
console.log(rgb(300,255,255))//, 'FFFFFF')
console.log(rgb(173,255,47))//, 'ADFF2F')


//6
//A binary search tree is a binary tree that is ordered. This means that if you were to convert the tree to an array using an in-order traversal, the array would be in sorted order. The benefit gained by this ordering is that when the tree is balanced, searching is a logarithmic time operation, since each node you look at that isn't the one you're searching for lets you discard half of the tree.

class Node {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const isBST = node => {
  const arr = inOrder(node);
  
  return arr.every( (v, i, a) => i == 0 ? true : v > a[i-1])
    || arr.every( (v, i, a) => i == 0 ? true : v < a[i-1]);
  
  function inOrder(node) { 
    if (node == undefined) return [];
    return inOrder(node.left).concat(node.value).concat(inOrder(node.right)); 
  }
};
