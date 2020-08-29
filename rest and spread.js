let avengers=['captain america','iron man','thor'];
let update=['hulk',...avengers];
let [hulk,...rest]=update;
console.log(update);
console.log(rest);
console.log(update)

let surya={
    name:"jayasurya",
    age:"23"
}
surya={
    ...surya,
    work:"Web application developer"
};

// let {name, ...rest}=surya;
// console.log(name);