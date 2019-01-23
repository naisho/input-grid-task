import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

type Props = {
    changeState: (data: number[]) => void;
}

const styles = {
    button: {
        marginRight: '1rem'
    }
}

class Nav extends React.Component<Props, {}> {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        style={{flexGrow: 1}}
                        color="inherit"
                        variant="title">
                        {this.props.children}
                    </Typography>
                    <Button
                        onClick={e => this.props.changeState([10000, 20000, 30000])}
                        color="inherit"
                        style={styles.button}
                        variant="text">
                        Example1
                    </Button>
                    <Button
                        onClick={e => this.props.changeState([0, 0, 0, 0, 0, 0.0001])}
                        color="inherit"
                        style={styles.button}
                        variant="text">
                        Example2
                    </Button>
                    <Typography color="inherit">
                        Andrew Hang
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Nav;
