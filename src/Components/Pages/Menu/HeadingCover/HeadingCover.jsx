const HeadingCover = ({ img, title, subTitle }) => {
  return (
    <div className="mb-8 ">
      <div
        className="min-h-[680px] hero "
        style={{
          backgroundImage: `url(${img})`,
          //add parallax
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-8/12 bg-black bg-opacity-60 hero-overlay h-3/6"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase ">{title}</h1>
            <p className="mb-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingCover;
