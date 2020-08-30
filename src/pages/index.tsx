import React from 'react';
import styles from './index.less';
const Test: React.FC<{ abc: number }> = ({ abc }): React.ReactNode => {
    return <div>{a}</div>
}
const App = (): React.ReactNode => {
    if (1) { }
    return <Test a={1} a={2}>test</Test>;
};
export default App;
