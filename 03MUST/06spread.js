const languages = ['javascript','c++','python','java']
const dsl = ['SQL','HTML','CSS','NoSQL']
const allLanguages = [...languages, ...dsl]
const courseDataForYear = {
    name: 'Projektowanie i programowanie front-end',
    shortcut:'PPFront',
    year:'2',
    startingYear:'2021',
    endingYear:'2022',
    content:{
        types:{
            lectures:true,
            labolatories:true,
            projects:true
        },
        hours:{
            lectures:15,
            labolatories:15,
            projects:15
        }
    }
}

console.log(languages)
console.log(dsl)
console.log(allLanguages)

