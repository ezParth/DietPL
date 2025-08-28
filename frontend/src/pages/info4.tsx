import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Info4: React.FC = () => {
  const [goalType, setGoalType] = useState<'General Goal' | 'Exact Goal'>('General Goal');
  const [goal, setGoal] = useState<string>('Maintain weight');
  const navigate = useNavigate();

  const handleContinue = () => {
    // Here you'd save the selected goals to a global state or context
    console.log('Goal Type:', goalType);
    console.log('Goal:', goal);
    // Example: navigate('/next-step');
    // alert(`Continuing with goal: ${goal}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="info-container">
      <style>{`
        /* Basic Reset & Body Styling */
        .info-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #0c0c0c;
          color: #f0f0f0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        }

        /* Top Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #0c0c0c;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: #f0f0f0;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #e0e0e0;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #888;
        }

        .user-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          color: #eee;
        }

        /* Main Content Area */
        .main-content {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .card-wrapper {
          display: flex;
          align-items: center;
          gap: 4rem;
          max-width: 900px;
          width: 100%;
        }

        .illustration {
          flex-shrink: 0;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .illustration img {
          max-width: 100%;
          height: auto;
        }

        .question-card {
          background-color: #1a1a1a;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          flex-grow: 1;
        }

        .question-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #e0e0e0;
        }

        .question-subtitle {
          font-size: 0.9rem;
          color: #a0a0a0;
          margin-bottom: 1.5rem;
        }

        .goal-options {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .goal-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .goal-type-tabs {
          display: flex;
          background-color: #2a2a2a;
          border-radius: 6px;
          overflow: hidden;
        }

        .goal-type-tab {
          flex: 1;
          text-align: center;
          padding: 0.7rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .goal-type-tab.active {
          background-color: #4CAF50;
          color: #fff;
        }

        .goal-type-tab:not(.active):hover {
          background-color: #3a3a3a;
        }
        
        .field-label {
            font-size: 0.9rem;
            color: #a0a0a0;
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .info-icon {
            color: #555;
            font-size: 0.8rem;
            cursor: pointer;
        }

        .goal-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .goal-button {
          padding: 0.6rem 1rem;
          background-color: #2a2a2a;
          border: 1px solid #333;
          border-radius: 6px;
          color: #f0f0f0;
          cursor: pointer;
          transition: background-color 0.2s ease, border-color 0.2s ease;
        }
        .goal-button.selected {
          background-color: #4CAF50;
          border-color: #4CAF50;
        }
        .goal-button:hover {
          background-color: #3a3a3a;
        }

        /* Navigation Footer */
        .footer-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #1a1a1a;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .progress-bar-container {
            flex-grow: 1;
            height: 8px;
            background-color: #333;
            border-radius: 4px;
            margin: 0 1rem;
            overflow: hidden;
        }
        
        .progress-bar {
            height: 100%;
            width: 100%; /* Represents the final step */
            background-color: #4CAF50;
            transition: width 0.3s ease;
        }

        .nav-button {
          padding: 0.7rem 1.5rem;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease;
          border: none;
        }

        .back-button {
          background-color: transparent;
          color: #a0a0a0;
        }

        .back-button:hover {
          background-color: #2a2a2a;
        }

        .continue-button {
          background-color: #4CAF50;
          color: #fff;
        }

        .continue-button:hover {
          background-color: #45a049;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .card-wrapper {
            flex-direction: column;
            gap: 2rem;
          }
          .illustration {
            width: 150px;
            height: 150px;
          }
          .question-title {
            font-size: 1.5rem;
          }
          .header, .footer-nav {
            padding: 1rem;
          }
          .footer-nav {
              flex-direction: column;
              gap: 1rem;
          }
          .progress-bar-container {
              width: 100%;
          }
        }
      `}</style>

      {/* Top Header */}
      <div className="header">
        <div className="logo">eat this much</div>
        <div className="user-info">
          de deepakstake
          <div className="user-avatar">D</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="card-wrapper">
          <div className="illustration">
            {/* Carrot illustration */}
            <img src="https://i.imgur.com/K1LgO32.png" alt="Happy Carrot" />
          </div>
          <div className="question-card">
            <h2 className="question-title">What is your goal?</h2>
            <p className="question-subtitle">
              We'll adjust your daily nutrition targets to match your goals.
            </p>

            <div className="goal-options">
              <div className="goal-group">
                <div className="field-label">Set a goal</div>
                <div className="goal-type-tabs">
                  <div
                    className={`goal-type-tab ${goalType === 'General Goal' ? 'active' : ''}`}
                    onClick={() => setGoalType('General Goal')}
                  >
                    General Goal
                  </div>
                  <div
                    className={`goal-type-tab ${goalType === 'Exact Goal' ? 'active' : ''}`}
                    onClick={() => setGoalType('Exact Goal')}
                  >
                    Exact Goal
                  </div>
                </div>
              </div>

              {/* The "I want to" buttons based on the image */}
              <div className="goal-group">
                <div className="field-label">I want to <span className="info-icon">ⓘ</span></div>
                <div className="goal-buttons">
                  <button
                    className={`goal-button ${goal === 'Lose fat' ? 'selected' : ''}`}
                    onClick={() => setGoal('Lose fat')}
                  >
                    Lose fat
                  </button>
                  <button
                    className={`goal-button ${goal === 'Maintain weight' ? 'selected' : ''}`}
                    onClick={() => setGoal('Maintain weight')}
                  >
                    Maintain weight
                  </button>
                  <button
                    className={`goal-button ${goal === 'Build muscle' ? 'selected' : ''}`}
                    onClick={() => setGoal('Build muscle')}
                  >
                    Build muscle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="footer-nav">
        <button className="nav-button back-button" onClick={handleBack}>
          &lt; Back
        </button>
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '100%' }}></div>
        </div>
        <button className="nav-button continue-button" onClick={handleContinue}>
          Continue &gt;
        </button>
      </div>
    </div>
  );
};

export default Info4;