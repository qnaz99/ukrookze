import Header from "../components/Header";
import { Footer } from "../components/Footer";

const HostFleet = () => {
  return (
    <div>
      <Header />
      {/* <div className="h-12"></div> */}
      <div className="p-12 flex">
        <div className="bg-[#d9aa1e] rounded-3xl ">
          <h1 className="section-title text-center playball text-5xl animate-fade-up pt-10">
            Get in touch
          </h1>
          <p className="p-8 text-xl">
            Are you interested in hosting a UKrooze scooter fleet at your venue,
            business, or next event? We would love to collaborate with you! Our
            scooters offer a fun and unique experience for your guests, making
            any occasion memorable and more accessible!
          </p>
          <div className="h-128 bg-[#2166fc] w-5/12 rounded-3xl mx-auto mb-10">
            <form>
              <div className="flex pt-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="text-center bg-white w-5/12 max-w-md py-2 rounded mx-auto block"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-white w-5/12 max-w-md py-2 mx-auto rounded text-center block"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="text-center bg-white p-2 block rounded mx-auto block w-11/12 mt-4 "
              />
              <input
                type="texta"
                placeholder="Message"
                className="text-center bg-white p-2 block rounded mx-auto block w-11/12 mt-4 py-20 "
              />
              <button
                type="button"
                className="bg-white hover:bg-black-100 focus:outline-none font-medium rounded-full text-sm px-5 py-4 text-center ml-auto mt-4 block mx-auto"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HostFleet;
