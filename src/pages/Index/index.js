import React from 'react';
import TrendingUsers from '../../components/TrendingUsers';
import MostActiveUsers from '../../components/MostActiveUsers';
import TopRepositories from '../../components/TopRepositories';

export default function Index() {
  return (
    <>
      <TrendingUsers />
      <MostActiveUsers />
      <TopRepositories />
    </>
  );
}
