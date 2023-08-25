export const useSiteNav = () => {
  const links = useState("links", () => [
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Programs",
      path: "/programs",
    },
    {
      name: "News",
      path: "/news",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ]);

  const socialLinks = useState("socialLinks", () => [
    {
      name: "Twitter",
      url: "https://www.twitter.com",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com",
    },
  ]);

  return {
    links,
    socialLinks,
  };
};
