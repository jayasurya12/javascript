//Map function
const marks=[55,66,35,89,44,56,35,75,43,77];
 
grade=marks.map(e => e>=45 ? "pass":'fail');
console.log(grade);
console.log("Map finish");
//Finish

//Filter
const pass =marks.filter(e =>e>=45);

console.log(pass);
console.log("filter finish");
//finish

//Reduce

const sum=marks.reduce((a,b) => a + b);
console.log(sum);