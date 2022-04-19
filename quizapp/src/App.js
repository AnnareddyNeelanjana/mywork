import React, { Component } from 'react';
import Quiz from './Quiz';
import Quiz_logo from './quiz2.jpg';
import './App.css';
{/*import 'bootstrap/dist/css/bootstrap.min.css';*/ }
let htmlData = require('./html_data.json');
let javascrData = require('./java_data.json');
let cssData = require('./css_data.json');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: false,
      javascr: false,
      css: false,
      btnText: "html",
    };
    this.updateTabSelection = this.updateTabSelection.bind(this);
    this.htmlhandleClick = this.htmlhandleClick.bind(this);
    this.javascrhandleClick = this.javascrhandleClick.bind(this);
    this.csshandleClick = this.csshandleClick.bind(this);
  }

  htmlhandleClick() {
    this.setState({
      btnText: "html"
    })
    // this.setState({ html: true, javascr: false, css: false })
  }
  javascrhandleClick() {
    this.setState({
      btnText: "js"
    })
    // this.setState({ javascr: true, html: false, css: false })
  }
  csshandleClick() {
    this.setState({
      btnText: "css"
    })
    // this.setState({ javascr: false, html: false, css: true })
  }
  updateTabSelection(txt) {
    this.setState({
      btnText: txt
    })
  }

  render() {
    return (
      <div className="App-div1">
        <header className="App-header">
          <h1>QUIZ TIME </h1>
        </header>
        <div class="btn-group btn-group-justified btn-block">
          <button onClick={()=>this.updateTabSelection("html")} class="btn">HTML</button>
          <button onClick={()=>this.updateTabSelection("js")} class="btn" >JAVASCRIPT</button>
          <button onClick={()=>this.updateTabSelection("css")} class="btn" >CSS</button>
          {/* <button onClick={this.htmlhandleClick} class="btn">HTML</button>
          <button onClick={this.javascrhandleClick} class="btn" >JAVASCRIPT</button>
          <button onClick={this.csshandleClick} class="btn" >CSS</button> */}
        </div>
        <div className="App-div2">
          <div className="App-div3">
            {this.state.btnText === "html" ? <div><p className="head">QUIZ ON HTML</p><Quiz quizData={htmlData} /></div> : null}
            {this.state.btnText === "js" ? <div><p className="head">QUIZ ON JAVASCRIPT</p><Quiz quizData={javascrData} /> </div> : null}
            {this.state.btnText === "css" ? <div><p className="head">QUIZ ON CSS</p><Quiz quizData={cssData} /> </div> : null}
            {/* {this.state.html ? <div><p className="head">QUIZ ON HTML</p><Quiz quizData={htmlData} /></div> : null}
            {this.state.javascr ? <div><p className="head">QUIZ ON JAVASCRIPT</p><Quiz quizData={javascrData} /> </div> : null}
            {this.state.css ? <div><p className="head">QUIZ ON CSS</p><Quiz quizData={cssData} /> </div> : null} */}
          </div>
        </div>
        <footer className="App_footer">
          <img src={Quiz_logo} className="App-qlogo" alt="logo" />
        </footer>
      </div>
    );
  }
}

export default App;
