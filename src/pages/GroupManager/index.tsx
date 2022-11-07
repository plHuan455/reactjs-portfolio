import GroupManagerContainer from '../../containers/GroupManagerContainer';

interface GroupManagerProps {}

const GroupManagerPage: React.FC<GroupManagerProps> = (props) => (
  <div className="p-groupManager">
    <GroupManagerContainer />
  </div>
);

export default GroupManagerPage;
