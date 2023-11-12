export const dateConvertor = (date: string | Date) => {
  const dateObject = new Date(date);

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};

export const timeDifferenceCalculator = (date: string | Date) => {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const differenceInMilliseconds = currentDate.getTime() - targetDate.getTime();

  const differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  return differenceInDays;
};

export const clockModifier = (date: string | Date) => {
  const currentDate = new Date(date);
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  if (hours >= 12) {
    return `${String(hours - 12).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )} PM`;
  }
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )} AM`;
};

export const Localization = {
  TICKET_CREATED: "state.ticket",
  PACKAGE_RECEIVED: "state.package",
  IN_TRANSIT: "state.transit",
  WAITING_FOR_CUSTOMER_ACTION: "state.customer",
  AVAILABLE_FOR_PICKUP: "state.pickup",
  NOT_YET_SHIPPED: "state.shipped",
  OUT_FOR_DELIVERY: "state.delivery",
  DELIVERED_TO_SENDER: "state.delivered",
  DELIVERED: "state.success",
};

export const styling = {
  TICKET_CREATED: "text-primary",
  PACKAGE_RECEIVED: "text-progress",
  IN_TRANSIT: "text-progress",
  WAITING_FOR_CUSTOMER_ACTION: "text-warning",
  AVAILABLE_FOR_PICKUP: "text-progress",
  NOT_YET_SHIPPED: "text-danger",
  OUT_FOR_DELIVERY: "text-progress",
  DELIVERED_TO_SENDER: "text-warning",
  DELIVERED: "text-progress",
};

export const LocalizationDescriptions = {
  DELIVERED_TO_SENDER: "description.sender",
  OUT_FOR_DELIVERY: "description.delivery",
  CANCELLED: "description.cancelled",
  DELIVERED: "description.delivered",
};
