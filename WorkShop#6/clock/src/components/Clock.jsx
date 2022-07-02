import React from "react";


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.State = {
            date: new Date(),
        };
    }
    render() {
        return (
            <div>
                <h2>Hello, world</h2>
                <h2>It's{this.props.date().toLocaleDateString()}</h2>
            </div>
        );

    }

    componentDidMount() {
        console.log('componentDidMount')
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timerId);
    }

    tick() {
        console.log('tick');
        this.setState({
            date: new Date(),
        });
    }
}

export default Clock;