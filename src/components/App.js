import Header from './Header';
import Home from './Home';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
   appName: state.appName
});

class App extends React.Component {
    render() {
        return (
            <div>
                <Header appName={this.props.appName} />
                <Home />
            </div>
        );
    }
}
/*
connect함수는 Provider 컴포넌트 하위에 존재하는 컴포넌트들이
store에 접근하게 만드는 역할을 해준다.
 */
export default connect(mapStateToProps, () => ({}))(App);