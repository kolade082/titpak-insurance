import React from "react";
import {
  Snackbar,
  Alert,
  Box,
  Typography,
  Fade,
  Slide,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import CloseIcon from "@mui/icons-material/Close";

const SlideTransition = (props) => {
  return <Slide {...props} direction="down" />;
};

const NotificationToast = ({
  open,
  onClose,
  message,
  severity = "success",
  duration = 6000,
  position = { vertical: "top", horizontal: "center" },
}) => {
  const getIcon = () => {
    switch (severity) {
      case "success":
        return <CheckCircleIcon sx={{ fontSize: 24 }} />;
      case "error":
        return <ErrorIcon sx={{ fontSize: 24 }} />;
      case "warning":
        return <WarningIcon sx={{ fontSize: 24 }} />;
      case "info":
        return <InfoIcon sx={{ fontSize: 24 }} />;
      default:
        return <CheckCircleIcon sx={{ fontSize: 24 }} />;
    }
  };

  const getTitle = () => {
    switch (severity) {
      case "success":
        return "Success!";
      case "error":
        return "Error!";
      case "warning":
        return "Warning!";
      case "info":
        return "Info";
      default:
        return "Success!";
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      TransitionComponent={SlideTransition}
      anchorOrigin={position}
      sx={{
        "& .MuiSnackbar-root": {
          top: "24px !important",
        },
      }}
    >
      <Alert
        severity={severity}
        variant="filled"
        sx={{
          width: "100%",
          maxWidth: 500,
          minWidth: 320,
          borderRadius: 4,
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          "& .MuiAlert-message": {
            width: "100%",
            p: 0,
          },
          "& .MuiAlert-action": {
            alignItems: "flex-start",
            pt: 1,
            pr: 0,
          },
        }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onClose}
            sx={{
              color: "inherit",
              opacity: 0.8,
              "&:hover": {
                opacity: 1,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, pr: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            {getIcon()}
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "1.1rem",
                mb: 0.5,
                color: "inherit",
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              {getTitle()}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.5,
                color: "inherit",
                opacity: 0.95,
                fontWeight: 500,
              }}
            >
              {message}
            </Typography>
          </Box>
        </Box>
      </Alert>
    </Snackbar>
  );
};

export default NotificationToast;
