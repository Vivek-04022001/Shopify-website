import ChipTabs from "../Utilities/ChipTabs";
import Cards from "../Utilities/Cards.jsx";
const Offers = () => {
  return (
    <section id="offer">
      <div className="Container">
        <div className="flex flex-col items-center  gap-5 md:gap-10">
          <h2 className="text-xl highlight font-bold">Our Offers</h2> 
          <h2 className="heading heading-md mb-4">
            <span className="highlight">Hurry Up!</span> Don't Miss The
            Opportunity
          </h2>
          <ChipTabs type={'products'}/>
          <Cards type={'products'}/>
        </div>
      </div>
    </section>
  );
};

export default Offers;
