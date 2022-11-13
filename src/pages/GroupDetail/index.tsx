import GroupDetailContainer from '../../containers/GroupDetailContainer';

interface GroupDetailProps {}

const GroupDetailPage: React.FC<GroupDetailProps> = (props) => (
  <div className="p-groupDetail">
    <GroupDetailContainer />
  </div>
);

export default GroupDetailPage;
