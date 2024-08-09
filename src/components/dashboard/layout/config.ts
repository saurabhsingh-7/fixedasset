import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Users', href: paths.dashboard.customers, icon: 'users' },
  { key: 'fixedassets', title: 'Fixed Asset Request', href: paths.dashboard.fixedassets, icon: 'plugs-connected' },
  { key: 'assetstransfer', title: 'Asset Transfer', href: paths.dashboard.assetstransfer, icon: 'plugs-connected' },
  { key: 'assetreport', title: 'Asset Report', href: paths.dashboard.assetreport, icon: 'plugs-connected' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
