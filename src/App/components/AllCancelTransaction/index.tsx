import React from "react";
import styles from "./AllCancelTransaction.module.css";
import {useMultiSigWalletContext} from "../../../contexts/MultiSigWallet";
import TransactionList from "../../TransactionList";
interface Props {}

const AllCancelTransaction: React.FC<Props> = () => {
    const {state} = useMultiSigWalletContext();
    return (
        <div className={styles.title}>
            <TransactionList
                numConfirmationsRequired={state.numConfirmationsRequired}
                data={state.transactions.filter(item => item.cancel)}
                count={state.transactionCount}
            />
        </div>
    );
};

export default AllCancelTransaction;
