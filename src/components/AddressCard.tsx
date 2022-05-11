import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Box, FormControlLabel, Grid, Radio } from "@mui/material";
import { useState } from "react";
import { Edit } from "@material-ui/icons";

interface addressGridProps {
  id: string;
  companyName: string;
  sellerName: string;
  contact: string;
  email: string;
  address: string;
  selectedAddress: string | null;
}

function AddressCard(props: addressGridProps) {
  return (
    <Card>
      <Grid container justifyContent="center" alignItems="center">
        {props.selectedAddress != null ? (
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <FormControlLabel
              value={props.id}
              control={<Radio />}
              label={false}
              checked={props.id === props.selectedAddress}
            />
          </Grid>
        ) : (
          ""
        )}
        <Grid item xs={10}>
          <CardContent>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              sx={{ width: "100%" }}
            >
              <Typography variant="h5" component="div">
                {props.companyName}
              </Typography>
              {props.id === props.selectedAddress ? (
                <Box sx={{ cursor: "pointer" }}>
                  <Edit color="action" />
                </Box>
              ) : (
                ""
              )}
            </Box>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.sellerName}
            </Typography>
            <Typography color="text.secondary">{props.contact}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.email}
            </Typography>
            <Typography variant="body2">{props.address}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default AddressCard;
