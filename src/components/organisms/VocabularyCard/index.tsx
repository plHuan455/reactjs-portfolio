import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import Image from '~atoms/Image';
import { rem } from '../../../styles/mixins';
import DropdownControl from '~molecules/DropdownControl';
import MenuBase from '~organisms/MenuBase';


export interface VocabularyCardProps {
  word: string;
  mean: string;
  image: string;
  description: string;
  SuggestionLabel: string;
  onUpdateClick?: () => void;
  onDeleteClick?: () => void;
}

const VocabularyCard: React.FC<VocabularyCardProps> = ({
  word,
  mean,
  image,
  description,
  SuggestionLabel,
  onUpdateClick,
  onDeleteClick,
}) => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  return (
    <Box
      className="o-vocabularyCard"
      sx={{
        borderRadius: rem(4),
        overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: `0 ${rem(3)} ${rem(6)} ${rem(-4)} rgba(0, 0, 0, 0.12), 0 ${rem(6)} ${rem(6)} 0 rgba(0, 0, 0, 0.08), 0 ${rem(9)} ${rem(28)} ${rem(8)} rgba(0, 0, 0, 0.05)`,
        position: 'relative',
        '&:hover .o-vocabularyCard_menuIcon': {
          display: 'flex',
        }
      }}
      onMouseOver={() => setIsShowMenu(true)}
      onMouseOut={() => setIsShowMenu(false)}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: '4 / 3',
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }}
      >
        <img src={image} />
      </Box>
      <Box sx={{ padding: rem(4) }}>
        <Typography sx={{ fontSize: rem(16), lineHeight: rem(20), fontWeight: 500 }}>
          {word}
        </Typography>
        <Typography sx={{ fontSize: rem(14), color: '#198754', fontWeight: 600, textAlign: 'justify', mt: rem(4) }}>
          {mean}
        </Typography>
        <Typography sx={{ fontSize: rem(14), textAlign: 'justify', mt: rem(8) }}>
          {description}
        </Typography>
      </Box>
      {isShowMenu && (
        <Box
          className="o-vocabularyCard_menuIcon"
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            display: 'flex',
            top: 0,
            bottom: 0,
            justifyContent: 'flex-end',
            backgroundColor: '#00000047',
            '& .MuiButtonBase-root': { minWidth: 0 },
            '& .MuiSvgIcon-root': {
              color: '#e9e9e9'
            }
          }}>
          <MenuBase
            menuList={[{ label: 'Chỉnh sửa', value: 'update', icon: <UpdateIcon /> }, { label: 'Xóa', value: 'delete', icon: <DeleteIcon /> }]}
            onMenuItemClick={(option) => {
              setIsShowMenu(false);
              switch(option) {
                case 'update': return onUpdateClick && onUpdateClick();
                case 'delete': return onDeleteClick && onDeleteClick();
              }
            }}
            onClose={() => {
              setIsShowMenu(false);
            }}
          />
        </Box>
      )}
    </Box>
  )
};

export default VocabularyCard;

