import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import Button from '~atoms/Button';
import Icon from '~atoms/Icon';
import Text from '~atoms/Text';
import SearchInput from '~molecules/SearchInput';
import Container from '~organisms/ContainerBase';
import GroupCard, { GroupMember } from '~organisms/GroupCard';
import CustomModal from '~organisms/Modal';
import { mapModifiers } from '../../../utils/funcs';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import GroupCreateForm, { GroupCreateFields } from '~templates/GroupCreateForm';

export interface GroupTypes {
  id: string,
  slug: string;
  name: string;
  description: string;
  memberList: GroupMember[];
  avatarSrc: string;
}

export interface GroupManagerProps {
  groupList: GroupTypes[];
  searchValue: string;
  onAddGroupClick?: () => void;
  onChangeSearchValue?: (value: string) => void;
  onGroupCardClick?: (slug: string) => void;
  onGroupSelect?: (group: GroupTypes) => void;
  onGroupDelete?: (groupSlug: string) => void;
  onGroupUpdate?: (groupSlug: string) => void;
}

const GroupManager: React.FC<GroupManagerProps> = ({
  groupList,
  searchValue,
  onChangeSearchValue,
  onAddGroupClick,
  onGroupCardClick,
  onGroupSelect,
  onGroupDelete,
  onGroupUpdate,
}) => {
  return <div className="t-groupManager">
    <div className="t-groupManager_header">
      <Container>
        <div className="t-groupManager_headerWrapper">
          <div className="t-groupManager_header_text">
            <Text modifiers={['20x24', '600']} type='h1'>Members & Teams</Text>
          </div>
          <div className="t-groupManager_header_search">
            <SearchInput value={searchValue} onChange={onChangeSearchValue} placeholder="Tìm kiếm ..." />
          </div>
          <div className="t-groupManager_header_addButton">
            <Button variant='group' modifiers={['14x16']} onClick={onAddGroupClick}>
              <Icon modifiers={['16x16', 'white']}>{BsPlusLg}</Icon>
              <div className="t-groupManager_addBtnText">
                <Text modifiers={['14x16', '500', 'uppercase']} type='span'>
                  Tạo nhóm
                </Text>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </div>
    <Container>
      <div className="t-groupManager_groupTitle">
        <Text modifiers={['12x18', 'lightSteelBlue', '500', 'uppercase']}>Danh sách nhóm</Text>
      </div>
      {groupList.length === 0 && <div className="t-groupManager_groupEmpty">
        {groupList.length === 0} <Text modifiers={['16x24', '500', 'center', 'black']}>Bạn chưa có nhóm</Text>
      </div>}

      <div className="t-groupManager_groupList">
        {groupList.map((value, index) => (
          <div
            className={
              mapModifiers(
                "t-groupManager_card"
              )
            }
            key={`group-list-${value.id}`}
          >
            <GroupCard
              {...value}
              onAvatarClick={onGroupCardClick}
              onSelect={() => {
                onGroupSelect && onGroupSelect(value);
              }}
              onDelete={() => {
                if (onGroupDelete) onGroupDelete(value.slug);
              }}
              onUpdate={() => {
                if (onGroupUpdate) onGroupUpdate(value.slug);
              }}
            />
          </div>
        ))}
      </div>
    </Container>
  </div>
};

GroupManager.defaultProps = {
};

export default GroupManager;

