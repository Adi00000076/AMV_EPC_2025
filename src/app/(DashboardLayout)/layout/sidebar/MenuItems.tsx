import {
  Dashboard as IconLayoutDashboard,
  TextFields as IconTypography,
  ContentCopy as IconCopy,
  Login as IconLogin,
  PersonAdd as IconUserPlus,
  Mood as IconMoodHappy,
  Settings as IconAperture,
  Widgets as IconWidgets,
  ViewQuilt as IconViewQuilt,
} from "@mui/icons-material";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "HOME",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "UTILITIES",
  },


  {
    navlabel: true,
    subheader: "AUTH",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },

  {
    navlabel: true,
    subheader: " EXTRA",
  },
  {
    id: uniqueId(),
    title: "Components",
    icon: IconWidgets,
    href: "/components",
  },

  {
    id: uniqueId(),
    title: "Layout",
    icon: IconViewQuilt,
    href: "/layout",
  },
  {
    id: uniqueId(),
    title: "Sample Page",
    icon: IconAperture,
    href: "/sample-page",
  },

];

export default Menuitems;


