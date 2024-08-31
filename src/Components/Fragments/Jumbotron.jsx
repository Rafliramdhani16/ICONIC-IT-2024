import React from "react";

const Jumbotron = ({
  heading,
  description,
  buttonText,
  imgSrc,
  onButtonClick,
  imgWidth = "w-full",
  imgHeight = "h-auto",
}) => {
  return (
    <div
      className="relative rounded-lg text-slate-900 flex flex-col items-center justify-center h-screen my-[50px] bg-cover"
      style={{ backgroundImage: 'url("/bg-jumbo2.svg")' }}
    >
      <div className="flex flex-col xl:flex-row w-full xl:w-[80%] items-center justify-center gap-10">
        <div className="flex flex-col items-center text-center xl:text-left xl:w-1/2">
          <h1 className="text-balance text-3xl leading-loose xl:text-5xl xl:leading-loose font-bold w-full mb-3 ">
            {heading}
          </h1>
          <p className="text-justify text-md leading-loose xl:text-xl xl:leading-loose mb-3 w-[90%] xl:w-full">
            {description}
          </p>
          {buttonText && onButtonClick && (
            <button
              onClick={onButtonClick}
              className="text-sm xl:text-lg bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-10 xl:px-20 rounded-lg shadow-custom mt-4 xl:w-full w-[90%]"
            >
              {buttonText}
            </button>
          )}
        </div>
        <div className="hidden xl:flex xl:w-1/2 justify-center mt-8 xl:mt-0">
          <img
            src={imgSrc}
            alt="Jumbotron"
            className={`${imgWidth} ${imgHeight}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
