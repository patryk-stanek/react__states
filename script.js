var Counter = React.createClass({
    getInitialState: function() {//określamy początkowy stan naszego komponentu
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('span', {}, 'Licznik ' + this.state.counter),//this.state odpwoluje sie do wartosci znajdujacej sie pod kluczem counter
                React.createElement('button', {onClick: this.increment}, '+1'),
                React.createElement('button', {onClick: this.decrement}, '-1')
            )
        )
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));