import { useTranslation } from "react-i18next";

export const ButtonLocale = () => {
  const { i18n } = useTranslation();

  const localeChanger = () => {
    if (i18n.language == "en") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <button className="locale-button" type="button" onClick={localeChanger}>
      {i18n.language}
    </button>
  );
};
