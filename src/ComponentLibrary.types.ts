import { ReactNode } from "react";

export type LibraryData = {
  metaData: MetaData;
  component: () => ReactNode;
}[];

export type MetaData = {
  title: string;
  description?: string;
};
