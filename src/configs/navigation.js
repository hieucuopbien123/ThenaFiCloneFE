const { lazy } = require("react");

const routes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("src/pages/HomePage")),
  },
  {
    path: "/swap",
    exact: true,
    component: lazy(() => import("src/pages/SwapPage")),
  },
  {
    path: "/liquidity",
    exact: true,
    component: lazy(() => import("src/pages/LiquidityPage")),
  },
  {
    path: "/lock",
    exact: true,
    component: lazy(() => import("src/pages/LockPage")),
  },
  {
    path: "/vote",
    exact: true,
    component: lazy(() => import("src/pages/VotePage")),
  },
  {
    path: "/rewards",
    exact: true,
    component: lazy(() => import("src/pages/RewardsPage")),
  },
  {
    path: "/whitelist",
    exact: true,
    component: lazy(() => import("src/pages/GaugesPage")),
  },
  {
    path: "/whitelist/gauge",
    exact: true,
    component: lazy(() => import("src/pages/GaugesPage/Gauge")),
  },
  {
    path: "/whitelist/bribe",
    exact: true,
    component: lazy(() => import("src/pages/GaugesPage/Bribe")),
  },
  {
    path: "/thenft",
    exact: true,
    component: lazy(() => import("src/pages/theNFTPage")),
  },
  {
    path: "/referral",
    exact: true,
    component: lazy(() => import("src/pages/ReferralPage")),
  },
  {
    path: "/airdrop",
    exact: true,
    component: lazy(() => import("src/pages/AirdropPage")),
  },
];

export default routes;
