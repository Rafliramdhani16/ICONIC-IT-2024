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
      <div className="flex flex-col md:flex-row w-full md:w-[80%] items-center justify-center gap-10">
        <div className="flex flex-col items-center text-center md:text-left md:w-1/2">
          <h1 className="text-balance text-3xl leading-loose md:text-5xl md:leading-loose font-bold w-full mb-3 ">
            {heading}
          </h1>
          <p className="text-justify text-lg leading-loose md:text-xl md:leading-loose mb-3 w-[80%] xl:w-full">
            {description}
          </p>
          {buttonText && onButtonClick && (
            <button
              onClick={onButtonClick}
              className="text-lg bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-lg shadow-custom mt-4 xl:w-full md:w-[80%]"
            >
              {buttonText}
            </button>
          )}
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center mt-8 md:mt-0">
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
