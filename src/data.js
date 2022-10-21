import { GiTicket } from "react-icons/gi";
import { BiMoviePlay } from "react-icons/bi";
import { FaVirus } from "react-icons/fa";
import drinksIco from "./Images/icons/drinks.png";
import popcornIco from "./Images/icons/popcorn.png";
import chipsIco from "./Images/icons/chips.png";
import hotDogIco from "./Images/icons/hotDog.png";
import pizzaIco from "./Images/icons/pizza.png";
import payPalLogo from "./Images/payPal.webp";
import visaLogo from "./Images/visa.webp";
import gPayLogo from "./Images/gPay.webp";
import applePayLogo from "./Images/applePay.webp";

export const cafeOffers = [
  {
    id: 0,
    title: "Popcorn",
    src: `${popcornIco}`,
    desc: "Enjoy a movie with friends with delicious tasting popcorn. Made from corn kernels, it is rich in protein and fibre, apart from being crunchy. There are several flavour options available, and you can choose from butter, tomato chilli, pepper, tandoori, peri-peri, cheese, barbeque, and many other options. Flavours like chocolate, caramel, and mocha walnut can be ideal for someone who has a sweet tooth.",
  },
  {
    id: 1,
    title: "Chips",
    src: `${chipsIco}`,
    desc: "When it comes to movie nights with your sweetheart, solo binge-watch sessions, and game nights with friends, Chips are the best companion that you can buy in CineMania Cafe. Whether you love Bingo, Parle, Kurkure, Lays, Doritos, or the classic Uncle Chipps, your cinema is the best place to find all the varieties of chips.",
  },
  {
    id: 2,
    title: "Hot Dog",
    src: `${hotDogIco}`,
    desc: "Our hot dogs are made from a combination of beef, pork, and chicken. This mix of meats gives the hot dogs a unique flavor that is appealing to many moviegoers. They're salty, slightly greasy, and oh-so-snackable. So, if you're ever in the mood for a hot dog at the cinema, you can rest assured that you're getting a quality product.",
  },
  {
    id: 3,
    title: "Pizza",
    src: `${pizzaIco}`,
    desc: "Eating pizza is more than an obsession, it's a lifestyle. It can either be eaten with or without cutleries, alone or with other foods. You will find one of the world's most popular foods also in CineMania! We have 20 types of pizza for you and your friends. Watch a movie while having a pizza!",
  },
  {
    id: 4,
    title: "Drinks",
    src: `${drinksIco}`,
    desc: "Aerated drinks such as Pepsi, Coca Cola, Thumbs Up, Mirinda, and more not only quench your thirst but also contain a sense of nostalgia. When you hear the pop of a can, you're automatically transported to hot and humid summers of endless fun with your friends. A great variety of drinks waiting for you in CineMania Cafe!",
  },
];

export const ratesTitle = [
  "Never Again",
  "Awful",
  "Bad",
  "Nice Try, But No Cigar",
  "Meh",
  "Not Bad",
  "Good",
  "Very good",
  "Excellent",
  "Masterpiece",
];

export const navbarLinks = [
  { title: "now playing", path: "/" },
  { title: "coming soon", path: "/comingSoon" },
  { title: "unlimited", path: "/unlimited" },
  { title: "gift card", path: "/giftCard" },
  { title: "cinema cafe", path: "/cinema_cafe" },
];

export const FAQsTopics = [
  {
    title: "Tickets",
    ref: "FAQsTickets",
    icon: <GiTicket />,
  },
  {
    title: "Movie",
    ref: "FAQsMovie",
    icon: <BiMoviePlay />,
  },
  {
    title: "COVID-19",
    ref: "FAQsCovid",
    icon: <FaVirus />,
  },
];

export const ticketsAndPricingFaq = [
  {
    question: "Does CineMania offers a student discount?",
    answer:
      "To receive a student discount you must currently be a student. A student discount is available at the box office and student ID must be presented at the time of ticket purchase.",
  },
  {
    question: "Does CineMania have a military discount?",
    answer:
      "To receive a military discount you must be an active or retired military veteran. A military discount is available at the box office and ID must be presented at the time of ticket purchase.",
  },
  {
    question: "Where do I find ticket prices?",
    answer:
      "You can visit our local CineMania to find their specific pricing policy or to locate pricing information on our website. Locate the movie you are inquiring about and click on 'See more'. The page that is presented will provide you with general information about the movie. After clicking 'Book now' you will be able to choose a seat and get pricing information, as well as student and military discount availability.",
  },
  {
    question: "Can I refund my ticket after I make my purchase?",
    answer:
      "Refunds are available in certain limited circumstances described below. Movie tickets purchased through CineMania website include non-refundable convenience fees. Before purchasing, we urge you to confirm the title, time and quantity of tickets for the movie you wish to see. You can receive refunds for tickets up to 60 minutes before the showtime. For purchases made online via CineMania website please follow the refund tickets link on the confirmation email you received or use our Contact Us form on the website. Funds will be returned to the same payment card or gift card used to make the booking, but please note that convenience fees for tickets booked online via CineMania website will not be refunded. For tickets purchased through other ticketing agencies, guests must contact the agency directly before the scheduled movie showtime to request a refund, and refunds are subject to the refund policies of those agencies. There are no refunds after the printed showtime. For extenuating circumstances, please consult cinema management.",
  },
  {
    question: "How do you price your tickets?",
    answer:
      "We want to offer customers a great cinema experience and good value for money. Our prices vary depending on the day and time of the performance, the format of the screening, seating type and from one cinema to another. We regularly review our prices so that we can continue to provide customers with a great choice of films and invest in the latest cinema technology",
  },
  // {
  //   question: "",
  //   answer: "",
  // },
];

export const goingToTheMovieFaq = [
  {
    question: "When I get to the CineMania what should I do?",
    answer: `When you get to the cinema, you can walk directly up to the ticket attendant (i.e. ticket-taker) and scan the QR code on your ticket confirmation page. If you purchased concessions, walk directly up to the concession counter where you see Atom logo and scan your QR code to pick up your concessions. If you can't access your QR code, please provide the ticket attendant with the phone number that was used to complete your order. The cinema employee can access your order by phone number, ticket ID or confirmation number.
`,
  },
  {
    question: "My plans changed - can I refund my order?",
    answer:
      "Refunds are available in certain limited circumstances described below. Movie tickets purchased through CineMania website include non-refundable convenience fees. Before purchasing, we urge you to confirm the title, time and quantity of tickets for the movie you wish to see. You can receive refunds for tickets up to 60 minutes before the showtime. For purchases made online via CineMania website please follow the refund tickets link on the confirmation email you received or use our Contact Us form on the website. Funds will be returned to the same payment card or gift card used to make the booking, but please note that convenience fees for tickets booked online via CineMania website will not be refunded. For tickets purchased through other ticketing agencies, guests must contact the agency directly before the scheduled movie showtime to request a refund, and refunds are subject to the refund policies of those agencies. There are no refunds after the printed showtime. For extenuating circumstances, please consult cinema management.",
  },
  {
    question: "What time does the cinema location open?",
    answer:
      "CineMania has a policy of opening several minutes prior to the first showing of the day to allow sufficient time for our clientele to obtain access to our facilities and to purchase tickets. Cinema Management at their discretion may open the facility earlier in the event they deem such action to be necessary.",
  },
  {
    question: "Are your cinemas wheelchair accessible?",
    answer:
      "We are committed to providing wheelchair access at all of our cinemas where possible. The majority of our cinemas have full or restricted disabled toilets access. In addition we have the following facilities: - Automatic front doors are available at certain cinemas; - Disabled parking spaces and foyer seating are available at certain cinemas ",
  },
  {
    question: "How do I book a wheelchair user ticket?",
    answer:
      "Wheelchair spaces can be booked online. They are marked as such on our seating maps. Alternatively, you can call for assistance. Simply contact our Customer Services team on 0333 003 3444.",
  },
  {
    question: "How do I report lost property?",
    answer:
      "If you lost or left something at your local CineMania, you can enquire either online via Twitter or Facebook, via our Customer Service team on 0333 003 3444 or via email on customer.services@cinemania.com",
  },
  {
    question: "What can I do if I have a complaint?",
    answer:
      "If you are unhappy with any aspect of your ticket booking or visit to one of our cinemas, please get in touch with our Customer Services team by email at customer.services@cinemania.com or call us on 0333 003 3444. We always welcome customer feedback, good or bad, and we aim to resolve customer issues amicably, so it is important that you let our Customer Services team know about your complaint and give us a reasonable opportunity to resolve it. If you are still not happy with how we have handled any complaint, you may want to contact the alternative dispute resolution provider we use. Alternative dispute resolution is a process where an independent body considers the facts of a dispute and seeks to resolve it, without you having to go to court. We will advise you of the name and contact details of the ADR provider at the end of our customer complaints process and whether or not we agree to take part in an ADR process. In addition, please note that disputes may be submitted for online resolution to the European Commission Online Dispute Resolution Portal http://ec.europa.eu/consumers/odr/.",
  },
  {
    question: "Can I bring in my own food and drink?",
    answer:
      "CineMania have a strict no hot food or alcohol policy, and we reserve the right to refuse customers entry into the screens with hot food or alcohol bought outside the premises. All our cinemas display the necessary signage, advising customers of this policy. As a food operator, we offer a wide range of drinks and snacks to satisfy our customers.",
  },
  {
    question: "Is smoking permitted at the cinema?",
    answer:
      "No, customers are not permitted to smoke on the premises of any CineMania cinema. This includes any form of electronic cigarette or other artificial smoking devices. CineMania reserves the right to require any person or customer found to be in contravention of this rule to leave the premises immediately without any entitlement to a refund.",
  },
  {
    question: "How long are adverts and trailers?",
    answer:
      "Ads and trailers normally last between 20-30 minutes before the film begins. We recommend all customers arrive at the cinema 20 minutes ahead of the advertised start time to ensure they have the best possible experience. We also recommend you are promptly seated at the advertised start time to ensure you do not miss the beginning of the film, should adverts be unexpectedly shorter.",
  },
];

export const coronavirusFaq = [
  {
    question: "CinemaSafe",
    answer:
      "CinemaSafe is a program promoting protocols and guidelines developed and supported by leading epidemiologists to support a safe return to movie cinemas. Commissioned by the National Association of Theatre Owners (NATO), this program puts the health and safety of our guests and employees at the center of movie cinema operations across the country. CineMania joins in implementing these expert-backed, industry-specific health and safety protocols.",
  },
  {
    question: "In each Auditorium",
    answer:
      "Auditorium capacities will be reduced where required by state or county mandate.",
  },
  {
    question: "Face Coverings",
    answer:
      "Masks will not be required unless mandated by state and local guidelines. Where masks are mandated, they can be removed only while eating and drinking while seated in an auditorium. Employees monitor auditoriums throughout each performance as a standard practice.",
  },

  {
    question: "Ongoing Actions",
    answer:
      "CineMania continues to work closely with the relevant authorities and safety measures will be constantly monitored and adjusted according to the requirements. We have also reviewed our plans with leading infectious diseases experts, who stated that 'CineMania cinemas' reopening plan is consistent with the safety practices recommended by the Centers for Disease Control for operating public event spaces during the COVID-19 pandemic.'",
  },
  {
    question: "Are the cinema bars open?",
    answer:
      "Yes, the cinema bars are open and the products you buy can be consumed during the movie within the movie hall.",
  },
  {
    question:
      "Will be the COVID Certificate checked before the entrance to the cinema?",
    answer:
      "No, it will not be checked. There is no need in a COVID Certificate before the entrance to the cinema at the moment.",
  },
];

export const unlimitedOffers = [
  {
    title: "Standard \nUnlimited",
    id: 1,
    price: 25,
    benefits: [
      "Watch as many movies as you want, anytime you want.",
      "Free unlimited access to 2D films in standard auditoriums.",
      "Save 10% on all food and non-alcoholic drink purchases.",
      "Celebrate with a free 1x large popcorn and soft drink on your birthday.",
    ],
  },
  {
    title: `Plus \nUnlimited`,
    id: 2,
    price: 35,
    benefits: [
      "Watch as many movies as you want, anytime you want.",
      "Free unlimited access to 2D films in all auditoriums.",
      "Free unlimited access to 3D films in standard auditoriums.",
      "Save 15% on all food and non-alcoholic drink purchases.",
      "Celebrate with a free 2x large popcorn and soft drink on your birthday.",
      "Access to Unlimited screenings, which are previews of upcoming films.",
    ],
  },
  {
    title: "Premium \nUnlimited",
    id: 3,
    price: 40,
    benefits: [
      "Watch as many movies as you want, anytime you want.",
      "Free unlimited access to 2D films in all auditoriums.",
      "Free unlimited access to 3D films in all auditoriums.",
      "Save 25% on all food and non-alcoholic drink purchases.",
      "Celebrate with a free 3x large popcorn and soft drink on your birthday.",
      "Access to Unlimited screenings, which are previews of upcoming films.",
      "Free access to CineMania cinemas across the country.",
    ],
  },
];

export const contactFormIssues = [
  "- Select the issue -",
  "Cinema experience, question or concern",
  "Unlimited Movies Card issues",
  "Gift Cards/Discount Tickets",
  "Privacy Request",
  "Donations",
  "Cinema Cafe",
];

export const contactFormInputs = [
  /* NS - name, surname  */
  {
    title: "customer-name",
    id: "name",
    label: "first name",
    type: "text",
    inputsSection: "NS",
  },
  {
    title: "customer-surname",
    id: "surname",
    label: "last name",
    type: "text",
    inputsSection: "NS",
  },
  /* EEPU - email, email-confirm, phone, unlimited  */
  {
    title: "email",
    id: "email",
    label: "email address",
    type: "text",
    inputsSection: "EEPU",
  },
  {
    title: "email-confirm",
    id: "email-confirm",
    label: "confirm email address",
    type: "text",
    inputsSection: "EEPU",
  },
  {
    title: "phone",
    id: "phone",
    label: "phone number",
    type: "text",
    inputsSection: "EEPU",
  },
  {
    title: "unlimited",
    id: "unlimited",
    label: "unlimited movies card number",
    type: "text",
    inputsSection: "EEPU",
  },
  /* DT - date, time  */
  {
    title: "date",
    id: "date",
    label: "date",
    type: "date",
    inputsSection: "DT",
  },
  {
    title: "time",
    id: "time",
    label: "time",
    type: "time",
    inputsSection: "DT",
  },
];

export const movieScreenings = [
  {
    // Even days
    thriller: ["15:00", "18:00", "20:30", "21:30"],
    action: ["15:00", "17:00", "19:00", "21:00"],
    animation: ["11:00", "12:30", "14:45", "16:20"],
    drama: ["12:30", "15:45", "17:40", "20:00"],
  },
  {
    // Odd days
    thriller: ["16:00", "19:00", "21:30", "22:00"],
    action: ["15:00", "17:30", "18:20", "20:00"],
    animation: ["12:00", "13:30", "15:15", "16:45"],
    drama: ["13:30", "15:00", "18:10", "21:00"],
  },
  // other genres
  ["12:30", "15:45", "17:40", "20:00"],
];

export const movieTickets = [
  { category: "Adult", price: "20" },
  { category: "Child", price: "14" },
  { category: "Senior", price: "12" },
];

export const promoCodes = ["cinemania", "react", "frontend"];

export const paymentMethods = [
  {
    name: "PayPal",
    img: payPalLogo,
    link: "https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fpaypalme&state=%2Fmy%2Fprofile%3Flocale.x%3Den_US%26country.x%3DUS",
  },
  {
    name: "VisaMastercard",
    img: visaLogo,
  },
  {
    name: "GPay",
    img: gPayLogo,
    link: "https://pay.google.com/payments/home?utm_source=googlepay&utm_medium=website&utm_campaign=sign-in",
  },
  {
    name: "APay",
    img: applePayLogo,
    link: "https://secure4.store.apple.com/pl/shop/signIn?ssi=1AAABg_wyNjQgjQ-xOmyWxAFn87Q76pUI48-QxyuXwYzyFNThLL8MT8UAAABIaHR0cHM6Ly93d3cuYXBwbGUuY29tL3BsL2FwcGxlLXBheS98aHR0cHM6Ly93d3cuYXBwbGUuY29tL3BsL2FwcGxlLXBheS98AAIBIBuNSswPpBRq388VSkwBbCeL4ZFy107-L5IdEpSEEcY",
  },
];
