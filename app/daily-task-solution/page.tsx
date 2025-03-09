"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

const DailyTaskSolution: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Nav />
      <UnderConstruction />
      <Footer />
    </div>
  );
};

export default DailyTaskSolution;
