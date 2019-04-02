import * as React from 'react';

export interface TestingProps {
    
}
 
export interface TestingState {
    name: string
}
 
class Testing extends React.Component<TestingProps, TestingState> {
    constructor(props: TestingProps) {
        super(props);
        this.state = { name: 'Zee' };
    }
    render() { 
        return ( <h1>Testing</h1> );
    }
}
 
export default Testing;