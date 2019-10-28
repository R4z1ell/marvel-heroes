import React from 'react';

import CharactersList from '../../components/CharactersList/CharactersList.component';

import banner from '../../assets/banner.png';

import { HomePageContainer, BannerImage } from './HomePage.styles';

const HomePage = () => (
  <HomePageContainer>
    <BannerImage src={banner} alt="banner" />
    <CharactersList />
  </HomePageContainer>
);

export default HomePage;
