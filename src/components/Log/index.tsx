import { LogCard } from "./LogCard";
import "./log.styles.scss";

interface IProps {
  data: IData;
}
export const Log = ({ data }: IProps) => {
  return (
    <div className="wrapper">
      <ol className="c-stepper">
        {data.TransitEvents.map((el: IState, idx: number) => {
          return (
            <LogCard
              key={idx}
              state={el.state as string}
              timestamp={el.timestamp as string}
            />
          );
        })}
      </ol>
    </div>
  );
};
