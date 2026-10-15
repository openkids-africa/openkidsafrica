import site from "~/content/site.json";

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
          name: "AI for All",
          path: "/programs/ai-for-all",
        },
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

  /* The social media links live in content/site.json. */
  const socialLinks = useState("socialLinks", () => site.socialLinks.links);

  return {
    links,
    socialLinks,
  };
};
