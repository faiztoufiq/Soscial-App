import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FaceIcon from "@mui/icons-material/Face";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import {
  Tooltip,
  Fab,
  Modal,
  Box,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Addd = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"white"} borderRadius={5}>
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" />
            <Typography component="span">faiz toufiq</Typography>
          </UserBox>
          <TextField
            id="standard-basic"
            label="Add Post data"
            variant="standard"
            rows={3}
            sx={{ width: "100%" }}
          />
          <Stack direction="row" gap={1} mt={2}>
            <EmojiEmotionsIcon />
            <MoodBadIcon />
            <SentimentDissatisfiedIcon />
            <FaceIcon />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            fullWidth
          >
            <Button sx={{ width: "100%", mt: "20px" }}>Post</Button>
            <Button sx={{ mt: "20px" }}>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Addd;
