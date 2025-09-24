"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faStop } from '@fortawesome/free-solid-svg-icons';
import '../styles/tracking.css';
import '../styles/globals.css';

export default function Tracking() {
  const viewBusDetails = (busId) => {
    console.log(`Viewing details for bus: ${busId}`);
    // Add logic to show bus details (e.g., modal, API call) here
  };

  return (
    <div className="main-content">
      <div className="tracking">
        <h3>Theo dõi xe buýt</h3>
        <div className="map-placeholder">
          Bản đồ thời gian thực (Google Maps API sẽ được tích hợp)
          <div className="map-controls">
            <button className="map-btn">
              <FontAwesomeIcon icon={faPlus} />
              <span>Phóng to</span>
            </button>
            <button className="map-btn">
              <FontAwesomeIcon icon={faMinus} />
              <span>Thu nhỏ</span>
            </button>
            <button className="map-btn">
              <FontAwesomeIcon icon={faStop} />
              <span>Tắt theo dõi</span>
            </button>
          </div>
        </div>
        <div className="alert-item">Xe 01: Kẹt xe tại ngã tư Lê Lợi - 7:45 AM, 20/09/2025</div>
        <p><strong>Xe 01:</strong> Vị trí hiện tại - 10.7769, 106.7009 (Cập nhật: 7:55 AM, 20/09/2025)</p>
        <p><strong>Xe 02:</strong> Vị trí hiện tại - 10.7800, 106.7100 (Cập nhật: 7:54 AM, 20/09/2025)</p>
        <p className="contact-links">
          <a href="#" onClick={() => viewBusDetails('xe-01')}>Xem chi tiết Xe 01</a> |{' '}
          <a href="#" onClick={() => viewBusDetails('xe-02')}>Xem chi tiết Xe 02</a>
        </p>
      </div>
    </div>
  );
}