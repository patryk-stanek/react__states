var Counter = React.createClass({

    // metody potrzebne do prawidłowego działania render
    increment: function() {
        console.log('Inkrementacja.');
        console.log(this)
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        console.log('Dekrementacja.')
        this.setState({
            counter: this.state.counter - 1
        });
    },

    // HIERARCHIA?

    // 1. wywoływane raz, przed wyrenderowaniem komponentu kiedy nasza klasa zostaje stworzona
    getDefaultProps: function() {
        console.log('1. Pobieranie domyślnych właściwości.');
    },

    // 2. wywoływane raz, przed wyrenderowaniem komponentu
    getInitialState: function() {//określamy początkowy stan naszego komponentu
        console.log('2. Pobieranie domyślnego stanu obiektu.');
        return {
            counter: 0
        };
    },

    // 3. wywoływane raz, przed wyrenderowaniem komponentu, ten element nie ma dostępu do DOM ale ma dostęp do props i state
    componentWillMount: function() {
        console.log(this.props);
        console.log(this.state);
        console.log('3. Komponent został zamontowany.');
    },

    // 4. wywoływane za każdym razem gdy nasz obiekt zostaje zmieniony
    render: function() {
        console.log('4. Renderowanie komponentu.')
        return (
            React.createElement('div', {},
                React.createElement('span', {}, 'Licznik ' + this.state.counter),//this.state odpwoluje sie do wartosci znajdujacej sie pod kluczem counter
                React.createElement('button', {onClick: this.increment}, '+1'),
                React.createElement('button', {onClick: this.decrement}, '-1')
            )
        )
    },

    // 5. wywoływane raz, po wyrenderowaniu komponentu
    componentDidMount: function() {
        console.log('5. Komponent został wyrenderowany.');
        console.log(this.state);
        console.log(this.props);
        console.log(ReactDOM.findDOMNode(this));
    },

    // 6. wywoływane raz, po wyrenderowaniu komponentu, mimo wymontowania trzeba wyczyścić np. setInterval
    componentWillUnmount: function() {
        console.log('6. Komponent został wymontowany.');
    }
});

var CounterContainer = React.createClass({
    mount: function() {
        var x = React.createElement(Counter);
        var y = React.createElement(Counter);
        var z = React.createElement(Counter);
        ReactDOM.render(x, document.getElementById('render1'));
        ReactDOM.render(y, document.getElementById('render2'));
        ReactDOM.render(z, document.getElementById('render3'));
    },
    unmount: function() {
        ReactDOM.unmountComponentAtNode(document.getElementById('render1'));
        ReactDOM.unmountComponentAtNode(document.getElementById('render2'));
        ReactDOM.unmountComponentAtNode(document.getElementById('render3'));
    },

    render: function() {
        console.log('0. Kontener licznika został wyrenderowany');
        return (
            React.createElement('div', {},
                React.createElement('button', {onClick: this.mount}, 'Umieść'),
                React.createElement('button', {onClick: this.unmount}, 'Usuń'),
                React.createElement('div', {id: 'render1'}),
                React.createElement('div', {id: 'render2'}),
                React.createElement('div', {id: 'render3'}),
            )
        )
    }
});

var element = React.createElement(CounterContainer);
ReactDOM.render(element, document.getElementById('app'));