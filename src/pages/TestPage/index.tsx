import * as React from 'react';
import SlideBar from '../../components/templates/SlideBar';

export interface TestPageProps {
}

export default function TestPage (props: TestPageProps) {
  return (
    <div>
      <SlideBar />
    </div>
  );
}
