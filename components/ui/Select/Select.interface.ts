import { Dispatch, SetStateAction } from "react";

export interface ISelect {
  items: any[];
  value: any;
  onChange: Dispatch<SetStateAction<any>>;
}
