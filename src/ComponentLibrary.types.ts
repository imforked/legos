export type LibraryData = {
  metaData: MetaData;
  component: React.ReactElement;
}[];

export type MetaData = {
  title: string;
  description?: string;
};
