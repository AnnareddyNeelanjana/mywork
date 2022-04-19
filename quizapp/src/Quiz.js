import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1, count: 0 };
    }
    handleResetClick() {
        this.props.reactClickHandler()
        this.setState({ count: 0 })
    }
    count() {
        this.setState((state) => {
            return { count: state.count + 1 }
        })
    }
    showNextQuestion() {
        this.setState((state) => {
            return { quiz_position: state.quiz_position + 1 }
        })
    }

    render() {
        console.log(this.props.quizData);
        const isQuizEnd = ((this.state.quiz_position - 1) === this.props.quizData.quiz_questions.length);
        const len = this.props.quizData.quiz_questions.length;
        return (
            <div className='QuizQuestion'>
                {isQuizEnd ? <QuizEnd reactClickHandler={this.handleResetClick.bind(this)} final_score={this.state.count} max_score={len} qd={this.props.quizData} /> :
                    <QuizQuestion quiz_question={this.props.quizData.quiz_questions[this.state.quiz_position - 1]}
                        showNextQuestionHandler={this.showNextQuestion.bind(this)} countHandler={this.count.bind(this)} />}
            </div>);

    }
}
export default Quiz;