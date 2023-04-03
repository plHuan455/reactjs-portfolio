import { Suspense } from 'react';
import Loading from '~atoms/Loading';
import Header from '~templates/Header';
import { Box } from '@mui/material';
import bgNeonOrange from '~assets/icons/ic_neon_orange.svg';
import bgNeonBlue from '~assets/icons/ic_neon_blue.svg';
import { rem } from '~mixin';
import FsLightbox from 'fslightbox-react';

export interface MainLayoutProps {
  children: JSX.Element;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box
      className="t-mainLayout"
      sx={{
        backgroundColor: '#1D1B1B',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box sx={{position: 'absolute', top: rem(400)}}>
        <img src={bgNeonOrange} alt=''/>
      </Box>
      <Box sx={{position: 'absolute', top: rem(1248), right: 0}}>
        <img src={bgNeonBlue} alt=''/>
      </Box>
      <Box sx={{position: 'absolute', top: rem(2400), right: 0}}>
        <img src={bgNeonBlue} alt=''/>
      </Box>
      <header>
        <Header />
      </header>
      <main className="t-mainLayout_content_main">
        <Suspense fallback={<Loading size='page' />}>
          {children}
        </Suspense>
      </main>
    </Box>
  );
}
