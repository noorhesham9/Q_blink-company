import { IconButton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  GitHub,
  Twitter,
  LinkedIn,
  WhatsApp,
  Instagram,
} from "@mui/icons-material";
function SocialMedia() {
  return (
    <Stack justifyContent="center" borderRadius="10px">
      <IconButton
        href=""
        target="blank"
        sx={{
          color: "white",
        }}>
        <LinkedIn
          sx={{
            fontSize: "30px",
            transition: ".4s",
            "&:hover": {
              color: "var(--primary-color)",
            },
          }}
        />
      </IconButton>

      <IconButton
        href=""
        target="blank"
        sx={{
          color: "white",
        }}>
        <GitHub
          sx={{
            fontSize: "30px",
            transition: ".4s",

            "&:hover": {
              color: "var(--primary-color)",
            },
          }}
        />
      </IconButton>

      <IconButton
        href=""
        target="blank"
        sx={{
          color: "white",
        }}>
        <Twitter
          sx={{
            fontSize: "30px",
            transition: ".4s",
            "&:hover": {
              color: "var(--primary-color)",
            },
          }}
        />
      </IconButton>

      <IconButton
        href=""
        target="blank"
        sx={{
          color: "white",
        }}>
        <WhatsApp
          sx={{
            fontSize: "30px",
            transition: ".4s",
            "&:hover": {
              color: "var(--primary-color)",
            },
          }}
        />
      </IconButton>

      <IconButton
        href=""
        target="blank"
        sx={{
          color: "white",
        }}>
        <Instagram
          sx={{
            fontSize: "30px",
            transition: ".4s",
            "&:hover": {
              color: "var(--primary-color)",
            },
          }}
        />
      </IconButton>
    </Stack>
  );
}

export default SocialMedia;
