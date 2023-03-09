//  let a = ['dev', "vip", "patel"]
//  let c = ["sach", "neha", "sakshi" ]

// let d = [...a, ...c]
// console.log(d)

// let b = [...a]
// console.log(a)
// console.log(b)
// console.log(a === b)



function play (a, ...rest){
    console.log("play game")
    console.log(a)
    console.log(rest)
}
let b = ["sach", "neha", "sakshi" ]
play(...b)

// let a = ["x", "y", "z"]
// let b = ["a","b","c"]
// //expected output = [c,b,a,z,y,x]
// let c = a.reverse()
// let d = b.reverse()
// //console.log(c)
// let e = [...d, ...c]
// console.log(e)
