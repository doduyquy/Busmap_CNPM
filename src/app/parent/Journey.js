"use client";

import '../styles/journey.css';
import '../styles/globals.css';

export default function Journey() {
  return (
    <div className="main-content">
      <div className="overview">
        <div className="overview-header">
          <h3>Theo dõi xe buýt</h3>
        </div>  
        <div className="map-placeholder">
          Bản đồ thời gian thực (Google API)
          <div className="map-controls">
            <button>Phóng to</button>
            <button>Thu nhỏ</button>
            <button>Tắt theo dõi</button>
          </div>
        </div>
        </div>
        <div className="bus-info">
          <p><strong>Xe:</strong> Xe 01 - Tuyến A</p>
          <p><strong>Tài xế:</strong> Nguyễn Văn A</p>
          <p><strong>Trạng thái:</strong> Đang di chuyển</p>
          <p><strong>Thời gian đến dự kiến:</strong> 7:30 AM</p>
        </div>
      </div>
  );
}