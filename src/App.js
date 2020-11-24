import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'



function App(props) {

  return (

    <div className="App">
      <div>Age: <span>{props.age}</span></div>
      <button onClick={props.onAgeUp}>Age UP</button>
      <button onClick={props.onAgeDown}>Age DOWN</button>
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP' }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
