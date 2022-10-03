import { useState } from 'react';
import SearchInput from '../../components/molecules/SearchInput';
import Container from '../../components/organisms/Container';

export interface HomeContainerProps {
}

export default function HomeContainer (props: HomeContainerProps) {
  const [value, setValue] = useState<string>('');
  return (
    <div>test</div>
  );
}
