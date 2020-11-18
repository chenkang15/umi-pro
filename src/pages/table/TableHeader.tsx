import React, { FC } from 'react';
import { Resizable } from 'react-resizable';
import styles from './Table.less'





const HeaderCell = props => {
    const { onResize, width, ...restProps } = props;



    console.log(restProps);

    return (
        <Resizable
            width={width}
            height={0}
            handle={
                <span
                    className="react-resizable-handle"
                    onClick={e => {
                        e.stopPropagation();
                    }}
                />
            }
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
        >
            <div {...restProps} style={{ width }} className="header-cell"/>
        </Resizable>
    );
};
const TableHeader: FC<{
    columns: { width: number }[]
    setColumns(p: any): void
}> = ({ columns
    ,setColumns
}) => {
        const handleResize = (idx) => (e, { size }) => {
            const nextColumns = [...columns];
            nextColumns[idx] = {
                ...nextColumns[idx],
                width: size.width
            };
            console.log(size, nextColumns);
            setColumns(nextColumns)
        }
        console.log('rerender');
        
        return (
            <div className={styles.TableHeader}>
                {
                    columns.map((col, idx) => {
                        const { width, title, dataIndex } = col;
                        return (
                            <HeaderCell width={width} key={dataIndex} dataIndex={dataIndex} onResize={handleResize(idx)}>{title}</HeaderCell>
                        )
                    })
                }
            </div>
        )
    }

export default TableHeader