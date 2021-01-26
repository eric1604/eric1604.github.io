'use strict';
const e = React.createElement;

class BigTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1,
        };
    }
    render() {
        return e(
            'button',
            { onClick: () => this.setState({ clicks: this.state.clicks + 1, }) },
            'Hello React World !'
        );
    }
}

const domContainer = document.querySelector('#BigTitle');
ReactDOM.render(e(BigTitle), domContainer);