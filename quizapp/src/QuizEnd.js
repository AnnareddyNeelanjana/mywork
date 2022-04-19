import React,{Component} from 'react';
import Result from './Result';
class QuizEnd extends Component{
    handleReasetClick(){
        this.props.resetClickHandler()
    }
    
render(){
     return(
        <div>
            <p>Thanks for taking the quiz</p>
            <a href=''>Reset the Quiz</a>
            <p>Your final score is</p>
            {(()=>{
                if(this.props.final_score==this.props.max_score){
                    return( <div>
                        <p className="Count_btn">{this.props.final_score}/{this.props.max_score}</p>
                        <p className="cmmt"> Congratulations !!you have answered all questions </p>
                        </div>)
                }
                else{
                    return( <div>
                        <p className="Count_btn">{this.props.final_score}/{this.props.max_score}</p>
                        <p className="cmmt"> Try to learn from your mistakes !!</p>
                        <Result q_d={this.props.qd}/> 
                        </div>)
                }
            }
            )()}
           
            
        </div>
     );
}
}

export default QuizEnd;