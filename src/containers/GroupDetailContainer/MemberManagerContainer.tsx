import { useDeferredValue, useState } from "react";
import { groupMemberDummy } from "~assets/dataDummy/groupDummy";
import Container from "~organisms/Container";
import MemberManager, { MemberMenuControlType, MemberTypes } from "~templates/MemberManager";

interface MemberManagerContainerProps { }

const MemberManagerContainer: React.FC<MemberManagerContainerProps> = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [tableRows, setTableRows] = useState<number>(8); 
  
  const handleMemberControlClick = (value: MemberTypes, type: MemberMenuControlType) => {

  }
  return <Container>
    <MemberManager
      title="Nhóm ..."
      memberList={groupMemberDummy}
      searchValue={searchValue}
      searchPlaceholder='Tìm thành viên ...'
      tableRowShow={tableRows}
      disabledMemberHash={{'1': true, '3': true}}
      onTableRowShowChange={(value) => setTableRows(value)}
      onChangeSearchValue={(value) => setSearchValue(value)}
      onMemberMenuControlItemClick={handleMemberControlClick}
    />
  </Container>
}

export default MemberManagerContainer;