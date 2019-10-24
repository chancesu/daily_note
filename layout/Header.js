import React from 'react';
import Link from 'next/link';
import '@styles/layout/header.scss';

const Header = () => (
  <header>
    <ul className="nav">
      <li><Link href="/"><a>목록보기</a></Link></li>
      <li><Link href="/calendar"><a>캘린더보기</a></Link></li>
      <li><Link href="/#none"><a>설정</a></Link></li>
    </ul>
  </header>
);

export default Header;
