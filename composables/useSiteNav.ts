export const useSiteNav = () => {
  const links = useState("links", () => [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
      subLinks: [
        {
          name: "About Us",
          path: "/about",
        },
        {
          name: "Our Team",
          path: "/about/team",
        },
      ],
    },
    {
      name: "Programs",
      path: "/programs",
      subLinks: [
        {
          name: "Kids Program",
          path: "/programs/kids",
        },
        {
          name: "Educators Program",
          path: "/programs/educators",
        },
      ],
    },
    {
      name: "News",
      path: "/news",
    },

    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Donate",
      path: "/donate",
    },
  ]);

  const socialLinks = useState("socialLinks", () => [
    {
      name: "Twitter",
      url: "https://twitter.com/openkidsafrica",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/openkidsafrica/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/openkidsafrica/",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@openkidsafrica",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/openkidsafrica",
    },
  ]);

  return {
    links,
    socialLinks,
  };
};
