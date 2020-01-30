import React from 'react';
import Helmet from 'react-helmet';
import TextDiary from '@/TextDiary';
import '@styles/index.scss';

const Index = () => (
  <>
    <Helmet title="Main Page" />
    <TextDiary />
  </>
);

export default Index;
