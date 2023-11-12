import { AxiosPromise } from "axios";

export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */

  interface IState {
    state: string;
    timestamp: string;
    hub?: string;
    reason?: string;
  }
  interface IDay {
    dayDate: string;
    dayName: string;
  }

  interface IData {
    provider: string;
    CurrentStatus: IState;
    PromisedDate: string;
    TrackingNumber: string;
    TrackingURL: string;
    SupportPhoneNumbers: string[];
    TransitEvents: IState[];
    CreateDate: string;
    isEditableShipment: boolean;
    nextWorkingDay: IDay[];
  }
  interface IResponse extends AxiosPromise {
    data: IData;
  }
}
