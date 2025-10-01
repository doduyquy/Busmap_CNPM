"use client";

import '../styles/notification.css';
import '../styles/globals.css';

export default function Notification() {
  const notifications = [
    { driver: 'Trần Văn A', bus: 'Xe 01', status: 'Cách điểm đón 500m', time: '7:25 AM, 19/09/2025' },
    { driver: 'Nguyễn Văn B', bus: 'Xe 02', status: 'Trễ 5 phút do kẹt xe', time: '7:20 AM, 19/09/2025' },
    { driver: 'Phạm Văn C', bus: 'Xe 04', status: 'Đã đến điểm đón', time: '7:15 AM, 19/09/2025' },
    { driver: 'Phạm Văn D', bus: 'Xe 27', status: 'Cách điểm đón 200m', time: '7:18 AM, 19/09/2025' },
    { driver: 'Trần Văn Y', bus: 'Xe 41', status: 'Cách điểm đón 100m', time: '7:22 AM, 19/09/2025' },
  ];

  return (
    <div className="main-content">
      <div className="notifications">
        <h3>Thông báo</h3>

        <div style={{ marginBottom: "10px" }}>
          <input type="checkbox" id="push-notifications" defaultChecked />
          <label htmlFor="push-notifications">Bật thông báo đẩy</label>
        </div>

        {notifications.map((item, index) => (
          <div
            key={index}
            className={`notification-item ${
              item.status.includes("Trễ") ? "alert" : ""
            }`}
          >
            <strong>{item.bus} ({item.driver}):</strong> {item.status} - {item.time}
          </div>
        ))}

        <div className="contact-links">
          <a href="tel:0123456789">Liên hệ tài xế</a> |{" "}
          <a href="mailto:manager@ssb1.0.edu.vn">Liên hệ quản lý</a>
        </div>
      </div>
    </div>
  );
}
