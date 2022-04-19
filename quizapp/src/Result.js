import React, { Component } from 'react';

class Result extends Component {


    render() {

        return (
            <div>
                <p className="result">RESULT SHEET</p>
                <table><tr><th>QUESTIONS </th><th>STATUS </th><th>MARKED ANSWER </th><th>CORRECT ANSWER </th></tr>
                    {this.props.q_d.quiz_questions.map((index) => (
                        <tr>
                            <td>{index.instruction_text}</td>
                            <td>{index.status}</td>
                            <td>{index.marked}</td>
                            <td>{index.answer}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default Result;


