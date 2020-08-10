const mat= [ [ 4,4,4,4], [ 4,4,4,4],[ 4,4,4,4], [ 4,4,4,4] ] 
let m = mat.length;
let n = mat[0].length;
for(let i=0;i<m;i++){
    for(j=0;j<n;j++){
        if (i === 0 || i === m-1 || j === 0 || j === n-1 ){
            mat[i][j]*=2}
        else{
            mat[i][j]/=2
        }
          
    }
}
for(i=0;i<m;i++)
console.log(mat[i].join(""))

