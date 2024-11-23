import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Button, Grid2 } from "@mui/material";
import Chip from "@mui/material/Chip";

function Product({
  name,
  price,
  rating,
  warranty_years,
  type,
  available,
  openModifyModal,
  openDeleteModal,
  onSelect,
}) {
  return (
    <Grid2 item xs={12} sm={6} md={4}>
      <Card
        sx={{ maxWidth: 345, margin: "auto", borderRadius: 2, boxShadow: 3 }}
      >
        <CardHeader
          avatar={
            available ? (
              <span
                style={{
                  backgroundColor: "#40bf43",
                  height: "12px",
                  width: "12px",
                  borderRadius: "50%",
                }}
              ></span>
            ) : (
              <span
                style={{
                  backgroundColor: "#E0514F",
                  height: "12px",
                  width: "12px",
                  borderRadius: "50%",
                }}
              ></span>
            )
          }
          title={<Typography variant="h6">{name}</Typography>}
          subheader={
            <Chip
              label={type}
              size="small"
              sx={{ backgroundColor: "lightblue", fontWeight: "bold" }}
            />
          }
        />
        <CardContent>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
          >
            <b>Price:</b> {price}€
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
          >
            <b>Rating:</b> {rating}
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
          >
            <b>Warranty:</b> {warranty_years} years
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between", padding: "16px" }}>
          <Button
            size="small"
            sx={{
              backgroundColor: "#40bf43",
              color: "white",
              "&:hover": { backgroundColor: "#66ad52" },
            }}
            onClick={() => {
              openModifyModal();
              onSelect();
            }}
          >
            Edit
          </Button>
          <Button
            size="small"
            sx={{
              backgroundColor: "#E0514F",
              color: "white",
              "&:hover": { backgroundColor: "#A63C3A" },
            }}
            onClick={() => {
              openDeleteModal();
              onSelect();
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  );
}

export default Product;
