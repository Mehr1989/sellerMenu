import React from "react";

import { Icon} from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "داشبورد اصلی",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='40px' height='40px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "فروش",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='40px'
        height='40px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "اطلاعات آماری",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='40px' height='40px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "پروفایل",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='40px' height='40px' color='inherit' />,
    component: Profile,
  },
  {
    name: "ثبت نام",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='40px' height='40px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "داشبورد",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdHome} width='40px' height='40px' color='inherit' />,
    component: RTL,
  },
];

export default routes;
