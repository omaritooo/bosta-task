import {
  Localization,
  LocalizationDescriptions,
  dateConvertor,
  styling,
  timeDifferenceCalculator,
} from "@/utils/helpers";
import { t } from "i18next";
import { ShipmentProgress } from "./ShipmentProgress";
import "./shipment.styles.scss";

interface IProps {
  data: IData;
}

export const Shipment = ({ data }: IProps) => {
  return (
    <section className="shipment-container">
      <article className="shipment-info">
        <h1>
          {t("shipment.number")} {data?.TrackingNumber}
        </h1>
        <h2>
          {t("state.provider")}: {data?.provider}
        </h2>
        <h2 className="shipment-info__status">
          {t(
            Localization[
              data?.CurrentStatus?.state as keyof typeof Localization
            ]
          )}
        </h2>
        {data?.CurrentStatus ? (
          <ShipmentProgress state={data.CurrentStatus.state} />
        ) : null}
        <div className="shipment-info__update">
          <span className="">
            {t(
              LocalizationDescriptions[
                data?.CurrentStatus
                  ?.state as keyof typeof LocalizationDescriptions
              ]
            )}{" "}
            <span
              className={`${
                styling[data.CurrentStatus.state as keyof typeof styling]
              }`}
            >
              {dateConvertor(data?.PromisedDate as string)}
            </span>
          </span>
          <span>
            {t("lastUpdate", {
              count: timeDifferenceCalculator(
                data?.CurrentStatus?.timestamp as string
              ),
            })}
          </span>
        </div>
      </article>
    </section>
  );
};
