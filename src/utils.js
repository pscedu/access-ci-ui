import { render } from "preact";
import { useEffect, useState } from "preact/hooks";

export const getMode = (breakpoint = 900) =>
  document.body.clientWidth >= breakpoint ? "desktop" : "mobile";

export const useMode = (breakpoint = 900) => {
  const [mode, setMode] = useState(getMode(breakpoint));
  useEffect(() => {
    window.addEventListener("resize", () => setMode(getMode(breakpoint)));
  }, []);
  return mode;
};

export const renderShadow = (content, target) => {
  const shadow = target.attachShadow({ mode: "open" });
  render(content, shadow);
};

export const getScrollTop = () =>
  window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;

export const useJSON = (uri, defaultValue, prop) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    if (uri)
      (async () => {
        const res = await fetch(uri);
        const data = await res.json();
        setValue(prop ? data[prop] : data);
      })();
  }, []);
  return value;
};

export const sortOn = (prop) => (a, b) => a[prop] < b[prop] ? -1 : 1;
