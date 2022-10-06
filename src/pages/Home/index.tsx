import * as React from 'react';
import MainLayout from '../../components/templates/MainLayout';
import HomeContainer from '../../container/HomeContainer';
import MainLayoutContainer from '../../container/MainLayoutContainer';

export default function HomePage() {
  return (
    <div className="p-home">
      <HomeContainer />
    </div>
  );
}
