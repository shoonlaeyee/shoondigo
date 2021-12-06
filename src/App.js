import { useEffect, useLayoutEffect, useState } from "react";
import "./App.scss";

function App() {
  const [works, setWorks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState(null);
  const [toggleButton, setToggleButton] = useState(false);
  const [gridColumn, setGridColumn] = useState(
    window.innerWidth >= 1024
      ? 4
      : window.innerWidth >= 768
      ? 3
      : window.innerWidth >= 480
      ? 2
      : 1
  );

  useLayoutEffect(() => {
    window.addEventListener("resize", (e) =>
      setGridColumn(
        window.innerWidth >= 1024
          ? 4
          : window.innerWidth >= 768
          ? 3
          : window.innerWidth >= 480
          ? 2
          : 1
      )
    );
  });

  useEffect(() => {
    const urlTag = new URLSearchParams(window.location.search).get("tags");
    setFilter(urlTag || "all");
    // fetch Categories
    setCategories([
      { name: "All", slug: "all" },
      { name: "Food & Beverage", slug: "food-and-beverage" },
      { name: "Media", slug: "media" },
      { name: "Transport & Logistics", slug: "transport-and-logistics" },
      { name: "Banking & Finance", slug: "banking-finance" },
      { name: "Lifestyle", slug: "lifestyle" },
      { name: "Co-incubation", slug: "co-incubation" },
      { name: "Healthcare", slug: "healthcare" },
      { name: "Retail & Entertainment", slug: "retail-and-entertainment" },
      { name: "Telco", slug: "telco" },
      { name: "Others", slug: "others" },
      { name: "Start-ups", slug: "start-ups" },
    ]);
    setWorks([
      {
        name: "OCBC Pay Anyone",
        slug: "ocbc-pay-anyone",
        text_colour: "",
        grid_size: 0.5,
        description:
          "You can now pay kopitiam uncles, merchants, peers, and dears with the OCBC Pay Anyone app, and you can even withdraw cash by scanning the QR code at OCBC’s ATMs without your card!",
        categories: [
          {
            term_id: 35,
            name: "Banking & Finance",
            slug: "banking-finance",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2021/04/PAO-0@2x.jpg",
          retina: "https://cdn.codigo.co/uploads/2021/04/PAO-0@2x.jpg",
        },
      },
      {
        name: "Ecolab",
        slug: "ecolab",
        text_colour: "",
        grid_size: 0.25,
        description:
          "Leads generation iPad app that sales representatives use when conducting surveys at customer’s restaurants.\r\n\r\nBased on the environment and survey results, the pad will recommend suitable cleaning products that customers can use, and the potential savings it comes with it! Results are nicely formatted into a PDF that gets sent to the customer’s inbox with a direct link to purchase products recommended.",
        categories: [
          {
            term_id: 29,
            name: "Others",
            slug: "others",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2021/04/ECO-0@2x.jpg",
          retina: "https://cdn.codigo.co/uploads/2021/04/ECO-0@2x.jpg",
        },
      },
      {
        name: "KIWI Auto Marketplace",
        slug: "kiwi",
        text_colour: "",
        grid_size: 0.25,
        description:
          "Myanmar newest 2nd hand car buying, bidding and selling marketplace! You can even add an insurance plan when you buy a car and have the platform settle all the mundane paperwork while you sit back and collect your car when it’s ready.",
        categories: [
          {
            term_id: 29,
            name: "Others",
            slug: "others",
          },
          {
            term_id: 30,
            name: "Start-ups",
            slug: "start-ups",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 22,
            name: "web",
            slug: "web",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2021/04/KIWI-0@2x.jpg",
          retina: "https://cdn.codigo.co/uploads/2021/04/KIWI-0@2x.jpg",
        },
      },
      {
        name: "Furama Hotels",
        slug: "furama",
        text_colour: "",
        grid_size: 0.25,
        description:
          "Book, earn, and redeem with the Furama mobile app. Enjoy app-exclusive rates, on top of other discounts and offers. Be a part of the FURAMAfirst membership and earn FURAMAmints with every booking.",
        categories: [
          {
            term_id: 26,
            name: "Lifestyle",
            slug: "lifestyle",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2021/04/FURAMA-0@2x.jpg",
          retina: "https://cdn.codigo.co/uploads/2021/04/FURAMA-0@2x.jpg",
        },
      },
      {
        name: "Woodlands Transport",
        slug: "woodlands-transport",
        text_colour: "",
        grid_size: 0.25,
        description:
          "Full end-to-end digitalization of WTS school bus operations in Singapore. Parents can now sign their kids for bus services via an app and be notified when their kids board and alight the buses. WTS administrators can track where all their buses are, how many children are on the bus, and how timely each stop is! Using Bluetooth technology, schools are able to detect how on time each bus is arriving and departing the schools daily and be able to optimize route planning. There’s even finance, customer service, sub-contractor management module, the list goes on!",
        categories: [
          {
            term_id: 25,
            name: "Transport & Logistics",
            slug: "transport-and-logistics",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 22,
            name: "web",
            slug: "web",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2021/04/WTS-0@2x.jpg",
          retina: "https://cdn.codigo.co/uploads/2021/04/WTS-0@2x.jpg",
        },
      },
      {
        name: "Ready To Travel (SATS)",
        slug: "ready-to-travel",
        text_colour: "#000000",
        grid_size: 0.5,
        description:
          "The best travel app with a collaborative trip planner so that you and your loved ones and friends can plan trips together! Grab travel essentials like Pocket WiFi, Travel Insurance, and instant access to more than 150 airport lounges all over the world. It even comes with a built-in currency converter, weather forecast, and offline mode!",
        categories: [
          {
            term_id: 26,
            name: "Lifestyle",
            slug: "lifestyle",
          },
          {
            term_id: 28,
            name: "Retail & Entertainment",
            slug: "retail-and-entertainment",
          },
          {
            term_id: 30,
            name: "Start-ups",
            slug: "start-ups",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 22,
            name: "web",
            slug: "web",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2021/04/RTT-0@2x.jpg",
          retina: "https://cdn.codigo.co/uploads/2021/04/RTT-0@2x.jpg",
        },
      },
      {
        name: "Yoga Movement",
        slug: "yoga-movement",
        text_colour: "",
        grid_size: 0.5,
        description:
          "Enjoy an integrated online experience with the Yoga Movement App. Purchase class packs and share them with friends and family, book a mat, check in to class, manage your account, get social and so much more!",
        categories: [
          {
            term_id: 26,
            name: "Lifestyle",
            slug: "lifestyle",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 22,
            name: "web",
            slug: "web",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2021/04/YM-0@2x-1.jpg",
          retina: "https://cdn.codigo.co/uploads/2021/04/YM-0@2x-1.jpg",
        },
      },
      {
        name: "Don Don Donki",
        slug: "don-don-donki",
        text_colour: "",
        grid_size: 0.5,
        description:
          "The official DON DON DONKI Membership app not only delivers the latest products and promotions, it will give you a great surprise on your birthday month too! Enjoy hassle-free management of your membership and redeem different coupon every week while earning dMiles every time your shop with Donki.",
        categories: [
          {
            term_id: 28,
            name: "Retail & Entertainment",
            slug: "retail-and-entertainment",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2021/04/DONKI-0@2x.jpg",
          retina: "https://cdn.codigo.co/uploads/2021/04/DONKI-0@2x.jpg",
        },
      },
      {
        name: "TAP Ride Hailing",
        slug: "tap",
        text_colour: "",
        grid_size: 0.25,
        description:
          "South Korea’s very own ride-hailing platform! Book a car, select a pre-defined pickup point and relax and wait while your driver zooms to you. Save your own favorites, and share your driver’s location with a friend.",
        categories: [
          {
            term_id: 25,
            name: "Transport & Logistics",
            slug: "transport-and-logistics",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2021/04/TAP-0@2x.jpg",
          retina: "https://cdn.codigo.co/uploads/2021/04/TAP-0@2x.jpg",
        },
      },
      {
        name: "FWD Insurance",
        slug: "fwd-sg",
        text_colour: "",
        grid_size: 0.5,
        description:
          "Bet you didn’t know that you can see a doctor while traveling overseas via FWD’s telemedicine service within the app? Now you do! You can even take a photo of your receipts and documents for hassle-free claims. Find the nearest workshop if your car has issues, and find the nearest clinic when you are not feeling well.",
        categories: [
          {
            term_id: 29,
            name: "Others",
            slug: "others",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2021/04/FWD-0@2x.jpg",
          retina: "https://cdn.codigo.co/uploads/2021/04/FWD-0@2x.jpg",
        },
      },
      {
        name: "HBO GO",
        slug: "hbo-go-2",
        text_colour: "",
        grid_size: 0.5,
        description:
          "Get unlimited access to all of HBO, Hollywood blockbusters, and more right here on HBO GO. With new episodes and movies added weekly, you will never run out of shows to watch! Binge all HBO shows with new Original series released at the same time as the U.S.",
        categories: [
          {
            term_id: 28,
            name: "Retail & Entertainment",
            slug: "retail-and-entertainment",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2021/04/HBO-0@2x-2.jpg",
          retina: "https://cdn.codigo.co/uploads/2021/04/HBO-0@2x-2.jpg",
        },
      },
      {
        name: "Isetan",
        slug: "isetan",
        text_colour: "",
        grid_size: 0.25,
        description:
          "Be engaged exclusively with Isetan Singapore’s privilege membership APP! You can update your personal profile, check point balances and redeem vouchers immediately.",
        categories: [
          {
            term_id: 28,
            name: "Retail & Entertainment",
            slug: "retail-and-entertainment",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2021/04/ISETAN-0@2x.jpg",
          retina: "https://cdn.codigo.co/uploads/2021/04/ISETAN-0@2x.jpg",
        },
      },
      {
        name: "MyRepublic Mobile",
        slug: "myrepublic",
        text_colour: "#ffffff",
        grid_size: 0.25,
        description:
          "Joining MyRepublic in the move to be the 6th telco provider in Singapore, Codigo designed MyRepublic first self-help mobile app for their new mobile customers to allow ease and flexibility in managing their mobile plans.\r\n\r\nBoost data, switch plans, pay bills and more with a mere tap of your finger. At rocket speed.",
        categories: [
          {
            term_id: 38,
            name: "Telco",
            slug: "telco",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2018/12/MYR.jpg",
          retina: "https://cdn.codigo.co/uploads/2018/12/MYR.jpg",
        },
      },
      {
        name: "ComfortDelGro",
        slug: "comfortdelgro",
        text_colour: "#000000",
        grid_size: 0.25,
        description:
          "ComfortDelGro (CDG) and Codigo (CDG) has been working closely since the relaunch of the ride-booking mobile app in 2014 to create and constantly improving the ComfortDelGro Taxi Booking mobile app.\r\n\r\nProviding everyday riders with a modern, easy-to-use and highly personalised user interface integrated with intuitive location finding for precise pick-up and drop-off points, CabRewards and street hail payment - all packed in one award-winning mobile experience as voted by travellers for the TripAdvisor Travellers’ Choice Awards.",
        categories: [
          {
            term_id: 25,
            name: "Transport & Logistics",
            slug: "transport-and-logistics",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2018/08/CDG-2-1.jpg",
          retina: "https://cdn.codigo.co/uploads/2018/08/CDG-2-1.jpg",
        },
      },
      {
        name: "7Rewards",
        slug: "7-eleven",
        text_colour: "",
        grid_size: 0.5,
        description:
          "Convenience now comes with a side of rewards.\r\n\r\nThe 7Rewards mobile app is a delightful and effortless experience for all loyal 7-Eleven customers. Implemented islandwide and fully integrated with every point-of-sale system, all customers can simply scan their unique member barcode after every purchase and receive stamps that can be used to redeem any rewards of their choice.\r\n\r\nPowered by a custom-made CMS, 7-Eleven can track and monitor their customers' purchasing and redemption behaviours to craft more palatable and desirable promotional campaigns or even conduct market surveys on new products before public launches all via a comprehensive dashboard.",
        categories: [
          {
            term_id: 28,
            name: "Retail & Entertainment",
            slug: "retail-and-entertainment",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 22,
            name: "web",
            slug: "web",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2018/04/711.jpg",
          retina: "https://cdn.codigo.co/uploads/2018/04/711.jpg",
        },
      },
      {
        name: "FairPrice Online",
        slug: "fairprice-online",
        text_colour: "#ffffff",
        grid_size: 0.5,
        description:
          "Creating a refreshed, modernized and user-friendly online experience for one of our local retail giant - FairPrice. Nothing excites us more than a chance to apply what we do best to a platform we ourselves use regularly, in this case, buying groceries online.\r\n\r\nOne of Codigo’s most intense UX/UI design project that took us more than 4 months to create an experience true to the brand yet as simple to use like any other online retail platforms. As a result, a complete facelift to the brand’s online presence and a familiar sense of pride as the grocer all Singaporeans grew up with.",
        categories: [
          {
            term_id: 28,
            name: "Retail & Entertainment",
            slug: "retail-and-entertainment",
          },
        ],
        roles: [
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2018/08/FPOL.jpg",
          retina: "https://cdn.codigo.co/uploads/2018/08/FPOL.jpg",
        },
      },
      {
        name: "Charles & Keith / Pedro",
        slug: "charles-keith-pedro",
        text_colour: "#0a0a0a",
        grid_size: 0.5,
        description:
          "These shoes are meant for walking and these apps are meant for buying. Working hand-in-hand with Charles & Keith and Pedro, Codigo built both brands' e-commerce mobile apps, fully integrated with the existing backend and inventory system. Now, their customers can shop and bag all latest arrivals or best deals anytime, anywhere.",
        categories: [
          {
            term_id: 28,
            name: "Retail & Entertainment",
            slug: "retail-and-entertainment",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2018/12/ck.jpg",
          retina: "https://cdn.codigo.co/uploads/2018/12/ck.jpg",
        },
      },
      {
        name: "Justice League",
        slug: "justice-league-join-the-league",
        text_colour: "",
        grid_size: 0.5,
        description:
          'Complementing the DC blockbuster launch in Asia Pacific, in partnership with Pacific Licensing and Warner Brothers, Codigo built an one-of-a-kind AR mobile experience which invited all DC fans to pitch their skills and complete the challenges initiated by the members of the Justice League to prove their worth to join the league. 6 different challenges to be completed in the real world with their mobile devices, fans fought parademons, commanded the power of the oceans and even snapped selfies with their favourite DC heroes.\r\n\r\nWatch video <a href="https://www.facebook.com/vivocity.sg/videos/vb.214794482597/10156746993592598/?type=2&theater" target="_blank" rel="noopener">here</a>',
        categories: [
          {
            term_id: 28,
            name: "Retail & Entertainment",
            slug: "retail-and-entertainment",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
        ],
        images: {
          normal:
            "https://cdn.codigo.co/uploads/2018/11/thumbnail-justice_league@2x.jpg",
          retina:
            "https://cdn.codigo.co/uploads/2018/11/thumbnail-justice_league@2x.jpg",
        },
      },
      {
        name: "Fullerton Health",
        slug: "fullerton-health",
        text_colour: "",
        grid_size: 0.25,
        description:
          "Working with the leading provider of corporate healthcare solutions across Asia Pacific, Fullerton Health, we’ve refreshed the mobile app that has been a useful tool for all its clients’ workforce. A UI design overhaul that created a strong brand image with all its original functionalities, the app since the re-launched has been downloaded by thousands of Fullerton Health users to aid their medical needs and claim processes.",
        categories: [
          {
            term_id: 37,
            name: "Healthcare",
            slug: "healthcare",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
        ],
        images: {
          normal:
            "https://cdn.codigo.co/uploads/2018/11/fullerton-health-thumbnail@2x.jpg",
          retina:
            "https://cdn.codigo.co/uploads/2018/11/fullerton-health-thumbnail@2x.jpg",
        },
      },
      {
        name: "Sky Premium",
        slug: "skypremium",
        text_colour: "",
        grid_size: 0.25,
        description:
          "Sky Premium International is an exclusive privilege services club catered for a global audience. Codigo was commissioned to develop the UX/UI design for the responsive web platform and the complete mobile app builds. Integrating across multiple sources of promotions, rewards and deals, our job was to ensure a seamless and valuable experience with a premium touch.\r\n",
        categories: [
          {
            term_id: 26,
            name: "Lifestyle",
            slug: "lifestyle",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 22,
            name: "web",
            slug: "web",
          },
        ],
        images: {
          normal:
            "https://cdn.codigo.co/uploads/2018/11/skypremium-thumbnail@2x.jpg",
          retina:
            "https://cdn.codigo.co/uploads/2018/11/skypremium-thumbnail@2x.jpg",
        },
      },
      {
        name: "T Singapore",
        slug: "tsingapore",
        text_colour: "",
        grid_size: 0.5,
        description:
          "Bringing the style from Big Apple to Singapore.\r\n\r\nThe Singapore edition of T: The New York Times Style Magazine was launched in 2017. Designed with an immaculate interface and powered by a robust ad-serving engine, this fully custom-made web experience serves exclusive content from around the world while giving the T-Singapore team the power to create content from bespoke article templates from a simple blog-style entry to a fully-immersive video article with product hotspots.",
        categories: [
          {
            term_id: 26,
            name: "Lifestyle",
            slug: "lifestyle",
          },
        ],
        roles: [
          {
            term_id: 22,
            name: "web",
            slug: "web",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
        ],
        images: {
          normal:
            "https://cdn.codigo.co/uploads/2018/12/TSingapore-thumbnail@2x.jpg",
          retina:
            "https://cdn.codigo.co/uploads/2018/12/TSingapore-thumbnail@2x.jpg",
        },
      },
      {
        name: "SingPost",
        slug: "singpost",
        text_colour: "",
        grid_size: 0.25,
        description:
          "Tracking your parcels has never been easier with the SingPost Mobile and Apple Watch App. Codigo helped integrate SingPost tracking systems and payment so that you can make purchases and keep track of your parcels from your phone or wearable.",
        categories: [
          {
            term_id: 25,
            name: "Transport & Logistics",
            slug: "transport-and-logistics",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 24,
            name: "uiux",
            slug: "uiux",
          },
        ],
        images: {
          normal:
            "https://cdn.codigo.co/uploads/2018/12/singpost-thumbnail@2x.jpg",
          retina:
            "https://cdn.codigo.co/uploads/2018/12/singpost-thumbnail@2x.jpg",
        },
      },
      {
        name: "Dine Inn",
        slug: "dine-inn",
        text_colour: "",
        grid_size: 0.25,
        description:
          "Share a Taste of Home with Dine Inn. Codigo partnered Dine Inn as the technical and design consultant to build a platform that bridges hosts and guests to enjoy good food and good times together. Anyone can simply order home-cooked meals via our mobile apps and responsive website 24/7.\r\n\r\nAn intricate logic is implemented to facilitate and accommodate various service types, booking dates & timings, payment between hosts and guests. A fully customised admin panel is also created for the Dine Inn team to manage hosts, guests and bookings to ensure everyone enjoys a great Dine Inn experience.",
        categories: [
          {
            term_id: 27,
            name: "Co-incubation",
            slug: "co-incubation",
          },
          {
            term_id: 30,
            name: "Start-ups",
            slug: "start-ups",
          },
          {
            term_id: 31,
            name: "Food & Beverage",
            slug: "food-and-beverage",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 22,
            name: "web",
            slug: "web",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2018/12/dineinn.jpg",
          retina: "https://cdn.codigo.co/uploads/2018/12/dineinn.jpg",
        },
      },
      {
        name: "Siemens Engineering",
        slug: "siemens-engineering",
        text_colour: "#ffffff",
        grid_size: 0.25,
        description:
          "Siemens’ first foray into digitialising manual intensive administrative processes for their Engineering department. A fully automated equipment servicing platform that takes care of the entire process from creating a service request, assigning an engineer to generating an invoice - with zero human intervention. Customers may even select their preferred date and time or the earliest available slot for the service and be billed to the exact minute of job completion.",
        categories: [
          {
            term_id: 25,
            name: "Transport & Logistics",
            slug: "transport-and-logistics",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 22,
            name: "web",
            slug: "web",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2018/11/siemens.jpg",
          retina: "https://cdn.codigo.co/uploads/2018/11/siemens.jpg",
        },
      },
      {
        name: "FastFast Delivery",
        slug: "fastfast",
        text_colour: "",
        grid_size: 0.5,
        description:
          "Meet FastFast, the Uber of the delivery services in Singapore.\r\n\r\nFounded by Codigo, FastFast is our first foray into the start-up scene. Wholly conceptualised, designed and created by Codigo, FastFast aims to delivery anything (nothing nasty or illegal, of course) from flowers, cakes, documents, forgotten house keys or laptops from anywhere to everywhere in Singapore within 90 minutes.",
        categories: [
          {
            term_id: 25,
            name: "Transport & Logistics",
            slug: "transport-and-logistics",
          },
          {
            term_id: 27,
            name: "Co-incubation",
            slug: "co-incubation",
          },
          {
            term_id: 30,
            name: "Start-ups",
            slug: "start-ups",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 22,
            name: "web",
            slug: "web",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2018/12/FF-1.jpg",
          retina: "https://cdn.codigo.co/uploads/2018/12/FF-1.jpg",
        },
      },
      {
        name: "Singapore Grand Prix",
        slug: "singapore-grand-prix",
        text_colour: "",
        grid_size: 0.25,
        description:
          "Codigo has created an iOS and Android app that allowed fans to interact by racing the Marina Bay circuit to win F1 pit lane passes and driver meet and greets. You can also purchase your tickets in the lead-up to the race. On race weekend, a scheduler provides you with alerts and an interactive map directs you to ensure you catch all the action.",
        categories: [],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
          {
            term_id: 22,
            name: "web",
            slug: "web",
          },
          {
            term_id: 23,
            name: "cms",
            slug: "cms",
          },
        ],
        images: {
          normal: "https://cdn.codigo.co/uploads/2018/12/f1.jpg",
          retina: "https://cdn.codigo.co/uploads/2018/12/f1.jpg",
        },
      },
      {
        name: "McDonald's",
        slug: "mcdonalds",
        text_colour: "",
        grid_size: 0.25,
        description:
          "Get your Big Mac in 3 taps. A total design overhaul on its predecessor, our mission for the McDelivery Singapore mobile app was to create the unstoppable desire in the consumers' hearts to order their favourites from McDonald's in a jiffy. \r\n\r\n<strong>*This version of McDelivery app is no longer in the app store and has been replaced by McDonald's global app. :( </strong>",
        categories: [
          {
            term_id: 31,
            name: "Food & Beverage",
            slug: "food-and-beverage",
          },
        ],
        roles: [
          {
            term_id: 21,
            name: "app",
            slug: "app",
          },
        ],
        images: {
          normal:
            "https://cdn.codigo.co/uploads/2018/12/mc-cafe-thumbnail@2x.jpg",
          retina:
            "https://cdn.codigo.co/uploads/2018/12/mc-cafe-thumbnail@2x.jpg",
        },
      },
    ]);
  }, []);

  const handleCategoryChanged = (c) => {
    setFilter(c.slug);
  };

  const categoriesViews = categories.map((c) => {
    return (
      <div
        onClick={(e) => handleCategoryChanged(c)}
        key={c.slug}
        className="cdo-category-item"
        active={filter === c.slug ? "true" : "false"}
      >
        {c.name}
      </div>
    );
  });
  const worksFiltered = works.filter(
    (v) =>
      filter === "all" ||
      v.categories.findIndex((vv) => vv.slug === filter) > -1
  );
  const worksSorted = worksFiltered.reduce(
    (r, c, i, a) => {
      const R = [...r.R];
      const M = r.M;
      if (M + c.grid_size > 1) {
        const ii = R.findIndex((cc, ii) => ii > i && cc.grid_size === 1 - M);
        if (ii > -1) {
          R[i] = R[ii];
          R[ii] = c;
        }
      }
      const C = R[i];
      const newM = M + C.grid_size >= 1 ? 0 : M + C.grid_size;

      return { R: R, M: newM };
    },
    { R: [...worksFiltered], M: 0 }
  );

  const worksViews = worksSorted.R.map((w) => {
    const image = w.images.normal;
    const gridSize = `auto / span ${Math.floor(w.grid_size * gridColumn)}`;
    const category = w.categories.map((v) => v.name).join(", ");
    const tags = w.roles
      .map((v) => v.slug)
      .map((v) => (
        <div key={v} className="apps-item">
          <img
            src={`/build/codigoo/ico-${v}.svg`}
            alt={v}
            className="apps-item-image"
          />
        </div>
      ));
    return (
      <div
        key={w.slug}
        className="cdo-work-item"
        gs={w.grid_size}
        style={{ gridColumn: gridSize }}
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="transparent-bg"></div>
        <div className="info">
          <div
            className="cdo-work-item-category"
            style={{ color: w.text_colour ? w.text_colour : "white" }}
          >
            {category}
          </div>
          <div
            className="cdo-work-item-name"
            style={{ color: w.text_colour ? w.text_colour : "white" }}
          >
            {w.name}
          </div>
        </div>
        <div className="apps">{tags}</div>
      </div>
    );
  });

  return (
    <div className="">
      <header className="cdo-header">
        <div>
          <img
            src={`/build/codigoo/ui/logo-codigo-red.svg`}
            alt={"codigoo"}
            style={{ width: 160 }}
          />
        </div>
        <div className={`menu-container`} toggle-menu={`${toggleButton}`}>
          <div className="item selected">Work</div>
          <div className="item">Solutions</div>
          <div className="item">Services</div>
          <div className="item">About us</div>
          <div className="item">Blog</div>
          <div className="request-quote-menu">Request a quote</div>
        </div>
        <div
          className={`responsive-toggle ` + (toggleButton ? "change" : "")}
          onClick={(e) => {
            setToggleButton(!toggleButton);
          }}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </header>
      <main className="cdo-work">
        <section className="cdo-work-heading">
          <div className="quote-1">Here's 5% of</div>
          <div className="quote-1">our published work.</div>
          <div className="quote-2">See 100% of our power.</div>
        </section>
        <section className="cdo-work-category">
          <div className="category">{categoriesViews}</div>

          <div className="legend">
            <div className="title">LEGEND</div>
            <div className="container">
              <div className="cdo-legend-item">
                <img
                  src={`/build/codigoo/ico-app.svg`}
                  alt={"app"}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />
                <div>App</div>
              </div>
              <div className="cdo-legend-item">
                <img
                  src={`/build/codigoo/ico-web.svg`}
                  alt={"app"}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />
                <div>WEB</div>
              </div>
              <div className="cdo-legend-item">
                <img
                  src={`/build/codigoo/ico-cms.svg`}
                  alt={"app"}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />
                <div>CMS</div>
              </div>
              <div className="cdo-legend-item">
                <img
                  src={`/build/codigoo/ico-uiux.svg`}
                  alt={"app"}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />
                <div>UI/UX</div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="cdo-work-product"
          style={{
            gridTemplateColumns: new Array(gridColumn).fill("auto").join(" "),
          }}
        >
          {worksViews}
        </section>
        <section className="cdo-work-contact">
          <div className="work-contact-heading">Let's have a chat</div>
          <div className="work-contact-items">
            <div className="contact-item">
              <h2>Build</h2>
              <p>Help you build something</p>
            </div>
            <div className="contact-item">
              <h2>Co-incubate</h2>
              <p>Co-incubate an idea together</p>
            </div>
            <div className="contact-item">
              <h2>Customise</h2>
              <p>Customise a solution for your business</p>
            </div>
            <div className="contact-item">
              <h2>Organise</h2>
              <p>Organise learning sessions with us</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="cdo-footer">
        <div className="footer-icon-container">
          <img
            src="/build/codigoo/icons/social-facebook.svg"
            alt="fb"
            className="social-icon"
          />
          <img
            src="/build/codigoo/icons/social-twitter.svg"
            alt="tw"
            className="social-icon"
          />
          <img
            src="/build/codigoo/icons/social-instagram.svg"
            alt="ig"
            className="social-icon"
          />
          <img
            src="/build/codigoo/icons/social-linkedIn.svg"
            alt="li"
            className="social-icon"
          />
        </div>
        <div className="footer-quote">
          Copyright © Codigo - Mobile App Developer Singapore
        </div>
        <div className="footer-quote">
          +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970
        </div>
      </footer>
    </div>
  );
}

export default App;
