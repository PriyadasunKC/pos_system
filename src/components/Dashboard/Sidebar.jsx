
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import { LogoutOutlined as LogoutIcon } from "@mui/icons-material";
import { DRAWER_WIDTH, MENU_ITEMS } from "../../utils/constants";

const Sidebar = ({ open, activeTab, onTabChange }) => {
  const drawerContent = (
    <>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          POS System
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              selected={activeTab === item.id}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: DRAWER_WIDTH,
        },
      }}
      open={open}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
