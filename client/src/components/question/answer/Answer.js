import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import style from "./answer.module.scss";

const Answer = (props) => {
  const { openAnswer, handleClose } = props;

  return (
    <div>
      <Modal
        open={openAnswer}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={style.box}>
          <div className={style.boxInner}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Answer the question here:
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
            <button className={style.submitButton}>Answer</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Answer;
