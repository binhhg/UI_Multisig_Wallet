import React from "react";
import { Button, Message } from "semantic-ui-react";
import { unlockAccount } from "../api/web3";
import "./index.css";
import useAsync from "../components/useAsync";
import { useWeb3Context } from "../contexts/Web3";
import MultiSigWallet from "./MultiSigWallet";
import Header from "./Header";
import Network from "./Network";
import styles from "./Header.module.css";
import {useMultiSigWalletContext} from "../contexts/MultiSigWallet";
function App() {
  const {state} = useMultiSigWalletContext();
  const {
    state: { account, netId },
    updateAccount,
  } = useWeb3Context();
  const { pending, error, call } = useAsync(unlockAccount);

  async function onClickConnect() {
    const { error, data } = await call(null);

    if (error) {
      console.error(error);
    }
    if (data) {
      updateAccount(data);
    }
  }

  return (
    <div className="App">
      <div className="App-main">
      <Header />
        {account ? (
          <> <div className={styles.titleHeader}>Contract information</div>
            {netId !== 0 && <Network netId={netId} />}
            <div>Account: {account}</div>
            <div>Contract: {state.address}</div>
            <MultiSigWallet />
          </>
        ) : (
          <>
            {error ? (
              <Message error>{error.message}</Message>
            ) : (
              <Message error>Metamask is not connected</Message>
            )}
            <Button
              color="blue"
              onClick={() => onClickConnect()}
              disabled={pending}
              loading={pending}
            >
              Connect to Metamask
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
