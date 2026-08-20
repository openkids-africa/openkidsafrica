export const useSiteHeader = () => {
  const route = useRoute();
  const scrolled = useState("scrolled", () => false);
  const lightText = useState("lightText", () => false);
  const sticky = useState("sticky", () => false);
  const siteHeader = useState<HTMLElement>("siteHeader");

  // write a function to add the ".scrolled" class to the .site-header element when the user scrolls down past the height of the site header element
  // use the "onMounted" lifecycle hook to add an event listener to the window object for the "scroll" event
  // use the "onUnmounted" lifecycle hook to remove the event listener from the window object

  const handleAddClassOnScroll = () => {
    const handleScroll = () => {
      if (!siteHeader.value) return;
      if (window.scrollY > siteHeader.value.offsetHeight) {
        siteHeader.value.classList.add("scrolled");
        scrolled.value = true;
      } else {
        scrolled.value = false;
        siteHeader.value.classList.remove("scrolled");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  };

  const resetHeaderState = (path: string) => {
    if (path == "/") return;
    sticky.value = true;
    lightText.value = false;
  };

  resetHeaderState(route.path);
  watch(
    () => route.path,
    (value) => {
      resetHeaderState(value);
    },
  );

  return {
    scrolled,
    sticky,
    lightText,
    siteHeader,
    handleAddClassOnScroll,
    resetHeaderState,
  };
};
