import React from "react";
import { Modal, Typography, Box, Button } from "@mui/material";

function DeleteProductModal({ open, onClose, onSubmit }) {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...modalStyle }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Delete Product
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Are you sure you want to delete this product?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button variant="outlined" sx={{ mr: 2 }} onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ bgcolor: "#E0514F" }}
          >
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

export default DeleteProductModal;
