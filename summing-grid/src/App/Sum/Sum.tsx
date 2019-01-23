import React, { ReactHTML } from 'react';
import { FlexContainer } from '../../Components';
import { TextField } from '@material-ui/core';
import './Sum.css';

type Props = {
    data: number[];
    updateData: React.ChangeEventHandler;
}

class Sum extends React.Component<Props, {}> {
    render() {
        const addends = this.props.data.map((num, i, arr) => (
            <FlexContainer key={`${i}`}>
                <TextField
                    name={`${i}`}
                    type="number"
                    value={num}
                    label="Addend"
                    className="addend"
                    variant="outlined"
                    onChange={this.props.updateData} />
                <span className="operator">{i === arr.length - 1 ? '=' : '+'}</span>
            </FlexContainer>
        ));

        const sumVal = this.numToMagnitude(this.props.data.reduce((a,b) => a + b));
        const sum = (
            <FlexContainer>
                <TextField
                    name="sum"
                    type="text"
                    value={sumVal}
                    label="Sum"
                    className="sum"
                    variant="outlined"
                    disabled={true} />
            </FlexContainer>
        )

        return (
            <div className="container">
                {addends}
                {sum}
            </div>
        );
    }

    numToMagnitude(num: number) {
        const si: {[key: string]: (string | null)[]} = {
            '-': ['m', 'u', 'n', 'p', 'f', 'a', 'z', 'y'],
            '+': [null, 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
        }

        let pre, e;
        [pre, e] = num.toExponential(2).split('e');
        if (e[0] === '+') {
            const suffix = si[e[0]][Math.floor(Number(e.slice(1)) / 3)];
            switch (suffix) {
                case null: {
                    let end = 3;
                    end += num.toString()[0] === '-' ? 1 : 0;
                    end += num.toString()[3] === '.' ? 1 : 0;
                    return num.toString().slice(0, end);
                }
                case undefined: return num.toExponential(2);
                default: {
                    if (pre[0] === '-') {
                        switch (Number(e.slice(1)) % 3) {
                            case 0: return (pre + suffix);
                            case 1: return ('-' + pre[1] + pre[3] + '.' + pre[4] + suffix);
                            case 2: return ('-' + pre[1] + pre[3] + pre[4] + suffix);
                        }
                    } else {
                        switch (Number(e.slice(1)) % 3) {
                            case 0: return (pre + suffix);
                            case 1: return (pre[0] + pre[2] + '.' + pre[3] + suffix);
                            case 2: return (pre[0] + pre[2] + pre[3] + suffix);
                        }
                    }
                }
            }
        } else { // decimal
            const suffix = si[e.slice(0, 1)][Math.floor((Number(e.slice(1)) - 1) / 3)];
            switch (suffix) {
                case undefined: return num.toExponential(2);
                default: {
                    switch (Number(e.slice(1)) % 3) {
                        case 0: return (pre + suffix);
                        case 2: return (pre[0] + pre[2] + '.' + pre[3] + suffix);
                        case 1: return (pre[0] + pre[2] + pre[3] + suffix);
                    }
                }
            }
        }
    }
}

export default Sum;
