import React,{Component} from 'react';

import QuizQuestionButton from './QuizQuestionButtion';
class QuizQuestion extends Component{
constructor(props){
  super(props);
  this.state={incorrectAnswer:false}
}

handleClick(buttonText){
  this.props.quiz_question.marked=buttonText
  if(buttonText==this.props.quiz_question.answer){
     this.setState({incorrectAnswer:false})
     this.props.countHandler()
     this.props.quiz_question.status="you have marked correct answer"
  }
  else{
    this.setState({incorrectAnswer:true})
    this.props.quiz_question.status="you have marked wrong answer"
  }  
  this.props.showNextQuestionHandler()
}
render(){
     return(
        <main>
            <section>
            <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <ul>
               
              {this.props.quiz_question.answer_options.map( (answer_option,index) => { 
                    return <QuizQuestionButton key={index} button_text ={answer_option} 
                    clickHandler={this.handleClick.bind(this)}/>
                    }
                    )}
            </ul> 
           {/* <button onClick={this.props.showNextQuestionHandler}>NEXT</button>   */}
        </main>
     );
}
}

export default QuizQuestion;

