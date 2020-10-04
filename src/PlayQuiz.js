import React, { Component } from "react";
import Score from "./Score.component";
class PlayQuiz extends Component {
  constructor() {
    super();
    this.state = {
      informationAboutQestionAndAnswer: [],
      currentQuestion: [],
      currentAnswers: [],
      counter: 0,
      score: 0,
      showLoading: false,
      showScore: false
    };
  }

  // component did mount

  componentDidMount() {
    this.setState({ showLoading: true });
    fetch("https://opentdb.com/api.php?amount=10", {
      signal: this.abortController.signal
    })
      .then((res) => res.json())
      .then((obj) => {
        this.setState({ showLoading: false });
        this.setState({ informationAboutQestionAndAnswer: obj.results }, () =>
          console.log(
            "this.state.informationAboutQuestionAndAnswer",
            this.state.informationAboutQestionAndAnswer
          )
        );
        this.setState(
          { currentQuestion: obj.results[this.state.counter].question },
          () => console.log("Current Question", this.state.currentQuestion)
        );
        this.setState(
          (prevState, prevProp) => {
            return {
              currentAnswers: this.shuffle([
                obj.results[this.state.counter].correct_answer,
                ...obj.results[this.state.counter].incorrect_answers
              ])
            };
          },
          () => {
            console.log(
              "Current Answers to this question are: ",
              this.state.currentAnswers
            );
          }
        );
      });
  }

  // component will un mount

  componentWillUnmount() {
    this.abortController.abort();
  }

  // Code to import abortController that unsubscribes the API when the component unmounts

  abortController = new AbortController();

  // All the functions now go down here

  // Function that takes in an array and returns a shuffled array.

  shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  //handleClick function

  handleClick = (e) => {
    this.setState(
      (prevState, prevProp) => {
        return {
          counter: prevState.counter + 1
        };
      },
      () => console.log("The value of counter is ", this.state.counter)
    );
    if (this.state.counter < 9) {
      this.updatesQuestionAndAnswers();
      const userOption2 = e.currentTarget.value;
      this.checkUserAnswer(userOption2);
    } else if (this.state.counter === 9) {
      const userOption2 = e.currentTarget.value;
      this.checkUserAnswer(userOption2);
      this.setState({ showScore: true });
    }
    //   else {
    //   this.setState({ showScore: true });
    // }
  };

  // Check user answer

  checkUserAnswer = (userOption) => {
    console.log("In check your answer ", this.state.counter);
    const real_answer = this.state.informationAboutQestionAndAnswer[
      this.state.counter
    ]?.correct_answer;
    if (userOption === real_answer) {
      this.setState((prevState, prevProp) => {
        return { score: prevState.score + 1 };
      });
    }
  };

  // Updates the question and answers state:

  updatesQuestionAndAnswers = () => {
    this.setState(
      (prevState, prevProp) => {
        return {
          currentQuestion:
            prevState.informationAboutQestionAndAnswer[prevState.counter]
              .question,
          currentAnswers: this.shuffle([
            prevState.informationAboutQestionAndAnswer[prevState.counter]
              .correct_answer,
            ...prevState.informationAboutQestionAndAnswer[prevState.counter]
              .incorrect_answers
          ])
        };
      },
      () => {
        console.log(
          "The button has been clicked its time to update the questions and answers"
        );
        console.log("New Current Question: ", this.state.currentQuestion);
        console.log("New Current Answers, ", this.state.currentAnswers);
        console.log(
          "The correct answer to this question is: ",
          this.state.informationAboutQestionAndAnswer[this.state.counter]
            .correct_answer
        );
        console.log(
          "-----------------------------------------------------------"
        );
      }
    );
  };

  // function to handle the previous button:

  handlePreviousButton = () => {
    // Setting the counter to counter - 1:

    if (this.state.counter !== 0) {
      this.setState(
        (prevState, prevProp) => {
          return { counter: prevState.counter - 1 };
        },
        () =>
          console.log(
            "The user has clicked the previous button... Now the value of counter is: ",
            this.state.counter
          )
      );
    }

    // Adding restrictions for score's value and then setting my score state to -1.

    if (this.state.score > 0) {
      this.setState((prevState, prevProp) => {
        return { score: prevState.score - 1 };
      });
    }

    // Adding restrictions for counter's value and then setting the currentQuestion and currentAnswers:

    if (this.state.counter < 9) {
      this.updatesQuestionAndAnswers();
    } else {
      this.setState({ showScore: true });
    }
  };

  // Handling the reset button;

  handleResetButton = () => {
    // first setting the counter back to 0 and score also back to 0.
    this.setState((prevState, prevProp) => {
      return { counter: 0, score: 0 };
    });
    if (this.state.counter < 9) {
      this.updatesQuestionAndAnswers();
    } else {
      this.setState({ showScore: true });
    }
  };

  // handling last questions button click:

  // rendering the html markup

  render() {
    if (!this.state.showLoading && !this.state.showScore) {
      return (
        <>
          <h1>
            Question {this.state.counter < 10 ? this.state.counter + 1 : 10} of{" "}
            {this.state.informationAboutQestionAndAnswer.length}
          </h1>
          <h1>{this.state.currentQuestion}</h1>
          {this.state.currentAnswers?.map((currentAnswer) => (
            <button
              key={currentAnswer}
              value={currentAnswer}
              onClick={this.handleClick}
            >
              {currentAnswer}
            </button>
          ))}

          <h1>{`The score of the user is ${this.state.score}`}</h1>
          <button onClick={this.handlePreviousButton}>Previous</button>
          <button onClick={this.handleResetButton}>Reset the quiz</button>
        </>
      );
    } else if (this.state.showScore) {
      return <Score score={this.state.score} />;
    } else {
      return <h1>Loading....</h1>;
    }
  }
}
export default PlayQuiz;
