import React from 'react';
import Helmet from 'react-helmet';
import EditContainer from '@/diary/edit';
import '@styles/index.scss';
import '@styles/diary.scss';

const Edit = () => (
  <>
    <Helmet title="Diary Edit" />
    <EditContainer />
  </>
);

export default Edit;
