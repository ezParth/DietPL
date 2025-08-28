/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import signupAPI from "../api/signup";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = (await signupAPI(username, password, email)) as {
        success: boolean;
        message: string;
      };
      if (res && res.success) {
        setSuccess(res.message || "Account created successfully.");
      } else {
        setError(res?.message || "Signup failed. Please try again.");
      }
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="neon-wrap">
      {/* Inline CSS inside the component as requested */}
      <style>{`
        .neon-wrap {
          min-height: 100svh;
          display: grid;
          place-items: center;
          background: radial-gradient(ellipse at top, #0f1417 0%, #07090a 60%, #050607 100%);
          color: #e6fff0;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
        }

        .card {
          width: min(92vw, 480px);
          padding: 28px;
          background: rgba(10, 14, 12, 0.8);
          border: 1px solid rgba(57, 255, 20, 0.25);
          border-radius: 20px;
          box-shadow:
            0 0 0 1px rgba(57,255,20,0.08) inset,
            0 0 32px rgba(57,255,20,0.08),
            0 0 80px rgba(57,255,20,0.05);
          backdrop-filter: blur(6px);
          position: relative;
        }

        .heading {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .logo-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #39ff14;
          box-shadow: 0 0 12px #39ff14, 0 0 28px rgba(57,255,20,0.6);
          animation: pulse 1.8s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        .title {
          font-size: 24px;
          letter-spacing: 0.4px;
          color: #c6ffda;
          text-shadow: 0 0 8px rgba(57,255,20,0.25);
        }

        .subtitle {
          font-size: 13px;
          color: #84ffb0;
          opacity: 0.8;
          margin-bottom: 18px;
        }

        .field {
          display: grid;
          gap: 8px;
          margin-bottom: 14px;
        }

        .label {
          font-size: 12px;
          color: #a7ffbf;
          letter-spacing: 0.3px;
        }

        .input {
          height: 42px;
          padding: 0 12px 0 38px;
          border-radius: 12px;
          border: 1px solid rgba(57,255,20,0.25);
          background: rgba(5,7,6,0.75);
          color: #e6ffe6;
          outline: none;
          box-shadow: 0 0 0 2px transparent;
          transition: box-shadow 180ms ease, border-color 180ms ease, background 220ms ease;
        }

        .input:focus {
          border-color: rgba(57,255,20,0.6);
          box-shadow: 0 0 0 2px rgba(57,255,20,0.15), 0 0 24px rgba(57,255,20,0.08);
          background: rgba(5,7,6,0.9);
        }

        .input-icon-wrap {
          position: relative;
        }

        .icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          color: #7cffab;
          opacity: 0.9;
          text-shadow: 0 0 6px rgba(57,255,20,0.35);
          pointer-events: none;
        }

        .row {
          display: flex;
          gap: 10px;
          justify-content: space-between;
          align-items: center;
          margin: 8px 0 16px;
        }

        .checkbox {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #a7ffbf;
          cursor: pointer;
          user-select: none;
        }

        .cta {
          width: 100%;
          height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(57,255,20,0.3);
          background: linear-gradient(180deg, rgba(57,255,20,0.12), rgba(57,255,20,0.06));
          color: #caffd3;
          font-weight: 600;
          letter-spacing: 0.6px;
          cursor: pointer;
          transition: transform 120ms ease, filter 120ms ease, box-shadow 200ms ease;
          box-shadow: 0 0 0 0 rgba(57,255,20,0.2);
        }

        .cta:hover { filter: brightness(1.15); }
        .cta:active { transform: translateY(1px) scale(0.995); }
        .cta:disabled { opacity: 0.6; cursor: not-allowed; }

        .helper {
          font-size: 12px;
          color: #8dffb8;
          text-align: center;
          margin-top: 10px;
          opacity: 0.85;
        }

        .error, .success {
          border: 1px solid;
          border-radius: 12px;
          padding: 10px 12px;
          margin-bottom: 12px;
          font-size: 13px;
        }
        .error {
          border-color: rgba(255, 84, 84, 0.5);
          background: rgba(255, 84, 84, 0.08);
          color: #ffb3b3;
          text-shadow: 0 0 6px rgba(255, 84, 84, 0.25);
        }
        .success {
          border-color: rgba(57,255,20,0.55);
          background: rgba(57,255,20,0.08);
          color: #c6ffd8;
          text-shadow: 0 0 6px rgba(57,255,20,0.25);
        }

        .footer {
          margin-top: 18px;
          display: flex;
          justify-content: center;
          gap: 10px;
          font-size: 12px;
          color: #9dffc2;
          opacity: 0.9;
        }

        .link {
          color: #baffcf;
          text-decoration: none;
          border-bottom: 1px dashed rgba(186,255,207,0.45);
        }
        .link:hover { filter: brightness(1.2); }
      `}</style>

      <div className="card" role="dialog" aria-labelledby="signup-title" aria-modal>
        <div className="heading">
          <span className="logo-dot" aria-hidden />
          <h1 id="signup-title" className="title">Create Account</h1>
        </div>
        <p className="subtitle">Secure access via reverse proxy · JWT · rate‑limited</p>

        {error && <div className="error" role="alert">{error}</div>}
        {success && <div className="success" role="status">{success}</div>}

        <form onSubmit={handleSignup} noValidate>
          <div className="field">
            <label htmlFor="username" className="label">Username</label>
            <div className="input-icon-wrap">
              <span className="icon">👤</span>
              <input
                id="username"
                className="input"
                type="text"
                autoComplete="username"
                placeholder="e.g. your_username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          
          <div className="field">
            <label htmlFor="email" className="label">Email</label>
            <div className="input-icon-wrap">
              <span className="icon">✉️</span>
              <input
                id="email"
                className="input"
                type="email"
                autoComplete="email"
                placeholder="e.g. bat@cave.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="password" className="label">Password</label>
            <div className="input-icon-wrap">
              <span className="icon">🔒</span>
              <input
                id="password"
                className="input"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="cta" type="submit" disabled={loading}>
            {loading ? "Creating account…" : "Sign Up"}
          </button>
        </form>

        <p className="helper">Tip: Use a strong password to protect your account.</p>

        <div className="footer">
          <span>Already have an account?</span>
          <a className="link" href="/login">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;