let arr1 = ["name", "password", "age"]

let obj = {
}
// const pru = async () => {
//     console.log("olaaaaaaaaa")
//     try {
//         if(true){
//             throw "false"
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// pru()
// console.log();

// console.log(0 == false);


let arr2 = Object.keys(obj) 
// if(!arr2.length) console.log("no hay array lenght")

var result = arr1.filter(el => !arr2.includes(el));

// console.log(arr2)

// for (const key in obj) {
//     arr.find(e=>{
//         if(key != e){
//             arr2.push(key)
//         }
//     })
// }

// for (const key in obj) {
//     console.log(key)
// }

// console.log(obj.hasOwnProperty.name)