import React from "react";
import { Formik, FieldArray, Field } from "formik";

const MakeQuiz = () => {
  return (
    <Formik
      initialValues={{
        questions: [""]
      }}
      onSubmit={(data) => console.log(data)}
    >
      {({ handleSubmit, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="container-with-button">
              <FieldArray name="questions">
                {({
                  push,
                  remove,
                  form: {
                    values: { questions }
                  }
                }) => {
                  return questions.map((question, questionIndex) => (
                    <div
                      className="question-answer-container"
                      key={questionIndex}
                    >
                      <div className="individual-question" key={questionIndex}>
                        <label htmlFor={`question-${questionIndex}`}>
                          Question number {questionIndex + 1}
                        </label>
                        <Field
                          id="question"
                          name={`question-${questionIndex}`}
                          placeholder="Enter your question"
                        />
                      </div>
                      <div className="answers-container">
                        <input
                          type="radio"
                          name={`radio-button-to-the-question-${questionIndex}`}
                        />
                        <Field
                          name={`individual-answer-1-to-the-question-${questionIndex}`}
                          placeholder="Enter your answer here"
                          className="answers"
                        />
                        <br />
                        <input
                          type="radio"
                          name={`radio-button-to-the-question-${questionIndex}`}
                        />
                        <Field
                          name={`individual-answer-2-to-the-question-${questionIndex}`}
                          placeholder="Enter your answer here"
                          className="answers"
                        />
                        <br />
                        <input
                          type="radio"
                          name={`radio-button-to-the-question-${questionIndex}`}
                        />
                        <Field
                          name={`individual-answer-3-to-the-question-${questionIndex}`}
                          placeholder="Enter your answer here"
                          className="answers"
                        />
                        <br />
                        <input
                          type="radio"
                          name={`radio-button-to-the-question-${questionIndex}`}
                        />
                        <Field
                          name={`individual-answer-4-to-the-question-${questionIndex}`}
                          placeholder="Enter your answer here"
                          className="answers"
                        />
                      </div>
                      <button
                        onClick={() => questions.push("")}
                        className="buttons"
                      >
                        Add Question
                      </button>
                      <button
                        onClick={() => remove(questionIndex)}
                        className="buttons"
                      >
                        Remove Question
                      </button>
                    </div>
                  ));
                }}
              </FieldArray>
              <button type="submit" id="submit-button">
                Submit
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};
export default MakeQuiz;
