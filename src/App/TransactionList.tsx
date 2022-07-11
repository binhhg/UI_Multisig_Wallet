import React from "react";
import BN from "bn.js";
import TransactionActions from "./TransactionActions";

interface Transaction {
    txIndex: number;
    to: string;
    value: BN;
    data: string;
    addressToken: string;
    executed: boolean;
    numConfirmations: number;
    isConfirmedByCurrentAccount: boolean;
    cancel: boolean;
    by: string;
}

interface Props {
    numConfirmationsRequired: number;
    count: number;
    data: Transaction[];
}

const TransactionList: React.FC<Props> = ({
                                              numConfirmationsRequired,
                                              count,
                                              data
                                          }) => {
    return (
        <div>
            {data.map((tx, index) => (
                <ul key={tx.txIndex}>
                    <li style={{
                        fontWeight: 'bolder',
                        fontStyle: 'italic',
                        fontSize: 14
                    }}>
                        Transaction {tx.txIndex}
                    </li>
                    <div style={{marginLeft: 10}}>
                        <div>Tx Index: {tx.txIndex}</div>
                        <div>To: {tx.to}</div>
                        <div>Value: {tx.value.toString()}</div>
                        <div>Token adrress: {tx.addressToken}</div>
                        <div>Data: {tx.data}</div>
                        <div>Executed: {tx.executed.toString()}</div>
                        <div>Cancel: {tx.cancel.toString()}</div>
                        <div>Confirmations: {tx.numConfirmations}</div>
                        <div>Created By: {tx.by}</div>
                    </div>
                    <TransactionActions
                        numConfirmationsRequired={numConfirmationsRequired}
                        tx={tx}
                    />
                </ul>
            ))}
        </div>
    );
};

export default TransactionList;
