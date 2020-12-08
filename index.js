//dependencies
const rs = require('readline-sync')
const chalk = require('chalk')

const userName = rs.question(chalk.bgCyan('Enter your name\n'))
console.log(chalk.green(`${userName}, Welcome to the Ultimate Naruto Quiz`))

//global variable
let score = 0

//List of questions
const questions = [
  {
    question: 'What is Samehada?',
    options: 'A)Hat B)Sword C)Possum',
    answer: 'B'
  },
  {
    question: 'Which of these is another word for ninja?',
    options: 'A)Genjutsu B)Arigato C)Shinobi',
    answer: 'C'
  },
  {
    question: `What's Naruto's mum's name?`,
    options: 'A)Kushina B)Kurama C)Haruno',
    answer: 'A'
  },
  {
    question: 'How many tails does Kurama have?',
    options: 'A)5 B)7 C)9',
    answer: 'C'
  },
  {
    question: `Naruto's favourite ramen shop - Ichiraku Ramen - was based on a real like noodle shop! True or false?`,
    options: 'A)True B)False',
    answer: 'A'
  }
]

//Function for starting the quiz
function quizStart() {
  const ready = rs.question(chalk.bgRed('Are you ready to start the quiz?(Y/N)\n'))

  if(ready.toUpperCase() === 'Y') {
    for(let i=0; i<questions.length; i++){
      quizPlay(questions[i])
    }
  }else{
    console.log(chalk.bgGreen('Thank You!'))
  }

  console.log(chalk.bgWhite.black('Your final score is '+score))
  console.log(chalk.red('Thank you for taking this quiz'))
}

//Function that asks questions
function quizPlay(askQue) {
  console.log('Que: '+ chalk.yellow(askQue.question))
  console.log(askQue.options)
  const userAnswer = rs.question(chalk.cyan('Your response: '))

  if(userAnswer.toUpperCase() === askQue.answer.toUpperCase()){
    score++;
    console.log(chalk.green('Correct! your current score is ' + score + '\n'))
  }else{
    console.log(chalk.red('Wrong Answer! Correct option is '+ askQue.answer + '\n'))
  }
}

//Function call
quizStart();