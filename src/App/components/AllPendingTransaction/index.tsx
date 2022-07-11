import React from "react";
import styles from "./AllPendingTransaction.module.css";
import TransactionList from "../../TransactionList";
import {useMultiSigWalletContext} from "../../../contexts/MultiSigWallet";
interface Props {}

const AllPendingTransaction: React.FC<Props> = () => {
    const {state} = useMultiSigWalletContext();
    return (
        <div className={styles.title}>
            <TransactionList
                numConfirmationsRequired={state.numConfirmationsRequired}
                data={state.transactions.filter(item => !item.executed && !item.cancel)}
                count={state.transactionCount}
            />
        </div>
    );
};

export default AllPendingTransaction;
