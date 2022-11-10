
import { BiPlus } from 'react-icons/bi';
import { HiOutlineDotsHorizontal, HiOutlineTable } from 'react-icons/hi';
import Button from '~atoms/Button';
import Icon from '~atoms/Icon';
import { NumberInput } from '~atoms/Input';
import Text from '~atoms/Text';
import DropdownControl from '~molecules/DropdownControl';
import SearchInput from '~molecules/SearchInput';
import { mapModifiers } from '../../../utils/funcs';


export type MemberMenuControlType = 'delete';

export interface MemberTypes {
  id: string;
  fullName: string;
  email: string;
  joined: Date;
  permissions: string;
}

export interface MemberManagerProps {
  title: string;
  searchValue: string;
  searchPlaceholder?: string;
  memberList: MemberTypes[];
  tableRowShow?: number;
  disabledMemberHash?: { [key: string]: true };
  onTableRowShowChange?: (value: number) => void;
  onChangeSearchValue?: (value: string) => void;
  onMemberMenuControlItemClick: (value: MemberTypes, type: MemberMenuControlType) => void;
}

const MemberManager: React.FC<MemberManagerProps> = ({
  title,
  searchValue,
  searchPlaceholder,
  memberList,
  tableRowShow = 8,
  disabledMemberHash = {},
  onTableRowShowChange,
  onChangeSearchValue,
  onMemberMenuControlItemClick,
}) => {
  return <div className="t-memberManager">
    <div className="t-memberManager_title">
      <Text type='h2' modifiers={['20x24', '500', 'black']}>{title}</Text>
    </div>
    <div className="t-memberManager_controlBar">
      <div className="t-memberManager_controlBar_search">
        <SearchInput
          value={searchValue}
          isNoIcon
          modifiers='hasBorder'
          placeholder={searchPlaceholder}
          onChange={onChangeSearchValue}
        />
      </div>
      <div className="t-memberManager_button">
        <Button variant='group'><Icon modifiers={['16x16', 'white']}>{BiPlus}</Icon><Text modifiers={['14x18', 'white']}>Thêm thành viên</Text></Button>
      </div>
    </div>

    <div className="t-memberManager_memberTable">
      <table className="t-memberManager_memberTable_table">
        <thead>
          <tr>
            <th><Text modifiers={['16x24', 'grayX11', '400']}>Stt</Text></th>
            <th><Text modifiers={['16x24', 'grayX11', '400']}>Tên</Text></th>
            <th><Text modifiers={['16x24', 'grayX11', '400']}>Email</Text></th>
            <th><Text modifiers={['16x24', 'grayX11', '400']}>Tham gia</Text></th>
            <th><Text modifiers={['16x24', 'grayX11', '400']}>Chức vụ</Text></th>
            <th><Icon modifiers={['20x20', 'grayX11']}>{HiOutlineTable}</Icon></th>
          </tr>
        </thead>
        <tbody>
          {memberList.length === 0 && (
            <tr>
              <td className="col-16" colSpan={4}>
                <Text modifiers={['14x21', '500', 'charlestonGreen', 'center', 'fontLexend']}>Không có dữ liệu</Text>
              </td>
            </tr>
          )}
          {memberList.map((value, idx) => (
            <tr className={mapModifiers('t-memberManager_memberRow', disabledMemberHash[value.id] && 'disabled')} key={`member-manager-member-${idx}`}>
              <td>
                <Text modifiers={['charcoal']}>{idx + 1}</Text>
              </td>
              <td>
                <Text modifiers={['charcoal']}>{value.fullName}</Text>
              </td>
              <td>
                <Text modifiers={['charcoal']}>{value.email}</Text>
              </td>
              <td>
                <Text modifiers={['charcoal']}>{value.joined.toDateString()}</Text>
              </td>
              <td>
                <Text modifiers={['charcoal']}>{value.permissions}</Text>
              </td>
              <td>
                <div className="t-memberManager_memberMenu">
                  <DropdownControl
                    isDisabled={disabledMemberHash[value.id]}
                    dropdownList={[
                      { label: 'Xóa khỏi nhóm', value: 'delete' as MemberMenuControlType }
                    ]}
                    onItemClick={(type) => {
                      if (onMemberMenuControlItemClick) {
                        onMemberMenuControlItemClick(value, type as MemberMenuControlType);
                      }
                    }}
                  >
                    <Icon modifiers={['20x20', 'charcoal']}>{HiOutlineDotsHorizontal}</Icon>
                  </DropdownControl>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="t-memberManager_tableFooterControl">
      <div className="t-memberManager_tableFooterControl_pagination"></div>
      <div className="t-memberManager_tableFooterControl_rowShow">
        <label className="t-memberManager_rowShowLabel" htmlFor='memberManager-table-row-show'>
          Hiển thị
        </label>
        <div className="t-memberManager_rowShowInput">
          <NumberInput
            id="memberManager-table-row-show"
            value={tableRowShow}
            isLabelInside
            onChange={onTableRowShowChange}
            label={'Hàng'}
            min={1}
            max={20}
          />
        </div>
      </div>
    </div>
  </div>
};

MemberManager.defaultProps = {
};

export default MemberManager;

