import React from 'react';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            raw: '',
            parsed: '',
        };
    }

    onRawTextChanged = (event) => {
        const text = event.target.value;

        if (this.state.raw !== text) {
            const parsed = s9e.TextFormatter.parse(text);

            this.setState({
                raw: text,
                parsed: parsed,
            });
        }
    };

    render() {
        return (
            <div className="ui two column divided grid container">
                <div className="column">
                    <div className="ui input">
                        <textarea name="raw" value={this.state.raw} onChange={this.onRawTextChanged}></textarea>
                    </div>
                </div>
                <div className="column">
                    <div className="ui piled segment" dangerouslySetInnerHTML={{__html: this.state.parsed}}/>
                </div>
            </div>
        );
    }
}