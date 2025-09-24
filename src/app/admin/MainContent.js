"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
import '../styles/maincontent.css';
import '../styles/globals.css';

export default function MainContent() {
  const data = [
    { student: 'Nguyễn Văn An', driver: 'Trần Văn A', bus: 'Xe 01', route: 'Tuyến A', status: 'Đang trên xe' },
    { student: 'Trần Thị Bình', driver: 'Nguyễn Văn B', bus: 'Xe 02', route: 'Tuyến B', status: 'Đã trả' },
    { student: 'Lê Thị Cẩm', driver: 'Phạm Văn C', bus: 'Xe 03', route: 'Tuyến C', status: 'Chờ đón' },
    { student: 'Hoàng Văn Dũng', driver: 'Trần Văn D', bus: 'Xe 04', route: 'Tuyến D', status: 'Đã trả' },
    { student: 'Phan Thị E', driver: 'Nguyễn Văn E', bus: 'Xe 05', route: 'Tuyến E', status: 'Đang trên xe' },
    { student: 'Nguyễn Văn An', driver: 'Trần Văn A', bus: 'Xe 01', route: 'Tuyến A', status: 'Đang trên xe' },
    { student: 'Trần Thị Bình', driver: 'Nguyễn Văn B', bus: 'Xe 02', route: 'Tuyến B', status: 'Đã trả' },
    { student: 'Lê Thị Cẩm', driver: 'Phạm Văn C', bus: 'Xe 03', route: 'Tuyến C', status: 'Chờ đón' },
    { student: 'Hoàng Văn Dũng', driver: 'Trần Văn D', bus: 'Xe 04', route: 'Tuyến D', status: 'Đã trả' },
    { student: 'Phan Thị E', driver: 'Nguyễn Văn E', bus: 'Xe 05', route: 'Tuyến E', status: 'Đang trên xe' },
  ];

  return (
    <div className="main-content">
      <div className="overview">
        <div className="overview-header">
          <FontAwesomeIcon icon={faHome} />
          <h3>Tổng quan</h3>
        </div>  
        <div className="filter-controls">
          <input
            type="text"
            placeholder="Tìm kiếm học sinh, tài xế, xe..."
            className="search-input"
          />
          <button className="search-btn">
            <div className="search-icon-wrapper">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Học sinh</th>
              <th>Tài xế</th>
              <th>Xe buýt</th>
              <th>Tuyến đường</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.student}</td>
                <td>{item.driver}</td>
                <td>{item.bus}</td>
                <td>{item.route}</td>
                <td className={`status status-${item.status.replace(/\s+/g, '-')}`}>
                  <span>{item.status}</span>
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