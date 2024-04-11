import {SideMenuTypes} from "@/utils/types";
import {Bell, Home, MonitorDot, LineChart, Package, Package2, ShoppingCart, Users} from "lucide-react";

export const SIDE_MENU : SideMenuTypes [] = [
  {label: "Dashboard", icon: Home, to: "/dashboard"},
  {label: "Dns", icon: MonitorDot, to: "/dns"}
]