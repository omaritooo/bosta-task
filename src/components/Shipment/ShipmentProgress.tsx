const bars = {
  DELIVERED_TO_SENDER: { length: 1, colour: "progress__step-warning" },
  DELIVERED: { length: 2, colour: "progress__step-success" },
  CANCELLED: { length: 0, colour: "progress__step-danger" },
};

export const ShipmentProgress = ({ state }: { state: string }) => {
  const tracker = bars[state as keyof typeof bars];

  const Progress = [];

  for (let i = 0; i < 3; i++) {
    if (i <= tracker.length) {
      Progress.push(<div className={`progress__step ${tracker.colour}`}></div>);
    } else {
      Progress.push(
        <div
          className={`progress__step ${tracker.colour} progress__step-selected`}
        ></div>
      );
    }
  }

  return <div className="progress__wrapper">{Progress}</div>;
};
