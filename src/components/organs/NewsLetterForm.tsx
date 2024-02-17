const NewsLatterBox = () => {
  
    return (
      <div className="pt-20">
        <div
        className="wow fadeInUp shadow-three bg-zinc-700 relative z-10 rounded-sm p-8 sm:p-11 lg:p-8 xl:p-11"
        data-wow-delay=".2s"
      >
        <h3 className="mb-4 text-2xl font-bold leading-tight text-violet-500">
          Subscribe for the latest updates
        </h3>
        <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color text-violet-300 border-white ">
          Want to stay in the loop? Join our mailing list for exclusive updates, promotions, and more!
        </p>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border-stroke dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            required
          />
          <input
            type="submit"
            value="Subscribe"
            className="shadow-submit bg-zinc-800 mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-emerald-400"
          />
          <p className="dark:text-body-color-dark text-center text-base leading-relaxed text-body-color">
            Please don’t send any spam mail.
          </p>
        </div>
      </div>
      </div>
    );
  };
  
  export default NewsLatterBox;
