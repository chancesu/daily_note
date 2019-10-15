import React from 'react';
import Helmet from 'react-helmet';
import scss from '@styles/index.scss';
import TextDiary from '@/TextDiary';

const Index = () => (
  <React.Fragment>
    <Helmet title="Main Page" />
    <TextDiary/>
  </React.Fragment>
)

export default Index;