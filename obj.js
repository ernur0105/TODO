// let people = [
//     {
//         id:1,
//         name:"Dias",
//         surname:"Numagamedov",
//         city:"Almaty",
//         country:"KZ",
//         birthDate:1997,
//         isStudent:false,
//         gender:"male"
//     },
//     {
//         id:2,
//         name:"Qanat",
//         surname:"Askarov",
//         city:"Almaty",
//         country:"KZ",
//         birthDate:2004,
//         isStudent:true,
//         gender:"male"
//     },
//     {
//         id:3,
//         name:"Qusain",
//         surname:"Askarov",
//         city:"Astana",
//         country:"KZ",
//         birthDate:2005,
//         isStudent:true,
//         gender:"male"
//     },
//     {
//         id:4,
//         name:"Asel",
//         surname:"Kusainova",
//         city:"Paris",
//         country:"France",
//         birthDate:1997,
//         isStudent:true,
//         gender:"female"
//     },
//     {
//         id:5,
//         name:"Zukhra",
//         surname:"Mailova",
//         city:"Madrid",
//         country:"Spain",
//         birthDate:1991,
//         isStudent:false,
//         gender:"female"
//     }   
// ]
//1 Диас деген атпен адамдардын жасын санау(age деген жана поля косасыз)
//2 Студенттерден туратын массивты кайтару
//3 Алматыда туратын адамадарды кайтару массив ретынде
//4 2004 жылгы адамдардын есымын ауыстыру
//5 id-3 болатын обьектыны массивтан алып тастау
//6 барлыгына age деген манын косасыздар birthDate аркылы табасыз
//7 Kusainova фамиилиясымен обьектыны кайтару

// let People=people.map((person)=>{
//     if(person.name=="Dias"){
//         person.age=new Date().getFullYear()-person.birthDate
//     }
//     return person
// })
// console.log(People);

// let arr=[]
// people.forEach((p)=>{
//     if(p.isStudent==true){
//         arr.push(p)
//     }
// })
// console.log(arr);

// let arr=[]
// people.forEach((p)=>{
//     if(p.city=="Almaty"){
//         arr.push(p)
//     }
// })
// console.log(arr);

// let arr=[44,55,88,99,85,56]
// let s=0
// let sum=arr.reduce((acumulator,item)=>{
//     return acumulator +item
// },s)

// console.log(sum)

