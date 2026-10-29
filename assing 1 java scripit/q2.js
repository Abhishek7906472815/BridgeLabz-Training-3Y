// q2.js: Multi-Type Data Summary

// Declare variables of different data types
let strData = "Hello World";
let numData = 100;
let boolData = false;
let arrData = ["apple", "banana", "cherry"];
let objData = { id: 1, role: "Developer" };
let nullData = null;
let undefData;

// Create a summary array containing objects with label, value, and identified type
let dataSummary = [
    { Label: "String Variable", Value: strData, Type: typeof strData },
    { Label: "Number Variable", Value: numData, Type: typeof numData },
    { Label: "Boolean Variable", Value: boolData, Type: typeof boolData },
    { Label: "Array Variable", Value: arrData, Type: Array.isArray(arrData) ? "array" : typeof arrData },
    { Label: "Object Variable", Value: objData, Type: typeof objData },
    { Label: "Null Variable", Value: nullData, Type: typeof nullData }, // Note: typeof null evaluates to 'object' in JS
    { Label: "Undefined Variable", Value: undefData, Type: typeof undefData }
];

// Print formatted report using a single console.table() statement
console.table(dataSummary);