import React, { FC, useMemo, useState } from 'react'
import ResizeObserver from 'rc-resize-observer';
import { Resizable } from 'react-resizable';
import TableHeader from './TableHeader';
interface ITable { }

const columnsConf = [
    {
        title: 'Date',
        dataIndex: 'date',
        width: 200,
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
        sorter: (a, b) => a.amount - b.amount,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        width: 100,
    },
    {
        title: 'Note',
        dataIndex: 'note',
        width: 100,
    },
    {
        title: 'Action',
        key: 'action',
        render: () => <a>Delete</a>,
    },
]

const data = [
    {
        key: 0,
        date: '2018-02-11',
        amount: 120,
        type: 'income',
        note: 'transfer',
    },
    {
        key: 1,
        date: '2018-03-11',
        amount: 243,
        type: 'income',
        note: 'transfer',
    },
    {
        key: 2,
        date: '2018-04-11',
        amount: 98,
        type: 'income',
        note: 'transfer',
    },
];
const Table: FC<ITable> = () => {
    const [columns, setColumns] = useState(columnsConf)
    // const _columns = useMemo(() => {
    //     return columns
    // }, [JSON.stringify(columns)])

    return (
        <ResizeObserver
            onResize={() => {
                console.log('resized!');
            }}
        >
            <div style={{ width: '100%', height: '100%' }}>
                <TableHeader columns={columns} setColumns={setColumns}></TableHeader>                 
            </div>
        </ResizeObserver>
    )
}

export default Table