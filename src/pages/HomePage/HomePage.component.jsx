import React from 'react';

import CharactersList from '../../components/CharactersList/CharactersList.component';
import SearchBox from '../../components/SearchBox/SearchBox.component';

import banner from '../../assets/banner.png';

import { HomePageContainer, BannerImage } from './HomePage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <BannerImage src={banner} alt="banner" />
      <SearchBox placeholder="Search by character's name" />
      <CharactersList />
    </HomePageContainer>
  );
};

export default HomePage;
