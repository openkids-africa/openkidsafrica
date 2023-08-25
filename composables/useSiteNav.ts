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

  return {
    links,
  };
};
