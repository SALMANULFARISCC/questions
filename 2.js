const a = 45
const b = 60
const c = 75

const perc = 50

const p1 =(perc/100) * a
const p2 =(perc/100) * b
const p3 =(perc/100) * c

if(p1>=p2 && p1>=p3){
    console.log("print a will rule")
}
else if (p2>p1 && p2>p3){
    console.log("b will rulw")

}
else{
    console.log("c will rule")

}
