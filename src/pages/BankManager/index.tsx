import BankManagerContainer from '../../container/BankMangerContainer';
import MainLayoutContainer from '../../container/MainLayoutContainer';

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
