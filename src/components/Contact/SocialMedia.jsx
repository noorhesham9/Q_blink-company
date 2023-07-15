import { IconButton, Stack, Typography } from "@mui/material";
import {
  GitHub,
  Twitter,
  LinkedIn,
  WhatsApp,
  Instagram,
} from "@mui/icons-material";
function SocialMedia() {
  return (
    <Stack justifyContent="center">
      <Typography textAlign="center">Our Social Media:</Typography>
      <Stack direction="row" justifyContent="center">
        <IconButton
          href=""
          target="blank"
          sx={{
            "&:hover": {
              bgcolor: "transparent",
              transform: "scale(1.1)",
              transition: ".4s",
            },
            color: "white",
          }}>
          <LinkedIn sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
        </IconButton>
        <IconButton
          href=""
          target="blank"
          sx={{
            "&:hover": {
              bgcolor: "transparent",
              transform: "scale(1.1)",
              transition: ".4s",
            },
            color: "white",
          }}>
          <GitHub sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
        </IconButton>
        <IconButton
          href=""
          target="blank"
          sx={{
            "&:hover": {
              bgcolor: "transparent",
              transform: "scale(1.1)",
              transition: ".4s",
            },
            color: "white",
          }}>
          <Twitter sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
        </IconButton>
        <IconButton
          href=""
          target="blank"
          sx={{
            "&:hover": {
              bgcolor: "transparent",
              transform: "scale(1.1)",
              transition: ".4s",
            },
            color: "white",
          }}>
          <WhatsApp sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
        </IconButton>
        <IconButton
          href=""
          target="blank"
          sx={{
            "&:hover": {
              bgcolor: "transparent",
              transform: "scale(1.1)",
              transition: ".4s",
            },
            color: "white",
          }}>
          <Instagram sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default SocialMedia;
