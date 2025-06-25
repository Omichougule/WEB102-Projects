import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import stringSimilarity from 'string-similarity';

function App() {
  const [cards, setCards] = useState([
    {
      "question": "/images/eiffel.jpeg",
      "answer": "Eiffel Tower",
      "difficulty": "easy"
    },
    {
      "question": "/images/tajmahal.jpeg",
      "answer": "Taj Mahal",
      "difficulty": "easy"
    },
    {
      "question": "/images/colosseum.jpeg",
      "answer": "Colosseum",
      "difficulty": "medium"
    },
    {
      "question": "/images/giza.jpeg",
      "answer": "Great Pyramid of Giza",
      "difficulty": "medium"
    },
    {
      "question": "/images/liberty.jpeg",
      "answer": "Statue of Liberty",
      "difficulty": "hard"
    },
    {
      "question": "/images/christ.jpeg",
      "answer": "Christ the Redeemer",
      "difficulty": "medium"
    },
    {
      "question": "/images/petra.jpeg",
      "answer": "Petra",
      "difficulty": "hard"
    },
    {
      "question": "/images/machu.jpeg",
      "answer": "Machu Picchu",
      "difficulty": "hard"
    },
    {
      "question": "/images/bigben.jpeg",
      "answer": "Big Ben",
      "difficulty": "easy"
    },
    {
      "question": "/images/sydney.jpeg",
      "answer": "Sydney Opera House",
      "difficulty": "easy"
    },
    {
      "question": "/images/stonehenge.jpeg",
      "answer": "Stonehenge",
      "difficulty": "medium"
    },
    {
      "question": "/images/leaning.jpeg",
      "answer": "Leaning Tower of Pisa",
      "difficulty": "easy"
    },
    {
      "question": "/images/burj.jpeg",
      "answer": "Burj Khalifa",
      "difficulty": "easy"
    },
    {
      "question": "/images/angkor.jpeg",
      "answer": "Angkor Wat",
      "difficulty": "hard"
    },
    {
      "question": "/images/kremlin.jpeg",
      "answer": "The Kremlin",
      "difficulty": "medium"
    }
  ]);

  const [index, setIndex] = useState(0);
  const [isFlipped, checkIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [inputClass, setInputClass] = useState('');

  const randomCards = () => {
    const random = [...cards];

    const firstCard = random.shift();

    for (let i = random.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [random[i], random[j]] = [random[j], random[i]];
    }

    random.unshift(firstCard);
    checkIsFlipped(false);
    return random;
  };

  useEffect(() => {
    setCards(randomCards());
  }, []);

  const handleSwitchCard = () => {
    if (index === cards.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    checkIsFlipped(false);
  };

  const handlePrevSwitchCard = () => {
    if (index === 0) {
      setIndex(index + cards.length - 1); // Wrap around to the last card
      console.log(index)
    } else {
      console.log(index)
      setIndex(index - 1); // Decrement index to go to the previous card
      

    }
    checkIsFlipped(false); // Reset flipped state
  };


  const difficultyColors = {
    easy: "lightgreen",
    medium: "lightblue",
    hard: "pink"
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const checkAnswer = () => {
    // Get the correct answer for the current card
    const correctAnswer = cards[index].answer.toLowerCase();

    // Convert user input to lowercase for case-insensitive comparison
    const guess = userInput.toLowerCase();

    // Calculate the similarity between the guess and correct answer
    const similarity = stringSimilarity.compareTwoStrings(guess, correctAnswer);

    // Set a threshold for similarity (adjust as needed)
    const similarityThreshold = 0.8;

    // Check if the similarity meets the threshold
    const isCorrectGuess = similarity >= similarityThreshold;

    // Apply appropriate CSS class based on correctness of the guess
    const newInputClass = isCorrectGuess ? 'correct' : 'incorrect';

    // Update the inputClass state variable
    setInputClass(newInputClass);

    // Clear the input field after submission
    setUserInput('');
  };



  const handleShuffle = () => {
    setCards(randomCards());
    setIndex(0); // Reset index to the first card after shuffling
  };

  return (
    <>
      <div className='header'>
        <h2>Explore Famous Landmarks Flashcards</h2>
        <h4>Ready to travel the world from your screen? Test your knowledge of iconic landmarks with these flashcards!</h4>
        <h5>Number of Cards: {cards.length}</h5>
      </div>
      <Card
        question={cards[index].question}
        answer={cards[index].answer}
        isFlipped={isFlipped}
        checkIsFlipped={checkIsFlipped}
        color={difficultyColors[cards[index].difficulty]} />
      
      <div className='guess-area'>
        <p>Make your guess here: </p>
        <input
          type='text'
          name='answer'
          value={userInput}
          placeholder='Answer'
          onChange={handleInputChange}
          className={`guess-input ${inputClass}`}></input>
        <button id='submit' onClick={checkAnswer}>Submit</button>
      </div>
      
      <button id="prev" onClick={handlePrevSwitchCard} > ← </button>
      <button id="next" onClick={handleSwitchCard}> → </button>
      <button id="shuffle" onClick={handleShuffle}>Shuffle</button>
    </>
  )
}

export default App