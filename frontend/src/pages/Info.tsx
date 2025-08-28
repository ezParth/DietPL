import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const Info: React.FC = () => {
  const [selectedDiet, setSelectedDiet] = useState<string>('Anything');
  const navigate = useNavigate(); // For navigation to the next step or back

  const handleContinue = () => {
    // Here you would typically save the selected diet to a global state or context
    // and then navigate to the next step.
    console.log('Selected Diet:', selectedDiet);
    // Example: navigate('/next-step');
    // alert(`Continuing with: ${selectedDiet}`);
    navigate("/info2")
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
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
          max-width: 900px; /* Adjust as needed */
          width: 100%;
        }

        .illustration {
          flex-shrink: 0;
          width: 200px; /* Adjust size of the bread image */
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

        .diet-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .diet-option {
          display: flex;
          align-items: flex-start;
          padding: 0.8rem 1rem;
          background-color: #2a2a2a;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          position: relative;
        }

        .diet-option:hover {
          background-color: #3a3a3a;
        }

        .diet-option input[type="radio"] {
          appearance: none;
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border: 2px solid #555;
          border-radius: 50%;
          margin-right: 1rem;
          margin-top: 3px; /* Align radio button with text */
          outline: none;
          cursor: pointer;
          position: relative;
          flex-shrink: 0; /* Prevent radio button from shrinking */
        }

        .diet-option input[type="radio"]:checked {
          border-color: #4CAF50; /* Green check border */
        }

        .diet-option input[type="radio"]:checked::before {
          content: '';
          width: 10px;
          height: 10px;
          background-color: #4CAF50; /* Green check dot */
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: block;
        }

        .diet-text {
          display: flex;
          flex-direction: column;
        }

        .diet-name {
          font-size: 1.1rem;
          font-weight: 500;
          color: #e0e0e0;
          margin-bottom: 0.2rem;
        }

        .diet-excludes {
          font-size: 0.85rem;
          color: #a0a0a0;
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
          background-color: #4CAF50; /* Green */
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
            {/* The bread illustration image */}
            <img src="https://i.imgur.com/G5Y8uVf.png" alt="Happy Bread" />
          </div>
          <div className="question-card">
            <h2 className="question-title">What do you like to eat?</h2>
            <p className="question-subtitle">
              Choose from a primary diet type. You can exclude specific foods in the next step.
            </p>

            <div className="diet-options">
              <label className="diet-option">
                <input
                  type="radio"
                  name="dietType"
                  value="Anything"
                  checked={selectedDiet === 'Anything'}
                  onChange={() => setSelectedDiet('Anything')}
                />
                <div className="diet-text">
                  <span className="diet-name">Anything</span>
                  <span className="diet-excludes">Excludes: Nothing</span>
                </div>
              </label>

              <label className="diet-option">
                <input
                  type="radio"
                  name="dietType"
                  value="Keto"
                  checked={selectedDiet === 'Keto'}
                  onChange={() => setSelectedDiet('Keto')}
                />
                <div className="diet-text">
                  <span className="diet-name">Keto</span>
                  <span className="diet-excludes">Excludes: High-carb Grains, Refined Starches, Sugar</span>
                </div>
              </label>

              <label className="diet-option">
                <input
                  type="radio"
                  name="dietType"
                  value="Mediterranean"
                  checked={selectedDiet === 'Mediterranean'}
                  onChange={() => setSelectedDiet('Mediterranean')}
                />
                <div className="diet-text">
                  <span className="diet-name">Mediterranean</span>
                  <span className="diet-excludes">Excludes: Red Meat, Fruit juice, Processed Meats, Refined Starches, Sugar</span>
                </div>
              </label>

              <label className="diet-option">
                <input
                  type="radio"
                  name="dietType"
                  value="Paleo"
                  checked={selectedDiet === 'Paleo'}
                  onChange={() => setSelectedDiet('Paleo')}
                />
                <div className="diet-text">
                  <span className="diet-name">Paleo</span>
                  <span className="diet-excludes">Excludes: Dairy, Grains, Legumes, Refined Starches, Soy, Sugar</span>
                </div>
              </label>

              <label className="diet-option">
                <input
                  type="radio"
                  name="dietType"
                  value="Vegan"
                  checked={selectedDiet === 'Vegan'}
                  onChange={() => setSelectedDiet('Vegan')}
                />
                <div className="diet-text">
                  <span className="diet-name">Vegan</span>
                  <span className="diet-excludes">Excludes: Red Meat, Poultry, Fish, Shellfish, Dairy, Eggs, Mayo, Honey</span>
                </div>
              </label>

              <label className="diet-option">
                <input
                  type="radio"
                  name="dietType"
                  value="Vegetarian"
                  checked={selectedDiet === 'Vegetarian'}
                  onChange={() => setSelectedDiet('Vegetarian')}
                />
                <div className="diet-text">
                  <span className="diet-name">Vegetarian</span>
                  <span className="diet-excludes">Excludes: Red Meat, Poultry, Fish, Shellfish</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="footer-nav">
        <button className="nav-button back-button" onClick={handleBack}>
          &lt; Back
        </button>
        <button className="nav-button continue-button" onClick={handleContinue}>
          Continue &gt;
        </button>
      </div>
    </div>
  );
};

export default Info;