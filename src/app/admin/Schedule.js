"use client";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faCalendar } from '@fortawesome/free-solid-svg-icons';
import '../styles/schedule.css';
import '../styles/globals.css';

export default function Schedule() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: e.target['schedule-date'].value,
      route: e.target['schedule-route'].value,
      time: e.target['schedule-time'].value,
    };
    console.log('Form submitted:', formData);
    // Add logic to handle form submission (e.g., API call) here
  };

  const schedules = [
    { date: '20/09/2025', route: 'Tuyến A', time: '6:30 AM - 8:00 AM' },
    { date: '20/09/2025', route: 'Tuyến B', time: '7:00 AM - 8:30 AM' },
    { date: '20/09/2025', route: 'Tuyến A', time: '6:30 AM - 8:00 AM' },
    { date: '20/09/2025', route: 'Tuyến B', time: '7:00 AM - 8:30 AM' },
    { date: '20/09/2025', route: 'Tuyến A', time: '6:30 AM - 8:00 AM' },
    { date: '20/09/2025', route: 'Tuyến B', time: '7:00 AM - 8:30 AM' },
    
    
  ];

  return (
    <div className="main-content">
      <div className="schedule">
        <div className="overview-header">
          <FontAwesomeIcon icon={faCalendar} />
          <h3>Lịch trình</h3>
        </div>  
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="schedule-date">Ngày/Tháng</label>
            <input type="date" id="schedule-date" required />
          </div>
          <div className="form-group">
            <label htmlFor="schedule-route">Tuyến đường</label>
            <select id="schedule-route" required>
              <option value="tuyen-a">Tuyến A</option>
              <option value="tuyen-b">Tuyến B</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="schedule-time">Thời gian</label>
            <input
              type="text"
              id="schedule-time"
              placeholder="VD: 6:30 AM - 8:00 AM"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            <FontAwesomeIcon icon={faPlus} />
            <span>Lưu lịch trình</span>
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Ngày</th>
              <th>Tuyến đường</th>
              <th>Thời gian</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.route}</td>
                <td>{item.time}</td>
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
        <div className="pagination">
          <button className="pagination-btn">Trước</button>
          <button className="pagination-btn">1</button>
          <button className="pagination-btn">Sau</button>
        </div>
      </div>
    </div>
  );
}