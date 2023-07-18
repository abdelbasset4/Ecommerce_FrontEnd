import Breadcrumb from '../../Components/Dashboard/Breadcrumb.tsx';
import ChartFour from '../../Components/Dashboard/ChartFour';
import ChartOne from '../../Components/Dashboard/ChartOne.tsx';
import ChartThree from '../../Components/Dashboard/ChartThree.tsx';
import ChartTwo from '../../Components/Dashboard/ChartTwo.tsx';

const Chart = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
