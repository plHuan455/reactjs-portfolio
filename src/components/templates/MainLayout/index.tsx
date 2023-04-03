import { Suspense } from 'react';
import Loading from '~atoms/Loading';
import Header from '~templates/Header';
import { Box } from '@mui/material';
import bgNeonOrange from '~assets/icons/ic_neon_orange.svg';
import bgNeonBlue from '~assets/icons/ic_neon_blue.svg';
import { rem } from '~mixin';

export interface MainLayoutProps {
  children: JSX.Element;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box
      className="t-mainLayout"
      sx={{
        backgroundColor: '#1b0722',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box sx={{position: 'absolute', top: rem(800)}}>
        <img src={bgNeonOrange} alt=''/>
      </Box>
      <Box sx={{position: 'absolute', top: rem(1648), right: 0, zIndex: 0}}>
        <img src={bgNeonBlue} alt=''/>
      </Box>
      <Box sx={{position: 'absolute', top: rem(3000), right: 0, zIndex: 0}}>
        <img src={bgNeonBlue} alt=''/>
      </Box>
      <Box sx={{position: 'absolute', top: 0, width: '100%', zIndex: 100}}>
        <Header />
      </Box>
      <main className="t-mainLayout_content_main">
        <Suspense fallback={<Loading size='page' />}>
          {children}
        </Suspense>
      </main>
    </Box>
  );
}
