import React, { useRef, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { rem, fontFamilyMixin, resetButton } from '~mixin';
import contactCardIcon from '~assets/icons/ic_contact_card.svg';
import { SxProps } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Theme } from "@mui/material/styles";

export interface ContactCardProps {
  icon: string | JSX.Element;
  color: string;
  title: string;
  value: string;
  desc?: string;
  hasCopy?: boolean;
  sx?: SxProps<Theme>;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  color,
  title,
  desc,
  value,
  hasCopy = true,
  sx,
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const resetCopyTimeOutRef = useRef<NodeJS.Timeout>();

  const handleClickCopy = () => {
    if(resetCopyTimeOutRef.current) {
      clearTimeout(resetCopyTimeOutRef.current);
    }

    setIsCopied(true);
    navigator.clipboard.writeText(value)
    resetCopyTimeOutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 3000)
  }
  
  return (
    <Box
      className="o-contactCard"
      sx={{
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: rem(12),
        pb: rem(16),
        width: '100%',
        minWidth: rem(130),
        minHeight: rem(100),
        ...sx,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: rem(112),
          top: rem(-32),
          left: '50%',
          transform: 'translateX(-50%)',
          '& img': {
            height: '100%',
            width: '100%',
          }
        }}
      >
        <img src={contactCardIcon} alt="" />
      </Box>
      <Box
        sx={{
          // width: rem(65),
          position: 'absolute',
          top: rem(-29.5),
          height: rem(59),
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: rem(52),
            aspectRatio: '1 / 1',
            borderRadius: '50%',
            // border: `${rem(2)} solid green`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: color,
            color: 'white',
          }}
        >
          {icon}
        </Box>
      </Box>
      <Typography
        variant='body1'
        sx={{
          textAlign: 'center',
          pt: rem(36),
          fontWeight: 800,
          fontSize: rem(16),
          lineHeight: rem(18),
          ...fontFamilyMixin('jost'),
        }}
      >
        {title}
      </Typography>
      {Boolean(desc) && <Typography
        variant='body1'
        sx={{
          textAlign: 'center',
          color: '#7c7c7c',
          fontSize: rem(14),
          mt: rem(4),
          lineHeight: rem(16),
          ...fontFamilyMixin('jost'),

        }}>
        {desc}
      </Typography>}
      <Box sx={{display: 'flex', alignItems: 'center', px: rem(8), justifyContent: 'center', mt: rem(8)}}>
        <Typography
          sx={{
          fontSize: rem(14),
            color: '#4B4B4B',
            wordBreak: 'break-word',
            ...fontFamilyMixin('jost'),
          }}
        >
          {value}
        </Typography>
        {hasCopy && <Button sx={{ml: rem(4), ...resetButton}} onClick={handleClickCopy}>
          <ContentCopyIcon sx={{color: isCopied ? '#9e9e9ea1' : '#5d5c5c', fontSize: rem(18), cursor: 'pointer'}}/>
        </Button>}
      </Box>  
    </Box>
  )
};

export default ContactCard;

