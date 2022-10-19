import * as React from 'react';
import MainLayout from '../../components/templates/MainLayout';
import HomeContainer from '../../containers/HomeContainer';
import MainLayoutContainer from '../../containers/MainLayoutContainer';

export default function HomePage() {
  return (
    <div className="p-home">
      <HomeContainer />
    </div>
  );
}
