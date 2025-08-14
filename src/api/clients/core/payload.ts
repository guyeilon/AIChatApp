export type LoginWithPhoneNumber = Record<
  'first_name' | 'phone_number',
  string
>;

export type VerifyOneTimePassword = Record<'code' | 'uid', string>;

export type VerifyToken = Record<'token', string>;

export type RefreshToken = Record<'refresh', string>;
