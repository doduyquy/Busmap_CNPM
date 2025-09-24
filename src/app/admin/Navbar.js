"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faUserCheck, faMapMarkerAlt, faComments, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import '../styles/navbar.css';

import '../styles/globals.css';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar">
      <div className="logo">Mainboard SSB 1.0</div>
      <div className="nav-links">
        <Link href="/" className={`nav-link ${pathname === '/' ? 'nav-link-selected' : ''}`}>
          <FontAwesomeIcon icon={faHome} />
          <span>Tổng quan</span>
        </Link>
        <Link href="/schedule" className={`nav-link ${pathname === '/schedule' ? 'nav-link-selected' : ''}`}>
          <FontAwesomeIcon icon={faCalendar} />
          <span>Lịch trình</span>
        </Link>
        <Link href="/assignment" className={`nav-link ${pathname === '/assignment' ? 'nav-link-selected' : ''}`}>
          <FontAwesomeIcon icon={faUserCheck} />
          <span>Phân công</span>
        </Link>
        <Link href="/tracking" className={`nav-link ${pathname === '/tracking' ? 'nav-link-selected' : ''}`}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Theo dõi</span>
        </Link>
        <Link href="/messaging" className={`nav-link ${pathname === '/messaging' ? 'nav-link-selected' : ''}`}>
          <FontAwesomeIcon icon={faComments} />
          <span>Nhắn tin</span>
        </Link>
        <Link href="/logout" className={`nav-link ${pathname === '/logout' ? 'nav-link-selected' : ''}`}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Đăng Xuất</span>
        </Link>
      </div>
    </nav>
  );
}