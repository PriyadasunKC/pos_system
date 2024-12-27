
import {
  Dashboard as DashboardIcon,
  Inventory as InventoryIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

export const DRAWER_WIDTH = 240;

export const MENU_ITEMS = [
  { id: "dashboard", icon: DashboardIcon, label: "Dashboard" },
  { id: "products", icon: InventoryIcon, label: "Products" },
  { id: "sales", icon: ShoppingCartIcon, label: "Sales" },
  { id: "customers", icon: PeopleIcon, label: "Customers" },
  { id: "settings", icon: SettingsIcon, label: "Settings" },
];
