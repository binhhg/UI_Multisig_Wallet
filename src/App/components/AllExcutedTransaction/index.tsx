import React from "react";
import styles from "./AllExcutedTransaction.module.css";
import TransactionList from "../../TransactionList";
import {useMultiSigWalletContext} from "../../../contexts/MultiSigWallet";
interface Props {}

const AllExcutedTransaction: React.FC<Props> = () => {
    const {state} = useMultiSigWalletContext();
    return (
        <div className={styles.title}>
            <TransactionList
                numConfirmationsRequired={state.numConfirmationsRequired}
                data={state.transactions.filter(item => item.executed)}
                count={state.transactionCount}
            />
        </div>
    );
};

export default AllExcutedTransaction;
