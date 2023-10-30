const questions = [{
    'que':'which of the following is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'javascript',
    'd':'PHP',
    'correct':'a'
},
{
    'que':'what year was javascript launched?',
    'a':"1996",
    'b': "1995",
    'c':"1994",
    'd':"none of the above",
    'correct':"b",
},
{
    'que':'what does CSS stands for?',
    'a':"Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c':"Jason Object Notation",
    'd':"Helicopters Terminals Motoboats Lamborginis",
    'correct':"b",
},
{

    'que':'who is the prime minister of india?',
    'a':"narendra modi",
    'b': "jawahlal nehru",
    'c':"aditya yoginath",
    'd':"amit shah",
    'correct':"a",
},
{

    'que':'who is the fist prime minister of india?',
    'a':"narendra modi",
    'b': "jawahlal nehru",
    'c':"aditya yoginath",
    'd':"amit shah",
    'correct':"b",
}
 ]

const playAgain = () => {

let index = 0;
// let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');
loadQuestion();
// document.getElementById('innercontainer').innerHTML = '';
}


let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');



// To load the questions
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    // console.log(data) 
    quesBox.innerText = `${index +1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}  


// To Submit the quiz 

const submitQuiz = () =>{
    const data = questions[index];
    const ans =  getAnswer();
    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}


// TO get the answers
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
               
                // console.log(getAnswer)
            }
        }
    )
    return answer;
}

// To RESET tHE OPTIONS

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false ;
        }
    )
}


// TO End the Quiz

const endQuiz = () => {
     let innercontainer = document.getElementById('innercontainer')
     .innerHTML = `<h3>Thank you for playing the quiz</h3>
    <h2>${right} /${total} are correct 
    <button onclick="playAgain()">play Again</button></h2> `
   

}

//initial call
loadQuestion();
