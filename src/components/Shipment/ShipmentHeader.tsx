import { t } from "i18next";
import "./shipment.styles.scss";
import {
  Localization,
  LocalizationDescriptions,
  dateConvertor,
  timeDifferenceCalculator,
} from "@/utils/helpers";
import { ShipmentProgress } from "./ShipmentProgress";

interface IProps {
  provider?: string;
  currentState?: IState;
  trackingNumber?: string;
  promisedDate?: string | Date;
}

export const ShipmentHeader = ({
  provider,
  currentState,
  trackingNumber,
  promisedDate,
}: IProps) => {
  return (
    <article className="shipment-info">
      <h1>
        {t("shipment.number")} {trackingNumber}
      </h1>
      <h2>
        {t("state.provider")}: {provider}
      </h2>
      <h2 className="shipment-info__status">
        {t(Localization[currentState?.state as keyof typeof Localization])}
      </h2>
      {currentState ? <ShipmentProgress state={currentState.state} /> : null}
      <div className="shipment-info__update">
        <span>
          {t(
            LocalizationDescriptions[
              currentState?.state as keyof typeof LocalizationDescriptions
            ]
          )}{" "}
          {dateConvertor(promisedDate as string)}
        </span>
        <span>
          {t("lastUpdate", {
            count: timeDifferenceCalculator(currentState?.timestamp as string),
          })}
        </span>
      </div>
    </article>
  );
};
