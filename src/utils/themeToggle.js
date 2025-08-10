export const themeToggler = () => {
  const root = document.documentElement;
  const isLight = root.classList.contains("light");

  if (isLight) {
    root.classList.remove("light");
    localStorage.theme = "dark";
  } else {
    root.classList.add("light");
    localStorage.theme = "light";
  }
};

export const applyStoredTheme = () => {
  const root = document.documentElement;
  const savedTheme = localStorage.theme;

  if (savedTheme === "light") {
    root.classList.add("light");
  } else {
    root.classList.remove("light");
  }
};
