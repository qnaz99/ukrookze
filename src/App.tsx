import { AppStoreButton } from "./components/AppStoreButton";
import { PlayStoreButton } from "./components/PlayStoreButton";
import Header from "./Header";

const Home = () => {
  return (
    <div className="bg-[#023bb3]">
      <Header />
      <div className="w-full h-[500px] bg-[url('/img/banner.png')] bg-cover bg-center bg-no-repeat animate-fade-up">
        <div className="flex items-center justify-center md:justify-end h-full px-6 md:px-20">
          <div className="bg-black/50 p-6 max-w-lg w-full ">
            <h1 className="text-3xl text-white playball pb-4 animate-fade-up">
              Explore with ease.
            </h1>
            <p className="text-white pb-6 leading-snug">
              Mobility scooter rentals for you to get moving! Rent a scooter
              within minutes.
            </p>
            <button
              type="button"
              className="text-black bg-white hover:bg-gray-100 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="h-12"></div>

      <h1 className="section-title text-center playball text-5xl">
        How it works
      </h1>
      <div className="h-8"></div>

      <div className="flex flex-col md:flex-row gap-6 px-10 h-80 animate-fade-up">
        <div className="flex-1 p-6 bg-[url('/img/downloadapp.jpg')] bg-cover bg-center flex flex-col justify-between">
          <h2 className="text-4xl font-semibold mb-2 text-white playball">
            Download the app
          </h2>
          <div className="w-10 h-[2px] bg-white my-4"></div>
          <p className="text-white mb-4">
            Download our state of the art app, available on both iOS and
            Android!
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center px-4 sm:space-x-4 gap-6 mt-4 w-full">
            <AppStoreButton />
            <PlayStoreButton />
          </div>
        </div>

        <div className="flex-1 p-6 bg-[url('/img/createaccount.png')] bg-cover bg-center">
          <h2 className="text-4xl font-semibold mb-2 text-white playball">
            Create an account
          </h2>
          <div className="w-10 h-[2px] bg-white my-4"></div>
          <p className="text-white">
            Sign up easily and gain access to convenient mobility scooter
            rentals anytime!
          </p>
        </div>

        <div className="flex-1 p-6 bg-[url('/img/scanqr.jpeg')] bg-cover bg-center">
          <h2 className="text-4xl font-semibold mb-2 text-white playball">
            Scan and go!
          </h2>
          <div className="w-10 h-[2px] bg-white my-4"></div>
          <p className="text-white">
            Scan the QR code on any of our scooters in the app to unlock it and
            start moving!
          </p>
        </div>
      </div>

      {/* <h2>Download the app</h2>
      <p>
        Download our state of the art app, available on both iOS and Android!
      </p>

      <button className="app-store-button" />
      <button className="app-store-button" color="neutral" />

      <h2>Create an account</h2>
      <p>
        Sign up easily and gain access to convenient mobility scooter rentals
        anytime!
      </p>

      <h2>Scan and go!</h2>
      <p>
        Scan the QR code on any of our scooters in the app to unlock it and
        start moving!
      </p>

      <img className="about-image" src="/images/art1Avif.avif" alt="" />
      <img className="about-image" src="/images/art2Avif.avif" alt="" />

      <h2>Host a fleet</h2>
      <p>
        Are you interested in hosting a UKrooze scooter fleet at your venue,
        business, or next event? We would love to collaborate with you! Our
        scooters offer a fun and unique experience for your guests, making any
        occasion memorable and more accessible!
      </p>
      <button className="learn-more-button">Learn More</button>

      <img
        className="testimonial-image"
        src="/images/testimony1Avif.avif"
        alt="Bonnie from Boca Raton"
      />
      <p className="testimonial-text">
        "So nice to have scooters available, lugging mine around is impossible.
        This allows me to get out more and feel alive!"
      </p>
      <p className="author-name">Bonnie</p>
      <p className="author-location">Boca Raton</p>

      <img
        className="testimonial-image"
        src="/images/testimony2Avif.avif"
        alt="Chauncy from Del Ray Beach"
      />
      <p className="testimonial-text">
        "What a great program. I don't miss out on anything anymore"
      </p>
      <p className="author-name">Chauncy</p>
      <p className="author-location">Del Ray Beach</p>

      <img
        className="testimonial-image"
        src="/images/testimony3Avif.avif"
        alt="Aya from North Miami Beach"
      />
      <p className="testimonial-text">
        "These should be everywhere! They are Always clean and charged. I love
        knowing they are available to use"
      </p>
      <p className="author-name">Aya</p>
      <p className="author-location">North Miami Beach</p> */}
      <div className="h-64"></div>
    </div>
  );
};

export default Home;
