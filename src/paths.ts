export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    fixedassets : '/dashboard/fixedassets',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
    assetstransfer: '/dashboard/assetstransfer',
    assetreport : '/dashboard/assetreport',
    assetreqreport : '/dashboard/assetreqreport',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
