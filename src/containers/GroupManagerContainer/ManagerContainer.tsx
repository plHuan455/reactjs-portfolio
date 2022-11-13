import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { groupListDummy } from "~assets/dataDummy/groupDummy";
import GroupManager from "~templates/GroupManager";
import { renderPageUrl } from "../../navigation";

interface ManagerContainerProps { }

const ManagerContainer: React.FC<ManagerContainerProps> = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>('');

  return <GroupManager
    groupList={groupListDummy}
    searchValue={searchValue}
    onChangeSearchValue={(value) => setSearchValue(value)}
    onAddGroupClick={() => navigate(renderPageUrl('GROUP_CREATE'))}
    onGroupCardClick={(slug) => {
      if (slug) navigate(renderPageUrl('GROUP_DETAIL', slug));
    }}
  />
}

export default ManagerContainer;