
import './App.css'
import QuizCard from './components/QuizCard'
import { examQuestions } from './constants'


function App() {

  return (
    <>
      <p>yoyo!!</p>
      <div>
        {
          examQuestions.map((oneQuestion,index)=>(
            <QuizCard quizQuestions={oneQuestion} key={index} />
          ))
        }
      </div>
    </>
  )
}

export default App
