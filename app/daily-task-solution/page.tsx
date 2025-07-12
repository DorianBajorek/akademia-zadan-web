'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import UnderConstruction from '@/components/UnderConstruction';

const DailyTaskSolution: React.FC = () => {
  return (
    <div className="pt-20">
      <Nav />
      <UnderConstruction />
      <Footer />
    </div>
  );
};

export default DailyTaskSolution;
