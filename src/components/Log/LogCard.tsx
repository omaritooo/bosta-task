import { clockModifier, dateConvertor } from "@/utils/helpers";
import { t } from "i18next";

import { Localization } from "@/utils/helpers";

export const LogCard = ({ state, timestamp }: IState) => {
  return (
    <li className="stepper__item">
      <div className="stepper__content">
        <h3 className="stepper__title">{dateConvertor(timestamp)}</h3>
        <div className="stepper__desc">
          <span>{t(Localization[state as keyof typeof Localization])}</span>
          <span>{clockModifier(timestamp)}</span>
        </div>
      </div>
    </li>
  );
};
