import React from 'react';
import { render } from 'react-dom';



class App extends React.Component {

    render() {

        var user = {
            name: "anna",
            hobbies:["sports","fitness","cinema"]
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"max"} age={"27"} user={user} />
                    </div>
                </div>
            </div>
        );
    }
}

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

var Home = React.createClass({
    render: function () {
        var text = "something";
        return (
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                <p> Your name is {this.props.name} , age is {this.props.age}</p>
                <p> User Object => Name: {this.props.user.name}</p>

                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
});

render(<App />, window.document.getElementById('app'));