import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import MailLockIcon from "@mui/icons-material/MailLock";
import ErrorIcon from "@mui/icons-material/Error";
import {
  Box,
  Button,
  Grid,
  ListItemIcon,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";

function MenuBox({moiveName}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  0;

  const handleModal = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => setOpenModal(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <ErrorIcon />
            Caution!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`Are you sure you want to Delete ${moiveName}`} 
          </Typography>
          <Grid container spacing={4}>
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                onClick={handleModalClose}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="error"
                size="large"
                onClick={handleModalClose}
              >
                Yes
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DownloadIcon fontSize="small" />{" "}
            <ListItemText>Download</ListItemText>
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EditIcon fontSize="small" /> <ListItemText>Rename</ListItemText>
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ShareIcon fontSize="small" />{" "}
            <ListItemText>Share Link</ListItemText>
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FolderCopyIcon fontSize="small" />{" "}
            <ListItemText>Move</ListItemText>
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MailLockIcon fontSize="small" />{" "}
            <ListItemText>Mark Private</ListItemText>
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleModal}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" color="red" />{" "}
            <ListItemText>Delete</ListItemText>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MenuBox;
