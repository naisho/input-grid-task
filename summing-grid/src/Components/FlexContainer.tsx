import React, { CSSProperties } from 'react';

const styles: {[key: string]: CSSProperties} = {
    flexContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        border: '1px solid black',
        boxSizing: 'border-box'
    }
}

class FlexContainer extends React.Component {
    render() {
        return (
            <div style={styles.flexContainer}>
                {this.props.children}
            </div>
        )
    }
}

export default FlexContainer;
