import React from 'react';
import Link from 'next/link';
import scss from '@styles/layout/header.scss';

const Header = ()=> (
    <header>
        <ul className="nav">
          <li><a href="#">목록보기</a></li>
          <li><Link href='/calendar'><a>캘린더보기</a></Link></li>
          <li><a href="#">설정</a></li>
        </ul>
    </header>
);

export default Header;