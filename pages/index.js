import React from 'react';
import Helmet from 'react-helmet';
import '@styles/index.scss';
import TextDiary from '@/TextDiary';

const Index = () => (
  <>
    <Helmet title="Main Page" />
    <TextDiary />
  </>
);

export default Index;
