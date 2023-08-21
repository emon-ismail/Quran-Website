import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch('http://localhost:5000/quiz');
        if (response.ok) {
          const data = await response.json();
          const shuffledQuestions = shuffleArray(data).slice(0, 10);
          setQuizQuestions(shuffledQuestions);
        } else {
          console.error('Failed to fetch quiz data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuizData();
  }, []);

  const handleAnswerSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      setUserAnswers((prevAnswers) => ({
        ...prevAnswers,
        [currentQuestionIndex]: selectedOption,
      }));

      if (currentQuestionIndex + 1 < quizQuestions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        handleShowResults();
      }
    }
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      if (userAnswer === question.correct_option.number) {
        score++;
      }
    });
    return score;
  };

  const renderResults = () => {
    return quizQuestions.map((question, index) => {
      const userAnswer = userAnswers[index];
      const isCorrect = userAnswer === question.correct_option.number;
      return (
        <div key={index} className="mb-4">
          <p className='text-base'>
            Question {index + 1}: {question.question}
          </p>
          <p>Your Answer: {question.options[userAnswer]}</p>
          {isCorrect ? (
            <p className="text-green-400 text-lg">Correct!</p>
          ) : (
            <p className="text-red-500">
              Incorrect. <span className='text-red-500 font-light text-lg'>Correct answer: {question.correct_option.text} </span>
            </p>
          )}
        </div>
      );
    });
  };

  const handleCloseModal = () => {
    window.my_modal_2.close();
  };

  return (
    <div className='bg-[#172542] p-8'>
      <div className="max-w-md mx-auto p-8 mt-24 bg-[#2C364F] rounded">
        <h1 className="mb-6 font-roboto text-lg md:text-2xl font-semibold text-[#7cff80] text-center">Islamic Quiz</h1>
        <h1 className='border-b border-green-400 border-w-40 mt-1 mb-4'></h1>
        {!showResults && (
          <>
            {quizQuestions[currentQuestionIndex] && (
              <div>
                <h2 className="text-lg font-medium mb-2 text-[#7cff80] py-1">
                  Question {currentQuestionIndex + 1}:
                </h2>
                <p className="mb-4 text-white py-4 text-lg nokia__8110">
                  {quizQuestions[currentQuestionIndex].question}
                </p>
                <div>
                  {Object.keys(
                    quizQuestions[currentQuestionIndex].options
                  ).map((optionNumber) => (
                    <div key={optionNumber} className="mb-8 text-white text-lg">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`question-${currentQuestionIndex}`}
                          value={optionNumber}
                          onChange={() =>
                            handleAnswerSelect(optionNumber)
                          }
                          checked={selectedOption === optionNumber}
                          className="radio radio-accent mr-4"
                        />
                        {quizQuestions[currentQuestionIndex].options[
                          optionNumber
                        ]}
                      </label>
                    </div>
                  ))}
                </div>
                <button
                  className={`bg-[#7cff80] hover:bg-blue-600 text-black hover:text-white py-2 px-4 mt-4 rounded  ${
                    !selectedOption ? 'disabled-button' : ''
                  }`}
                  onClick={handleNextQuestion}
                  disabled={!selectedOption}
                >
                  {currentQuestionIndex + 1 === quizQuestions.length
                    ? 'Submit'
                    : 'Next'}
                </button>
              </div>
            )}
          </>
        )}
        {showResults && (
          <div>
            {/* <h2 className="text-xl font-semibold text-center pb-2 mb-8 font-noticia  text-white">Results:</h2> */}
            <p className='mb-6 mt-12 font-roboto text-lg md:text-4xl font-semibold text-[#7cff80] text-center'>
              You got {calculateScore()} out of {quizQuestions.length} correct!
            </p>
            <button
              className="btn bg-white text-black hover:text-[#7cff80] hover:bg-black mt-16 mb-12 block mx-auto"
              onClick={() => window.my_modal_2.showModal()}
            >
              Show Results
            </button>
            <dialog id="my_modal_2" className="modal">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-xl  text-center">Results:</h3>
                <p className="py-4 text-center  text-black
                 text-lg font-semibold mt-4 mb-8  ">
                  You got {calculateScore()} out of {quizQuestions.length} correct!
                </p>
                {renderResults()}
                <button className="btn" onClick={handleCloseModal}>Close</button>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <Link to="/" className="text-white font-medium text-sm hover:text-[#7cff80] mt-4 block">
              Go to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
