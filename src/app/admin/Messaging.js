"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '../styles/messaging.css';
import '../styles/globals.css';

export default function Messaging() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      recipient: e.target['recipient'].value,
      message: e.target['message'].value,
    };
    console.log('Form submitted:', formData);
    // Add logic to handle form submission (e.g., API call) here
  };

  return (
    <div className="main-content">
      <div className="messaging">
        <h3>Gửi tin nhắn</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="recipient">Gửi đến</label>
            <select id="recipient" required>
              <option value="driver">Tài xế</option>
              <option value="parent">Phụ huynh</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Nội dung</label>
            <textarea id="message" placeholder="Nhập nội dung tin nhắn" required />
          </div>
          <button type="submit" className="submit-btn">
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>Gửi</span>
          </button>
        </form>
      </div>
    </div>
  );
}