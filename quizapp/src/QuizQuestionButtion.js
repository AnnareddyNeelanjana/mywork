import React,{Component} from 'react';


class QuizQuestionButton extends Component{

handleClick(buttonText){
    this.props.clickHandler(this.props.button_text);
}

 render(){
     return (

        <li> <button onClick={this.handleClick.bind(this)} className="button" > {this.props.button_text} </button> </li>
        
     );
 }

}
export default QuizQuestionButton;


