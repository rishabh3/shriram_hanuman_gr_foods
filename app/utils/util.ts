export const scrollToSection = (id: string): undefined => {
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

export function getImagePath(filePath: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const cleanBase = basePath.replace(/\/$/, "");   // remove trailing /
  const cleanPath = filePath.replace(/^\/+/, "");  // remove leading /

  return `${cleanBase}/${cleanPath}`;
}