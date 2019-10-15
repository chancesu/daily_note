import React from 'react';
import scss from '@styles/layout/header.scss';

const Header = ()=> (
    <header>
        <ul className="nav">
          <li><a href="#">목록보기</a></li>
          <li><a href="#">캘린더보기</a></li>
          <li><a href="#">설정</a></li>
        </ul>
    </header>
);

export default Header;