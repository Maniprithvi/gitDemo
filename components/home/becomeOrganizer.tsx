const BecomeOrganizer = () => {
  return (
    <div
      className="aspect-ratio w-full h-[fit-content] sm:h-[fit-content] md:h-[780px] lg:h-[778px] flex flex-col gap-8 justify-center 
        xl:px-24 sm:px-[30px]"
    >
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-[26px] font-bold text-center text-[#910AD0] xl:text=[48px] lg-text-[46px] md:text-[44px] sm:text-[38px]">
          Become an Organizer
        </h2>
        <p className="text-[13px] font-medium text-center text-[#333333] xl:w-[720px] xl:text-[20px] lg-text-[20px] lg-w-[720px] mx-auto md:w-[650px] md:text-[18px] sm:w-[576px] sm:text-[16px]">
          Proudly introducing Maasta, your one-stop platform for hassle-free
          contest and competition management. Create, manage, and track contests
          effortlessly, all in one user-friendly dashboard. Plus, it's free for
          organizers!
        </p>
      </div>
      <div className="w-auto h-[400px] flex flex-col justify-center items-center text-left mx-6 xl:h-[530px] lg:h-[530px] md:h-[430px] sm:h-[420px] rounded-[36px] bg-cover bg-center bg-[url(/images/organizer_bg.png)] xl:flex  xl:mx-24 xl:items-start xl:justify-center lg:items-center lg:justidy-center lg:mx-12 md:mx-10  md:items-center sm:flex sm:justify-center sm:items-center xs:items-center lg:gap-8 lg:p-14 md:gap-4 md:p-12 sm:px-12 xs:px-12 xxs:px-8">
        <div className="text-md lg:w-[40%] h-auto gap-8 flex flex-col items-start justify-center md:justify-center sm:items:center xl:gap-16 lg:gap-12 md:gap-10 sm:gap-10 xs:gap-6 xxs:gap-4 xl:p-12 sm:p-5">
          <h1 className="text-4xl xl:text-[56px] lg:text-[66px] md:text-[64px] sm:text-[56px] text-white font-bold">
            Share
          </h1>
          <h1 className="text-4xl xl:text-[56px] lg:text-[66px] md:text-[64px] sm:text-[56px] text-white font-bold">
            Spread
          </h1>
          <div className="flex flex-row items-start justify-start gap-4">
            <h1 className="text-4xl xl:text-[56px] lg:text-[66px] md:text-[64px] sm:text-[56px] text-white font-bold">
              Enjoy
            </h1>
            <img
              src="/icons/Organize_HeartIcon.svg"
              alt="heart"
              width={48}
              height={40}
              className="mt-1 w-[36px] h-[28px] xl:w-[48px] xl:h-[40px] lg-w-[48px] lg:h-[40px] md-w-[48px] md:h-[40px]  sm-w-[40px] sm:h-[32px]"
            />
          </div>
          <button
            className={
              "w-auto h-auto text-center text-white text-[16px] rounded-[16px] sm:rounded-[16px] px-3 xl:mr-auto lg:mr-auto lg:text-[22px] md:text-[20px] sm:text-[18px] font-bold xl:px-6 lg:px-10 md:px-10 sm:px-10 py-4 bg-gradient-to-t from-[#FF8725] to-[#FF5C00]"
            }
          >
            Click here to join
          </button>
        </div>
      </div>
    </div>
  );
};

export default BecomeOrganizer;
