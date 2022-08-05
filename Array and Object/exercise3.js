class Node {
  constructor(parent, value, children, callback) {
    this.parent = parent
    this.value = value
    this.children = children
    this.callback = callback
  }
  
  getChild(value) {
    if(!this.children) {
      console.log('There is no child node')
      return
    }
    return this.children.filter((child) => child.value === value)
  }
}


// Create root node
const root = new Node()

// Add a function
root.callback = (str) => str.length? 'Yes' : 'No'

// Create child node
const childNode = new Node(root, 'No', null, null)

// Add child to list of children
root.children = [ childNode ]

const child = root.getChild(root.callback(''))

console.log(root)
console.log(child)