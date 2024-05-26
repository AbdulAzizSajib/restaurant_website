const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto my-8 text-center md:w-3/12">
      <p className="font-bold text-yellow-600">{subHeading}</p>
      <h3 className="py-2 my-2 text-4xl font-bold rounded-l-lg rounded-r-lg border-y-4 ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
