import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineChatBubbleOutline } from 'react-icons/md';
import Icon from '~atoms/Icon';
import Image from '~atoms/Image';
import Text from '~atoms/Text';
import { getAvatarColors } from '../../../utils/funcs';

export interface GroupMember {
  username: string;
}

export interface GroupCardProps {
  avatarSrc: string;
  name: string;
  description: string;
  memberList: GroupMember[];
}

const GroupCard: React.FC<GroupCardProps> = ({name, description, memberList = [], avatarSrc}) => {
  return <div className="o-groupCard">
    <div className="o-groupCard_header">
      <div className="o-groupCard_header_userList">
        {memberList.map((member, index) => {
          const {backgroundColor, color} = getAvatarColors(member.username);
          return <div className="o-groupCard_user" style={{backgroundColor, color}} key={`group-card-user-${index}`}>
          {member?.username.substring(0, 1)}
        </div>
        }
        )}
      </div>
      <div className="o-groupCard_header_iconControl">
        <div className="o-groupCard_chatIcon">
          <Icon modifiers={['24x25', 'columbiaBlue']}>{MdOutlineChatBubbleOutline}</Icon>
        </div>
        <div className="o-groupCard_menuIcon">
          <Icon modifiers={['24x25', 'columbiaBlue']}>{BsThreeDotsVertical}</Icon>
        </div>
      </div>
    </div>

    <div className="o-groupCard_avatar">
      <div className="o-groupCard_avatar_wrapper">
        <img className="o-groupCard_avatar_img" src={avatarSrc} />
      </div>
    </div>

    <div className="o-groupCard_info">
      <div className="o-groupCard_info_text">
        <Text modifiers={['16x20', '600', 'deepKoamaru', 'capitalize']}>{name}</Text>
      </div>
      <div className="o-groupCard_info_description">
        <Text modifiers={['16x20', 'lightSlateGray']}>{description}</Text>
      </div>
    </div>
    
    
  </div>
};

GroupCard.defaultProps = {
};

export default GroupCard;

