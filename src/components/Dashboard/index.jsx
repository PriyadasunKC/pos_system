
import { useState } from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
} from "@mui/icons-material";

import { Main } from "../../styles/dashboardStyles";
import { DRAWER_WIDTH } from "../../utils/constants";
import Sidebar from "./Sidebar";
import DashboardStats from "./DashboardStats";
import ProductTable from "./ProductTable";
import AddProductDialog from "./AddProductDialog";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [openAddProduct, setOpenAddProduct] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleAddProduct = (product) => {
    // Add product logic here
    console.log("Adding product:", product);
    setOpenAddProduct(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </Typography>
          <TextField
            size="small"
            placeholder="Search..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              mr: 2,
              backgroundColor: "white",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          {activeTab === "products" && (
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setOpenAddProduct(true)}
            >
              Add Product
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Sidebar open={open} activeTab={activeTab} onTabChange={setActiveTab} />

      <Main open={open}>
        <Toolbar />
        <Box sx={{ p: 3 }}>
          {activeTab === "dashboard" && <DashboardStats />}
          {activeTab === "products" && <ProductTable />}
        </Box>
      </Main>

      <AddProductDialog
        open={openAddProduct}
        onClose={() => setOpenAddProduct(false)}
        onAdd={handleAddProduct}
      />
    </Box>
  );
};

export default Dashboard;
