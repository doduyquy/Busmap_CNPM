"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faStop } from '@fortawesome/free-solid-svg-icons';
import '../styles/setting.css';
import '../styles/globals.css';

export default function Setting() {
  const viewBusDetails = (busId) => {
    console.log(`Viewing details for bus: ${busId}`);
    // Add logic to show bus details (e.g., modal, API call) here
  };

  return (
    <div className="main-content">
      <div className="settings">
        <h3>Cài đặt</h3>
        <form>
          <label htmlFor="language">Ngôn ngữ:</label>
          <select id="language">
            <option value="vi">Tiếng Việt</option>
            <option value="en">Tiếng Anh</option>
          </select>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" defaultValue="phuhuynh@example.com" />

          <label htmlFor="phone">Số điện thoại:</label>
          <input type="tel" id="phone" defaultValue="0123456789" />

          <label htmlFor="notification-distance">Khoảng cách thông báo:</label>
          <input type="number" id="notification-distance" defaultValue="500" /> mét

          <button type="submit" className="submit-btn">Lưu</button>
        </form>

        <p style={{ marginTop: "10px" }}>
          <a href="mailto:support@ssb1.0.edu.vn" style={{ color: "#3b82f6" }}>
            Liên hệ hỗ trợ
          </a>
        </p>
      </div>
    </div>
  );
}
