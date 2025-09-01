export type LibraryData = {
  metaData: MetaData;
  component: React.ReactNode;
}[];

export type MetaData = {
  title: string;
  description?: string;
};
