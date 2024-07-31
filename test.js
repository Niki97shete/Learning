import React from "react";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Card,
  FormControl,
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import { Typography } from "@material-ui/core";
import QtnAns from "../components/QtnAns";

const FaqPage = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          m: 2,
          p: 2,
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} xs={12}>
                <Box>
                  <Box>
                    <FormControl fullWidth sx={{ mt: 1 }} variant="filled">
                      <InputLabel htmlFor="filled-adornment-amount">
                        Search
                      </InputLabel>
                      <FilledInput
                        id="filled-adornment-amount"
                        placeholder="What can we help you find..."
                        variant="outlined"
                        startAdornment={
                          <InputAdornment position="start">
                            <IconButton>
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Container maxWidth={false}>
                      <Typography>Top questions</Typography>
                      <QtnAns />
                      <QtnAns />
                      <QtnAns />
                    </Container>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} xs={12}>
                <Box>
                  <Box sx={{ "& button": { m: 1 } }}>
                    <div>
                      <Button size="small">All</Button>
                      <Button size="small">Claims</Button>
                      <Button size="small">Deductible</Button>
                      <Button size="small">Coverage</Button>
                      <Button size="small">Support</Button>
                    </div>
                  </Box>
                  <Box sx={{ ml: 2 }}>
                    <QtnAns />
                    <QtnAns />
                    <QtnAns />
                    <QtnAns />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      pt: 3,
                    }}
                  >
                    <Pagination color="primary" count={5} size="small" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FaqPage;
