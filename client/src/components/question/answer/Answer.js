import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { answerQuestion } from "../../../redux/actions/question";

import style from "./answer.module.scss";

const Answer = (props) => {
  const {
    openAnswer,
    handleClose,
    questionId,
    answerQuestion,
    loadQuestionData,
  } = props;

  let navigate = useNavigate();

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
            <Formik
              initialValues={{
                content: "",
              }}
              onSubmit={async (values) => {
                values.questionId = questionId;
                values.authorId = localStorage.getItem("authorId");
                console.log(values);
                answerQuestion(values);

                handleClose();
                loadQuestionData();
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
                      Answer
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
    answerQuestion: (data) => dispatch(answerQuestion(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
