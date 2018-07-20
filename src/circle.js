import React, {Component} from "react";
import '../sass/scatterplot.scss';

export class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'circle-normal-props',
            onClicked: false
        }
    }

    invertStyle(onClicked) {
        if (!onClicked) {
            this.setState({
                className: 'circle-clicked-props',
                onClicked: !this.state.onClicked
            })
        } else {
            this.setState({
                className: 'circle-normal-props',
                onClicked: !this.state.onClicked
            })
        }
    }

    render() {
        const STATUS_MAP = {
            error: 'red',
            pass: 'green',
            fail: 'orange'
        };
        const {posX, posY, status} = this.props;
        let style = {
            backgroundColor: STATUS_MAP[status],
            bottom: posY,
            left: posX
        };
        return (
            <span style={style} className={this.state.className} onClick={()=>this.invertStyle(this.state.onClicked)}/>
        )
    }
}