import React, { Component } from 'react';

import Logo from './logo';
import RecentPosts from './recentPosts';
import SearchBar from './SearchBar';


export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar />
        <RecentPosts />
      </div>
    );
  }
}
