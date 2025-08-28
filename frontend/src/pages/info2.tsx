import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const Info2: React.FC = () => {
  const [selectedExclusions, setSelectedExclusions] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleExclusion = (exclusion: string) => {
    setSelectedExclusions((prevSelected) =>
      prevSelected.includes(exclusion)
        ? prevSelected.filter((item) => item !== exclusion)
        : [...prevSelected, exclusion]
    );
  };

  const handleContinue = () => {
    // You'd typically save the selected exclusions to a global state or context
    console.log('Selected Exclusions:', selectedExclusions);
    // Example: navigate('/next-step');
    // alert(`Continuing with exclusions: ${selectedExclusions.join(', ')}`);
    navigate("/info3")
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const exclusionOptions = [
    'Dairy',
    'Eggs',
    'Fish',
    'Gluten',
    'Peanuts',
    'Sesame',
    'Shellfish',
    'Soy',
    'Tree Nuts',
  ];

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

        .exclusion-options {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exclusion-button {
          background-color: #2a2a2a;
          color: #f0f0f0;
          border: 1px solid #333;
          border-radius: 20px;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background-color 0.2s ease, border-color 0.2s ease;
        }

        .exclusion-button:hover {
          background-color: #3a3a3a;
          border-color: #555;
        }

        .exclusion-button.selected {
          background-color: #4CAF50;
          border-color: #4CAF50;
          color: #fff;
        }

        .info-box {
          background-color: #2a2a2a;
          border-radius: 8px;
          padding: 1rem;
          margin-top: 1.5rem;
        }

        .info-text {
          font-size: 0.9rem;
          color: #a0a0a0;
        }

        .info-text strong {
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
            width: 50%; /* Adjust based on the step */
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
            {/* Orange illustration */}
            <img src="https://i.imgur.com/kH8bXW6.png" alt="Orange character" />
          </div>
          <div className="question-card">
            <h2 className="question-title">Are there foods you avoid?</h2>
            <p className="question-subtitle">
              This may be due to allergies or any other reason.
            </p>

            <div className="exclusion-options">
              {exclusionOptions.map((item) => (
                <button
                  key={item}
                  className={`exclusion-button ${selectedExclusions.includes(item) ? 'selected' : ''}`}
                  onClick={() => toggleExclusion(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="info-box">
              <p className="info-text">
                You can fully configure your <strong>Food Exclusions</strong> later, including setting custom exclusions.
              </p>
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
            <div className="progress-bar" style={{ width: '50%' }}></div>
        </div>
        <button className="nav-button continue-button" onClick={handleContinue}>
          Continue &gt;
        </button>
      </div>
    </div>
  );
};

export default Info2;