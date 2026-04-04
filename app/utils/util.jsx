export const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (element) {
    const yOffset = -80; // navbar height
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};