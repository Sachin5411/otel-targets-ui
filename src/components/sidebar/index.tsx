import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import { useLocation } from "react-router";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const navLinks = [
    {
        name: "Home",
        icon: HomeIcon,
        link: "/"
    },
    {
        name: "Targets",
        icon: CrisisAlertIcon,
        link: "/targets"
    }
];
const Sidebar = () => {
  const {  } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "#161d2f",
        padding: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
          <Typography
            variant="h5"
            component="h1"
            my={0}
            fontWeight={400}
            fontSize={18}
          >
            OTEL-TARGETS
          </Typography>
        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                  <Typography>{item.name}</Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;