import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Info3: React.FC = () => {
  const [sex, setSex] = useState<string | null>(null);
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [bodyfat, setBodyfat] = useState<string | null>(null);
  const [activityLevel, setActivityLevel] = useState<string>('Desk job, light exercise');
  const navigate = useNavigate();

  const handleContinue = () => {
    // You would typically validate the input and save it to a global state or context
    console.log({ sex, height, weight, age, bodyfat, activityLevel });
    // Example: navigate('/next-step');
    // alert('Information saved. Continuing to the next step.');
    navigate("/info4")
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
        
        .form-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            align-items: center;
        }

        .form-field {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
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

        .input-group {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            width: 100%;
        }

        .text-input {
            background-color: #2a2a2a;
            border: 1px solid #333;
            border-radius: 6px;
            padding: 0.7rem;
            color: #f0f0f0;
            font-size: 1rem;
            width: 100%;
            box-sizing: border-box;
        }

        .unit {
            color: #888;
            font-size: 0.9rem;
        }

        .options-row {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .option-button {
            padding: 0.6rem 1rem;
            background-color: #2a2a2a;
            border: 1px solid #333;
            border-radius: 6px;
            color: #f0f0f0;
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease;
        }

        .option-button.selected {
            background-color: #4CAF50;
            border-color: #4CAF50;
        }

        .option-button:hover {
            background-color: #3a3a3a;
        }
        
        .select-field {
            background-color: #2a2a2a;
            border: 1px solid #333;
            border-radius: 6px;
            padding: 0.7rem;
            color: #f0f0f0;
            font-size: 1rem;
            width: 100%;
            box-sizing: border-box;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            cursor: pointer;
        }

        .select-field option {
            background-color: #1a1a1a;
            color: #f0f0f0;
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
            width: 75%; /* Adjust based on the step */
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
          .form-row {
              grid-template-columns: 1fr;
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
            {/* Cheese character illustration */}
            <img src="https://i.imgur.com/GzQWJ2B.png" alt="Cheese character" />
          </div>
          <div className="question-card">
            <h2 className="question-title">Tell us about yourself</h2>
            <p className="question-subtitle">
              This information lets us estimate your nutrition requirements for each day.
            </p>

            <div className="form-grid">
              {/* Sex */}
              <div>
                <div className="field-label">Sex <span className="info-icon">ⓘ</span></div>
                <div className="options-row">
                  <button
                    className={`option-button ${sex === 'Male' ? 'selected' : ''}`}
                    onClick={() => setSex('Male')}
                  >
                    Male
                  </button>
                  <button
                    className={`option-button ${sex === 'Female' ? 'selected' : ''}`}
                    onClick={() => setSex('Female')}
                  >
                    Female
                  </button>
                  <button
                    className={`option-button ${sex === 'Non-Binary' ? 'selected' : ''}`}
                    onClick={() => setSex('Non-Binary')}
                  >
                    Non-Binary
                  </button>
                </div>
              </div>

              {/* Height & Weight */}
              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">Height</label>
                  <div className="input-group">
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="text-input"
                    />
                    <span className="unit">cm</span>
                  </div>
                </div>
                <div className="form-field">
                  <label className="field-label">Weight</label>
                  <div className="input-group">
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="text-input"
                    />
                    <span className="unit">kg</span>
                  </div>
                </div>
              </div>

              {/* Age & Bodyfat */}
              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">Age</label>
                  <div className="input-group">
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="text-input"
                    />
                    <span className="unit">years</span>
                  </div>
                </div>
                <div className="form-field">
                  <label className="field-label">Bodyfat <span className="info-icon">ⓘ</span></label>
                  <div className="options-row">
                    <button
                      className={`option-button ${bodyfat === 'Low' ? 'selected' : ''}`}
                      onClick={() => setBodyfat('Low')}
                    >
                      Low
                    </button>
                    <button
                      className={`option-button ${bodyfat === 'Medium' ? 'selected' : ''}`}
                      onClick={() => setBodyfat('Medium')}
                    >
                      Medium
                    </button>
                    <button
                      className={`option-button ${bodyfat === 'High' ? 'selected' : ''}`}
                      onClick={() => setBodyfat('High')}
                    >
                      High
                    </button>
                  </div>
                </div>
              </div>

              {/* Activity Level */}
              <div className="form-field">
                <label className="field-label">Activity Level</label>
                <select
                  className="select-field"
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                >
                  <option>Desk job, light exercise</option>
                  <option>Moderate activity</option>
                  <option>Active, lots of exercise</option>
                </select>
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
            <div className="progress-bar" style={{ width: '75%' }}></div>
        </div>
        <button className="nav-button continue-button" onClick={handleContinue}>
          Continue &gt;
        </button>
      </div>
    </div>
  );
};

export default Info3;