// q8-custom-mymap.js: Adding custom myMap() method to Array.prototype

Array.prototype.myMap = function(callback) {
    const mappedArray = [];
    
    // 'this' refers to the array instance calling myMap()
    for (let i = 0; i < this.length; i++) {
        // Check if index exists in array (handling sparse arrays safely)
        if (i in this) {
            mappedArray.push(callback(this[i], i, this));
        }
    }
    
    return mappedArray;
};

// Test implementation
const originalArray = [1, 2, 3];
const result = originalArray.myMap(num => num * 2);

console.log("Original Array:", originalArray); // [1, 2, 3]
console.log("Custom myMap Result:", result);   // [2, 4, 6]