import React from 'react';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            raw: '',
        };

        this.outputRef = React.createRef();
    }

    onRawTextChanged = (event) => {
        const text = event.target.value;

        if (this.state.raw !== text) {
            const parsed = s9e.TextFormatter.preview(text, this.outputRef.current);

            this.setState({
                raw: text,
            });
        }
    };

    render() {
        return (
            <div className="ui two column divided grid container">
                <div className="column">
                    <div className="ui input">
                        <textarea id="message" name="raw" value={this.state.raw} onChange={this.onRawTextChanged}></textarea>
                    </div>
                </div>
                <div className="column">
                    <div className="ui piled segment" ref={this.outputRef}/>
                </div>
            </div>
        );
    }
}
