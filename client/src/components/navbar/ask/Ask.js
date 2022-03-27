import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import style from "./ask.module.scss";

const Ask = (props) => {
  const { openAsk, handleClose } = props;

  return (
    <div>
      <Modal
        open={openAsk}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={style.box}>
          <div className={style.boxInner}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Ask a question here:
            </Typography>
            <form action="">
              <TextField
                sx={{ mt: 2 }}
                fullWidth
                multiline
                InputLabelProps={{ shrink: false }}
                label=" "
              />
            </form>
            <button className={style.submitButton}>Ask</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Ask;
