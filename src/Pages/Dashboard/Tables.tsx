import Breadcrumb from '../../Components/Dashboard/Breadcrumb';
import TableOne from '../../Components/Dashboard/TableOne';
import TableThree from '../../Components/Dashboard/TableThree';
import TableTwo from '../../Components/Dashboard/TableTwo';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </>
  );
};

export default Tables;
