import React, { useEffect, useState } from 'react';
import RankList from './RankList/RankList';
import { fetch_data } from '../../redux/actions/action';
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';

const Home = () => {
  const data = useSelector(state => state);
  useEffect(() => {
    if (!data) {
      store.dispatch(fetch_data());
    }
  }, [data])
  return <RankList />;
};

export default Home;
