import styled from "@emotion/styled";
import {
  Add,
  AddToPhotos,
  EmojiEmotions,
  PersonAdd,
  VideoLibrary,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyleBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  gap: "10px",
});
const AddPost = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Tooltip
        title="Add"
        onClick={handleOpen}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(45%)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box p={3} width={350} height={250} bgcolor={"background.default"} color={"text.primary"} borderRadius="10px">
          <Typography variant="h6" color="black" textAlign="center">
            Create New Post
          </Typography>
          <StyleBox>
            <Avatar
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="body1" fontWeight={400}>
              Aniket
            </Typography>
          </StyleBox>
          <TextField
            placeholder="What's on your mind"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <AddToPhotos color="secondary" />
            <VideoLibrary color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button sx={{width:"100%"}}>Post</Button>
            
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
