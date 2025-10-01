"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faClockRotateLeft, faBell, faCircleUser, faGear, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import '../styles/navbar.css';

import '../styles/globals.css';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar">
      <div className="logo">Mainboard SSB 1.0</div>
      <div className="nav-links">
        <Link href="/journey" className={`nav-link ${pathname === '/journey' ? 'nav-link-selected' : ''}`}>
          <FontAwesomeIcon icon={faEye} />
          <span>Theo dõi hành trình</span>
        </Link>
        <Link href="/history" className={`nav-link ${pathname === '/history' ? 'nav-link-selected' : ''}`}>
          <FontAwesomeIcon icon={faClockRotateLeft} />
          <span>Lịch sử hành trình</span>
        </Link>
        <Link href="/notification" className={`nav-link ${pathname === '/notification' ? 'nav-link-selected' : ''}`}>
          <FontAwesomeIcon icon={faBell} />
          <span>Thông báo</span>
        </Link>
        <Link href="/information" className={`nav-link ${pathname === '/information' ? 'nav-link-selected' : ''}`}>
          <FontAwesomeIcon icon={faCircleUser} />
          <span>Thông tin học sinh</span>
        </Link>
        <Link href="/setting" className={`nav-link ${pathname === '/setting' ? 'nav-link-selected' : ''}`}>
          <FontAwesomeIcon icon={faGear} />
          <span>Cài đặt</span>
        </Link>
        <Link href="/logout" className={`nav-link ${pathname === '/logout' ? 'nav-link-selected' : ''}`}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Đăng Xuất</span>
        </Link>
      </div>
    </nav>
  );
}