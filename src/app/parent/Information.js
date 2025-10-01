"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "../styles/information.css";
import "../styles/globals.css";

export default function Information() {
  const [preview, setPreview] = useState("/default-avatar.png"); // ảnh mặc định

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <div className="main-content">
      <div className="information">
        <h3>Thông tin học sinh</h3>

        <div className="info-container">
          {/* Bên trái: ảnh */}
          <div className="avatar-section">
            <img
              src={preview}
              alt="Ảnh đại diện học sinh"
              className="student-avatar"
            />
            <label htmlFor="avatar-upload" className="upload-btn">
              <FontAwesomeIcon icon={faUpload} /> Tải ảnh lên
            </label>
            <input
              type="file"
              id="avatar-upload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>

          {/* Bên phải: thông tin */}
          <div className="student-details">
            <p>
              <strong>Tên:</strong> Nguyễn Văn An
            </p>
            <p>
              <strong>Điểm đón:</strong> 123 Đường Lê Lợi
            </p>
            <p>
              <strong>Điểm trả:</strong> Trường DEF
            </p>
            <p>
              <strong>Lịch trình:</strong> Thứ 2-6, Xe 01, 6:30 AM - 8:00 AM
            </p>
            <button className="submit-btn">Cập nhật điểm đón</button>
          </div>
        </div>
      </div>
    </div>
  );
}
