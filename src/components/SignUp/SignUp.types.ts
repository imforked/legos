export enum SignUpVariant {
  FullName = 'full-name',
  UserName = 'user-name',
  All = 'all',
}

export type SignUpProps = {
  hasRECAPTCHA?: boolean;
  variant?: SignUpVariant;
};
