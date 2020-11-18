import React from 'react';
import styles from './index.less';
interface ITest {
    abc: number;
    onClick?: () => void;
}
const Test: React.SFC<ITest> = ({ abc }): React.ReactElement => {
    return <div>{abc}</div>;
};
const App: React.FC<Record<string, unknown>> = (props): React.ReactElement => {
    console.log('???');
    
    if (props.children) {
        console.log('haha', 123, 456);
    }
    return (
        <div>123</div>
    );
};
export default App;
