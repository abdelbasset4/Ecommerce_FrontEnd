import CardFour from '../../../Components/Dashboard/CardFour.tsx';
import CardOne from '../../../Components/Dashboard/CardOne.tsx';
import CardThree from '../../../Components/Dashboard/CardThree.tsx';
import CardTwo from '../../../Components/Dashboard/CardTwo.tsx';

import MapOne from '../../../Components/Dashboard/MapOne.tsx';
import TableOne from '../../../Components/Dashboard/TableOne.tsx';

const ECommerce = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">

        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
