const a = {
    name: 'test'
    }
    
const b = {
    name: 'test1'
    }
    
const fn = function() {
    console.log(this.name);
    }
    
const d = fn.bind(a).bind(b);
console.log(d())