import BankManagerContainer from '../../containers/BankMangerContainer';

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
