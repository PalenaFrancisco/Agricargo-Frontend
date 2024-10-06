import { RxCross2 } from "react-icons/rx";
import Button from "../../components/button/Button";
import SortPill from "../../components/sortPill/SortPill";

const SortSection = ({ title, sortOptions = [], filterActivate, resetFilters }) => {
  const options = sortOptions.map(({ label, actionSort }, index) => (
    <SortPill key={index} actionSort={actionSort}>
      {label}
    </SortPill>
  ));

  return (
    <section className="sticky top-28 bg-white flex justify-start border-b-2 w-full pl-20 pt-10 items-center gap-2">
      <div className="mb-8 flex items-center gap-x-6 z-40">
        <h2 className="text-black text-lg font-semibold uppercase">
          {title}
        </h2>
        {options}
        {filterActivate && (
          <Button
            className={"rounded-lg flex items-center p-2 gap-1 m-0 text-sm"}
            actionClick={resetFilters}
          >
            <RxCross2 /> Eliminar Filtro
          </Button>
        )}
      </div>
    </section>
  );
};

export default SortSection;
