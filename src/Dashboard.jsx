import { useState } from 'react'
import './Dashboard.css'

function Dashboard() {
  const userName = 'Sidhu'
  const [showModal, setShowModal] = useState(false)
  const [codeInput, setCodeInput] = useState('')
  
  const mathQuiz = {
    title: ' Test',
    questions: ' ',
    time: '',
    subject: '',
    description: ' '
  }
  
  const computerQuiz = {
    title: 'Test1', 
    questions: '',
    time: '',
    subject: '',
    description: ''
  }

  function openModal() {
    setShowModal(true)
  }

  function closeModal() {
    setShowModal(false)
    setCodeInput('')
  }

  function joinQuiz() {
    if (codeInput) 
    {
      alert('Joining quiz with code: ' +  codeInput)
      closeModal()
    } 
    else 
    {
      alert('Please enter a code')
    }
  }

  function startQuiz(quizName) {
    alert('Starting ' + quizName)
  }

  return (
    <div className="app">
      <div className="header">
        <div className="logo">
          <span className="brain-icon"></span>
          <h1>Logo</h1>
        </div>
        <div className="nav-menu">
          <a href="#" className="nav-item active">Home</a>
          <a href="#" className="nav-item">Explore</a>
          <a href="#" className="nav-item">About</a>
        </div>
        <div className="user-section">
          <span className="user-icon">👤</span>
          <span className="user-name">{userName}</span>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
      <div className="header-line"></div>

      <div className="main-content">
        <div className="welcome-part">
          <h1>Welcome back, {userName}!</h1>
          <p>Ready to take a quiz? Pick one below.</p>
          <button className="join-code-btn" onClick={openModal}>
            🔑 Join with Code
          </button>
        </div>

        <div className="quizzes-part">
          <h2>Available Quizzes</h2>
          
          <div className="quiz-list">
            <div className="quiz-box">
              <div className="quiz-icon">🧮</div>
              <div className="quiz-details">
                <h3>{mathQuiz.title}</h3>
                <div className="quiz-info">
                  <span>❓ {mathQuiz.questions}</span>
                  <span>⏰ {mathQuiz.time}</span>
                  <span>📚 {mathQuiz.subject}</span>
                </div>
                <p>{mathQuiz.description}</p>
                <button className="start-btn" onClick={() => startQuiz(mathQuiz.title)}>
                  ▶️ Start Quiz
                </button>
              </div>
            </div>

            <div className="quiz-box">
              <div className="quiz-icon">💻</div>
              <div className="quiz-details">
                <h3>{computerQuiz.title}</h3>
                <div className="quiz-info">
                  <span>❓ {computerQuiz.questions}</span>
                  <span>⏰ {computerQuiz.time}</span>
                  <span>📚 {computerQuiz.subject}</span>
                </div>
                <p>{computerQuiz.description}</p>
                <button className="start-btn" onClick={() => startQuiz(computerQuiz.title)}>
                  ▶️ Start Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && 
      (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <h3>Join Quiz with Code</h3>
              <button className="close-btn" onClick={closeModal}>❌</button>
            </div>
            <div className="modal-content">
              <p>Enter the quiz code from your teacher:</p>
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="Enter code here"
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                />
                <button className="join-btn" onClick={joinQuiz}>
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
