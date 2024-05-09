"use strict"


// an array inside of an object inside of a array
let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];


function calStudentAverage(listStudent){

    // a variable created for the length of list
    let numberOfStudents = listStudent.length;

    for (let i = 0; i < numberOfStudents; i++) {
        // a placeholder for the total
        let total = 0;


        let currentStudentScores = listStudent[i].scores;
        let numberOfScoresForStudent = currentStudentScores.length

        for (let i = 0; i < numberOfScoresForStudent; i++) {
            total += currentStudentScores[i];
        }
        // getting the average of all list for each student 
        let studentAverage = total / numberOfScoresForStudent;
        console.log(`${listStudent[i].name} has an average score of ${studentAverage}`)
    }

    
}
// called function and then the list variable
calStudentAverage(students);

