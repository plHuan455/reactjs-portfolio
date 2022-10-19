import BankManagerContainer from '../../containers/BankMangerContainer';
import MainLayoutContainer from '../../containers/MainLayoutContainer';

export interface BankManagerProps {
}

 const BankManager = (props: BankManagerProps) => {
  return (
    <div className="p-bankManager">
      <BankManagerContainer />
    </div>
    
  );
}

export default BankManager
