import BankManagerDetailContainer from "../../containers/BankManagerDetailContainer";

interface BankManagerDetailProps {
}
const BankManagerDetail: React.FC<BankManagerDetailProps> = () => {
  return <div className="p-bankManagerDetail">
    <BankManagerDetailContainer />
  </div>
}

export default BankManagerDetail;