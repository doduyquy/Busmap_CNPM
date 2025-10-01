"use client";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import '../styles/history.css';
import '../styles/globals.css';

export default function History() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: e.target['History-date'].value,
      route: e.target['History-route'].value,
      time: e.target['History-time'].value,
    };
    console.log('Form submitted:', formData);
    // Add logic to handle form submission (e.g., API call) here
  };

  const History = [
    { date: '20/09/2025', route: 'Tuyến A', time: '6:30 AM - 8:00 AM', activity: 'Đón tại điểm A'},
    { date: '20/09/2025', route: 'Tuyến B', time: '7:00 AM - 8:30 AM', activity: 'Trả tại điểm B' },
    { date: '20/09/2025', route: 'Tuyến A', time: '6:30 AM - 8:00 AM', activity: 'Đón tại điểm B' },
    { date: '20/09/2025', route: 'Tuyến B', time: '7:00 AM - 8:30 AM', activity: 'Trả tại điểm trường ABC' },
    { date: '20/09/2025', route: 'Tuyến A', time: '6:30 AM - 8:00 AM', activity: 'Đón tại điểm BB' },
    { date: '20/09/2025', route: 'Tuyến B', time: '7:00 AM - 8:30 AM', activity: 'Trả tại điểm A' },
    
    
  ];

  return (
    <div className="main-content">
      <div className="history">
        <div className="overview-header">
          <h3>Lịch sử hành trình</h3>
        </div>  
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="history-date">Ngày/ Tháng/ Năm</label>
            <input type="date" id="history-date" required />
          <button type="submit" className="submit-btn">
            <FontAwesomeIcon icon={faPlus} />
            <span>Tải về PDF</span>
          </button>
          </div>
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
            {History.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.route}</td>
                <td>{item.time}</td>
                <td>{item.activity} </td>
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