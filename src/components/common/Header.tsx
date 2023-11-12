import { t } from "i18next";
import { IconsLogo } from "../Icons/IconsLogo";
import { ButtonLocale } from "../Button/ButtonLocale";
import { ButtonHamburger } from "../Button/ButtonHamburger";
import { useEffect, useState } from "react";
import { useWindowResize } from "../../hooks/useWindowResize";

const headerTags = [
  {
    name: "header.home",
    href: "#",
  },
  {
    name: "header.prices",
    href: "#",
  },
  {
    name: "header.sales",
    href: "#",
  },
];

const credTags = [
  {
    name: "header.track",
    href: "#",
  },
  {
    name: "header.login",
    href: "#",
  },
];

export const Header = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState<boolean>(false);

  const size = useWindowResize();

  const menuToggle = (e: boolean): void => {
    setHamburgerToggle(e);
  };

  useEffect(() => {
    if (size.width > 768) {
      setHamburgerToggle(true);
    }
  }, [size]);

  return (
    <header className="">
      <nav className="header">
        <div className="header__logo-container">
          <IconsLogo />
          <ButtonHamburger menuToggle={menuToggle} />
        </div>
        {hamburgerToggle ? (
          <>
            <div className="header__container">
              {hamburgerToggle
                ? headerTags.map((el: { name: string; href: string }) => {
                    return (
                      <a href={el.href} key={el.name}>
                        {t(el.name)}
                      </a>
                    );
                  })
                : null}
            </div>
            <div className="header__container">
              {hamburgerToggle
                ? credTags.map((el: { name: string; href: string }) => {
                    return (
                      <a href={el.href} key={el.name}>
                        {t(el.name)}
                      </a>
                    );
                  })
                : null}
              <ButtonLocale />
            </div>
          </>
        ) : null}
      </nav>
    </header>
  );
};
