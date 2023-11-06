export const useSiteNav = () => {
  const links = useState("links", () => [
    {
      name: "Home",
      path: "/",
    },
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
      name: "Donate",
      path: "/donate",
    },
    {
      name: "Contact",
      path: "/contact",
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
