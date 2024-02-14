import { Footer } from "./footer";
import { Header } from "./header";
import { FooterMenus, Menus } from "./menu";
import { loginMenuItem, myAccessMenuItem, universalMenuItems } from "./items";
import { TableOfContents } from "./table-of-contents";
import { renderShadow } from "./utils";

const footer = (params = {}) => {
  renderShadow(<Footer {...params} />, params.target);
};

const header = (params = {}) => {
  renderShadow(<Header {...params} />, params.target);
};

const universalMenus = ({
  items,
  isLoggedIn,
  loginUrl,
  logoutUrl,
  target,
} = {}) => {
  if (isLoggedIn === undefined)
    isLoggedIn = document.cookie.split("; ").includes("SESSaccesscisso=1");

  if (items === undefined) {
    const lastItem = { ...(isLoggedIn ? myAccessMenuItem : loginMenuItem) };
    lastItem.items = lastItem.items.map((item) => ({
      ...item,
      href:
        (item.name == "Login" && loginUrl) ||
        (item.name == "Log out" && logoutUrl) ||
        item.href,
    }));

    items = [...universalMenuItems, lastItem];
  }

  renderShadow(
    <Menus
      classes="universal"
      items={items}
      name="ACCESS Menu"
      target={target}
    />,
    target
  );
};

const siteMenus = ({ items, siteName, target }) =>
  renderShadow(
    <Menus
      classes="site"
      items={items}
      name={`${siteName} Menu`}
      target={target}
    />,
    target
  );

const footerMenus = ({ items, target }) =>
  renderShadow(<FooterMenus items={items} />, target);

const tableOfContents = ({ headings = [], target }) =>
  renderShadow(<TableOfContents headings={headings} />, target);

export {
  footer,
  header,
  footerMenus,
  loginMenuItem,
  myAccessMenuItem,
  siteMenus,
  tableOfContents,
  universalMenuItems,
  universalMenus,
};
