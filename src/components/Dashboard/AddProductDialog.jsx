import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const AddProductDialog = ({ open, onClose, onAdd }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  const handleChange = (field) => (event) => {
    setProduct({ ...product, [field]: event.target.value });
  };

  const handleSubmit = () => {
    onAdd(product);
    setProduct({ name: "", price: "", category: "", stock: "" });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Product</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Product Name"
          fullWidth
          value={product.name}
          onChange={handleChange("name")}
        />
        <TextField
          margin="dense"
          label="Price"
          type="number"
          fullWidth
          value={product.price}
          onChange={handleChange("price")}
        />
        <TextField
          margin="dense"
          label="Category"
          fullWidth
          value={product.category}
          onChange={handleChange("category")}
        />
        <TextField
          margin="dense"
          label="Stock"
          type="number"
          fullWidth
          value={product.stock}
          onChange={handleChange("stock")}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProductDialog;
