import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';
import Questions from './Questions'

import Form from './Form'

function App() {

  const [ avatar, setAvatar ] = useState('')
  const [currentQuestions, setCurrentQuestions] = useState([])

  // make axios call to Trivia API
  // useEffect( () => {
  //   axios({
  //     url: 'https://opentdb.com/api.php?amount=20', 
  //     params: {
  //       category: 14
  //     }
  //   }).then( (apiData) => {
  //     // console.log('Trivia Data', apiData.data.results);
  //   })
  // }, [])

function handleSubmit(event, questionArray) {
  event.preventDefault()
  setCurrentQuestions(questionArray)
}
  // ////// .map() through and push the correct answer and incorrect answer into a new array and then this array should be shuffled

  // make axios call to DiceBear API
  useEffect( () => {
    axios({
      url: 'https://avatars.dicebear.com/api/bottts/michelle.svg'
    }).then( (data) => {
      // console.log('DiceBear Data:', data)
      setAvatar(data.request.responseURL)
    })
  }, [])

  // console.log(avatar)



  return (
    <div className="App">
      <header>
        <div className="wrapper">
        </div>
      </header>

      <main>
        <div className="wrapper">
          <Form showQuestions={handleSubmit}/>
          <Questions currentQuestions={currentQuestions}/>
        </div>
      </main>



      <footer>
        <div className="wrapper">

        </div>
      </footer>

    </div>
  );
}

export default App;
