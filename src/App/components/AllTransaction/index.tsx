import React from "react";
import styles from "./AllTrasaction.module.css";
import TransactionList from "../../TransactionList";
import {useMultiSigWalletContext} from "../../../contexts/MultiSigWallet";
interface Props {}

const AllTrasaction: React.FC<Props> = () => {
    const {state} = useMultiSigWalletContext();
    return (
        <div className={styles.title}>
            <TransactionList
                numConfirmationsRequired={state.numConfirmationsRequired}
                data={state.transactions}
                count={state.transactionCount}
            />
        </div>
    );
};

export default AllTrasaction;
