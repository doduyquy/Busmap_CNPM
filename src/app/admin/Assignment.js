"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import '../styles/assignment.css';
import '../styles/globals.css';

export default function Assignment() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      driver: e.target['assignment-driver'].value,
      bus: e.target['assignment-bus'].value,
      route: e.target['assignment-route'].value,
    };
    console.log('Form submitted:', formData);
    // Add logic to handle form submission (e.g., API call) here
  };

  const assignments = [
    { driver: 'Trần Văn A', bus: 'Xe 01', route: 'Tuyến A' },
    { driver: 'Nguyễn Văn B', bus: 'Xe 02', route: 'Tuyến B' },
  ];

  return (
    <div className="main-content">
      <div className="assignment">
        <h3>Phân công tài xế/xe</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="assignment-driver">Tài xế</label>
            <select id="assignment-driver" required>
              <option value="tran-van-a">Trần Văn A</option>
              <option value="nguyen-van-b">Nguyễn Văn B</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="assignment-bus">Xe buýt</label>
            <select id="assignment-bus" required>
              <option value="xe-01">Xe 01</option>
              <option value="xe-02">Xe 02</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="assignment-route">Tuyến đường</label>
            <select id="assignment-route" required>
              <option value="tuyen-a">Tuyến A</option>
              <option value="tuyen-b">Tuyến B</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">
            <FontAwesomeIcon icon={faPlus} />
            <span>Cập nhật phân công</span>
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Tài xế</th>
              <th>Xe buýt</th>
              <th>Tuyến đường</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((item, index) => (
              <tr key={index}>
                <td>{item.driver}</td>
                <td>{item.bus}</td>
                <td>{item.route}</td>
                <td>
                  <button className="action-button">
                    <FontAwesomeIcon icon={faEdit} />
                    <span>Sửa</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}