import NewsLatterBox from "./NewsLetterForm";

const ContactForm = () => {
    return (
      <div className="pt-10 px-10">
        <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="wow fadeInUp shadow-three mb-12 rounded-sm bg-zinc-700 px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-cyan-400 sm:text-3xl lg:text-2xl xl:text-3xl">
                  Need Assistance? Submit a Support Ticket
                </h2>
                <p className="mb-12 text-base font-medium text-body-color text-cyan-200">
                  Questions or concerns? Reach out to us by submitting a support ticket, and we'll be happy to help!
                </p>
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="fname"
                          className="mb-3 block text-sm font-medium text-white"
                        >
                          Your First Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="lname"
                          className="mb-3 block text-sm font-medium text-white"
                        >
                          Your Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your last name"
                          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="phnumber"
                          className="mb-3 block text-sm font-medium text-white"
                        >
                          Your Phone Number
                        </label>
                        <input
                          type="number"
                          placeholder="Enter your mobile number"
                          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Enter your Message"
                          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button className="shadow-submit bg-zinc-800 rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-emerald-400">
                        Submit Ticket
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              
            <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  };
  
export default ContactForm;
