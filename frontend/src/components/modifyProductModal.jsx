import React, { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Modal,
  TextField,
  MenuItem,
  FormControlLabel,
  Switch,
} from "@mui/material";

function AddProductModal({ open, onClose, onSubmit, product }) {
  console.log("product --> ", product);
  const [productData, setProductData] = useState({
    name: product?.name || "",
    price: product?.price || "",
    rating: product?.rating || "",
    warranty_years: product?.warranty_years || "",
    type: product?.type || "phone",
    available: product?.available || true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleToggleAvailable = () => {
    setProductData({ ...productData, available: !productData.available });
  };

  const handleSubmit = () => {
    onSubmit(productData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...modalStyle }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Update Product
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={productData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ ...inputStyle }}
          variant="standard"
        />
        <TextField
          label="Type"
          fullWidth
          name="type"
          value={productData.type}
          onChange={handleChange}
          margin="normal"
          variant="standard"
          select
          sx={{ ...inputStyle }}
        >
          <MenuItem value="phone">Phone</MenuItem>
          <MenuItem value="laptop">Laptop</MenuItem>
          <MenuItem value="tablet">Tablet</MenuItem>
        </TextField>
        <TextField
          label="Price"
          name="price"
          type="number"
          value={productData.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ ...inputStyle }}
          variant="standard"
        />
        <TextField
          label="Rating"
          name="rating"
          type="number"
          inputProps={{ min: 1, max: 5 }}
          value={productData.rating}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ ...inputStyle }}
          variant="standard"
        />
        <TextField
          label="Warranty (years)"
          name="warranty_years"
          type="number"
          value={productData.warranty_years}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ ...inputStyle }}
          variant="standard"
        />
        <FormControlLabel
          control={
            <Switch
              checked={productData.available}
              onChange={handleToggleAvailable}
            />
          }
          label="Available"
          sx={{ mt: 2 }}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button variant="outlined" sx={{ mr: 2 }} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "1rem",
  p: 4,
  width: 400,
};

const inputStyle = {
  padding: "2px 0px",
};

export default AddProductModal;
