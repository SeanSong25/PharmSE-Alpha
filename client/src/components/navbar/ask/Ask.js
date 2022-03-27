import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { connect } from "react-redux";
import { askQuestion } from "../../../redux/actions/question";

import style from "./ask.module.scss";

const Ask = (props) => {
  const { openAsk, handleClose, askQuestion } = props;

  let navigate = useNavigate();

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
            <Formik
              initialValues={{
                title: "",
                content: "",
              }}
              onSubmit={async (values) => {
                let questionId = uuidv4();
                values.questionId = questionId;
                values.authorId = localStorage.getItem("authorId");
                console.log(values);
                askQuestion(values);

                setTimeout(function () {
                  navigate(`/question/${questionId}`);
                  handleClose();
                }, 1000);
              }}
            >
              {({
                values,
                errors,
                handleChange,
                handleSubmit,
                setFieldValue,
              }) => {
                return (
                  <form onSubmit={handleSubmit} className={style.form}>
                    <TextField
                      type="text"
                      name="title"
                      label="Title"
                      id="outlined"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.title}
                    />
                    <TextField
                      sx={{ mt: 2 }}
                      fullWidth
                      multiline
                      name="content"
                      label="Content"
                      onChange={handleChange}
                      value={values.content}
                    />
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className={style.submitButton}
                    >
                      Ask
                    </button>
                  </form>
                );
              }}
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    askQuestion: (data) => dispatch(askQuestion(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ask);
