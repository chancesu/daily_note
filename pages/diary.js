import React from 'react';
import Helmet from 'react-helmet';
import DiaryContainer from '@/diary';
import '@styles/index.scss';
import '@styles/diary.scss';

const Diary = () => (
  <>
    <Helmet title="Diary Page" />
    <DiaryContainer />
  </>
);

export default Diary;
