import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { fantomTestnet } from "wagmi/chains";

const chains = [fantomTestnet];
const projectId = process.env.REACT_APP_PROJECT_ID;

const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId }),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    version: "2",
    projectId,
    appName: "web3Modal",
    chains,
  }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <WagmiConfig client={wagmiClient}>
          <App />
        </WagmiConfig>
        <Web3Modal
          ethereumClient={ethereumClient}
          projectId={projectId}
          themeColor="magenta"
          themeBackground="gradient"
        />
      </Router>
    </Provider>
  );
};

export default Root;
