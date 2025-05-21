import { FAQItem } from "../components";

export const faqs: FAQItem[] = [
  {
    question: "Are the scooters in good condition?",
    answer: (
      <>
        Each <em>"U Krooze"</em> rental station and its vehicles are carefully
        maintained to ensure they are clean, fully charged, and safe for use.
        Our technicians are readily available to address any mechanical issues
        or replace a unit in the event a customer experiences difficulty.
      </>
    ),
  },
  {
    question:
      "Is this mobility scooter rental the same as a medical scooter or ECV rental, and where can I use it?",
    answer: (
      <>
        Yes, the terms <strong>mobility scooter</strong>,{" "}
        <strong>medical scooter</strong>, and <strong>ECV</strong> all refer to
        single-rider electric vehicles designed for individuals with mobility
        needs. These vehicles are classified as Class 2 Medical Devices under
        the ADA and can be used in most public venues—such as sidewalks, malls,
        shopping centers, stores, museums, theme parks, fairs, concerts, and
        movie theaters—subject to manufacturer-approved conditions. Unlike golf
        carts, these scooters are legally allowed in such spaces.
      </>
    ),
  },
  {
    question: "How do I pay for the equipment rental?",
    answer: (
      <>
        U Krooze accepts all major credit cards, including Visa, MasterCard,
        American Express, and Discover. Simply download the U Krooze app, create
        an account, scan your scooter, and begin your ride.
      </>
    ),
  },
  {
    question:
      "I am heavier than average. Will the equipment be suitable for my needs?",
    answer: (
      <>
        Yes, U Krooze vehicles are designed to accommodate riders up to{" "}
        <strong>350 lbs</strong> in weight.
      </>
    ),
  },
  {
    question: "Who do I contact if my equipment breaks down?",
    answer: (
      <>
        If you encounter an issue, please contact U Krooze customer support at{" "}
        <strong>(888) 735-3040</strong>.
      </>
    ),
  },
  {
    question: "I was charged incorrectly.",
    answer: (
      <>
        If you believe you were charged incorrectly, please create a support
        ticket via the U Krooze app. You can also email{" "}
        <a href="mailto:support@UKrooze.com">support@UKrooze.com</a> or call{" "}
        <strong>(888) 735-3040</strong>.
      </>
    ),
  },
  {
    question: "I cannot start or end my ride.",
    answer: (
      <>
        If you're having trouble, it could be due to:
        <ul className="pb-2">
          <li> • Bluetooth connection error</li>
          <li> • Loss of app connectivity</li>
          <li> • Being outside the designated return station</li>
          <li> • Network or GPS issues</li>
        </ul>
        Try these steps:
        <ul className="pb-2">
          <li> • Ensure you're at the return station</li>
          <li> • Toggle Wi-Fi off and back on</li>
          <li> • Move the vehicle slightly to reconnect</li>
        </ul>
        Still having issues? Contact support via the app.
      </>
    ),
  },
  {
    question: "I found a bug in the app.",
    answer: (
      <>
        Make sure the app is up to date, close and reopen it, and verify
        Bluetooth is enabled with Wi-Fi off. If the issue persists, send the
        following to our support team:
        <ul>
          <li> • Location of the issue</li>
          <li> • Description and impact</li>
          <li> • Screenshot if possible</li>
        </ul>
        Use the app's support section or email{" "}
        <a className="text-blue-500" href="mailto:support@UKrooze.com">
          support@UKrooze.com
        </a>
        .
      </>
    ),
  },
  {
    question: "Vehicle Issues",
    answer: (
      <>
        If there's a safety issue:
        <ol className="pb-2">
          <li> • Stop using the vehicle immediately and pause the trip.</li>
          <li>
            • Tap the "+" icon on the map to submit a support request with the
            issue and location.
          </li>
        </ol>
        <strong>Option A (Preferred):</strong>
        <ul className="pb-2">
          <li>
            • Take an Uber/Lyft/Taxi back to the rental property with the
            vehicle.
          </li>
          <li> • Help the driver load/unload it safely.</li>
          <li> • Place it in the charging station and end your ride.</li>
          <li>
            • Email{" "}
            <a className="text-blue-500" href="mailto:support@UKrooze.com">
              support@UKrooze.com
            </a>{" "}
            with ride details and receipt for reimbursement.
          </li>
        </ul>
        <strong>Option B:</strong>
        <ul>
          <li> • Park it on the sidewalk without blocking traffic.</li>
          <li> • Secure the vehicle and take photos of its location.</li>
          <li> • Email support with your ride details and photos.</li>
        </ul>
      </>
    ),
  },
  {
    question: "Why can’t I end my ride?",
    answer: (
      <>
        Rides must be ended by returning the vehicle to the property where it
        was rented.
        <br />
        If you're having trouble:
        <ul>
          <li> • Tap the GPS icon to refresh your location</li>
          <li> • Close and relaunch the app</li>
          <li> • Ensure your mobile connection is stable</li>
        </ul>
        If it still doesn’t work:
        <ul>
          <li> • Pause your ride</li>
          <li> • Take a photo of the vehicle at the station</li>
          <li>
            • Contact support via the app or email{" "}
            <a href="mailto:support@UKrooze.com">support@UKrooze.com</a>
          </li>
        </ul>
        <strong>Reminder:</strong> You must return the vehicle to the rental
        station within 24 hours to avoid fees. Lock the scooter at the station
        when finished.
        <br />
        For urgent help, call <strong>(888) 735-3040</strong>.
      </>
    ),
  },
];
