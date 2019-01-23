import React from 'react';
import Nav from '../Components/Nav';
import Sum from './Sum/Sum';

type State = {
    data: number[];
}

class App extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {data: [1, 2, 3]};
    }

    render() {
        return (
            <React.Fragment>
                <Nav changeState={this.changeState}>
                    Input Grid Task
                </Nav>
                <Sum
                    data={this.state.data}
                    updateData={this.updateData}>
                </Sum>
            </React.Fragment>
        );
    }

    updateData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = Number(e.target.name);
        const newVal = Number(e.target.value);
        this.setState(state => {
            return {
                data: state.data.map((val, i) => i === id ? newVal : val)
            }
        });
    }

    changeState = (data: number[]) => {
        this.setState({data});
    }
}

export default App;
