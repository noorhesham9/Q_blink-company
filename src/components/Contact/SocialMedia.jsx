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
    <Stack
      justifyContent="space-around"
      borderRadius="10px"
      alignItems="center"
      bgcolor="#ffffff29">
      <motion.div
        whileHover={{
          x: -10,
        }}
        transition={{
          duration: 0.4,
        }}
        sx={{
          position: "relative",
          display: "inline-block",
        }}>
        <IconButton
          href=""
          target="blank"
          sx={{
            color: "white",
          }}>
          <LinkedIn
            sx={{ fontSize: { xs: "30px", sm: "40px", color: "yellow" } }}
          />
        </IconButton>
      </motion.div>
      <motion.div
        whileHover={{
          x: -10,
        }}
        transition={{
          duration: 0.4,
        }}
        sx={{
          position: "relative",
          display: "inline-block",
        }}>
        <IconButton
          href=""
          target="blank"
          sx={{
            color: "white",
          }}>
          <GitHub sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
        </IconButton>
      </motion.div>

      <motion.div
        whileHover={{
          x: -10,
        }}
        transition={{
          duration: 0.4,
        }}
        sx={{
          position: "relative",
          display: "inline-block",
        }}>
        <IconButton
          href=""
          target="blank"
          sx={{
            color: "white",
          }}>
          <Twitter sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
        </IconButton>
      </motion.div>

      <motion.div
        whileHover={{
          x: -10,
        }}
        transition={{
          duration: 0.4,
        }}
        sx={{
          position: "relative",
          display: "inline-block",
        }}>
        <IconButton
          href=""
          target="blank"
          sx={{
            color: "white",
          }}>
          <WhatsApp sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
        </IconButton>
      </motion.div>

      <motion.div
        whileHover={{
          x: -10,
        }}
        transition={{
          duration: 0.4,
        }}
        sx={{
          position: "relative",
          display: "inline-block",
        }}>
        <IconButton
          href=""
          target="blank"
          sx={{
            color: "white",
          }}>
          <Instagram sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
        </IconButton>
      </motion.div>
    </Stack>
  );
}

export default SocialMedia;
