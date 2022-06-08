import React from "react";
import { ethers, BigNumber } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import $ from 'jquery'
import {
    connectWallet,
    getCurrentWalletConnected,
} from "../js/walletConnect";

//contract stuff
import CollectionConfig from '../contracts/Robots/config/CollectionConfig.ts';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contract: {}, amount: 1, walletAddress: "", tokenPrice: BigNumber.from(0) };
    }

    componentDidMount() {
        this.fetchData(this)
        this.initContract(this)
    }

    async fetchData(that) {
        const { address } = await getCurrentWalletConnected();
        that.setState({ walletAddress: address });
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    that.setState({ walletAddress: accounts[0] });
                } else {
                    that.setState({ walletAddress: "" });
                }
            });
        }
    }

    async initContract(that) {
        //old
        // const RobotsContractConfig = require('../contracts/robots/address.ts');
        // const RobotsContractABI = require('../contracts/robots/RobotsCB.json').abi;

        //new
        const ContractAbi = require('../contracts/Robots/artifacts/contracts/' +
            CollectionConfig.contractName +
            '.sol/' +
            CollectionConfig.contractName +
            '.json').abi;

        const browserProvider =
            (await detectEthereumProvider());

        let provider = new ethers.providers.Web3Provider(browserProvider);

        let newContract = new ethers.Contract(
            CollectionConfig.contractAddress,
            ContractAbi,
            provider.getSigner()
        )

        await that.setState({ contract: newContract})

        that.setState({ tokenPrice: newContract.cost() })
    }

    async connectWalletPressed(that) {
        const walletResponse = await connectWallet();
        that.state.walletAddress(walletResponse.address);
    };

    selectAmount(amount) {
        $('.mintAmountOption').removeClass('selected')
        let btnClicked = $("div[data-amount='" + amount + "']")
        btnClicked.addClass('selected')
        this.setState({ amount: btnClicked.attr('data-amount') });
    };


    async mint() {
        try {
            let thisthat = this;
            Promise.resolve(this.state.tokenPrice).then(async function(resolvedTokenPrice){
                await thisthat.state.contract.mint(thisthat.state.amount, {
                    value: resolvedTokenPrice.mul(thisthat.state.amount),
                });
            })
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        const metamaskInstalled = window.ethereum;

        return (
            <div className='Main'>
                {metamaskInstalled ? (
                    <div className='Card'>
                        {this.state.walletAddress.length > 0 ? (
                            //MINT WIDGET
                            <div className="Widget">
                                <h1>MINT</h1>
                                <span>Wallet Address: {this.state.walletAddress.slice(0, 5)}.....</span>
                                <div className="mintAmountContainer">
                                    <div data-amount="1" className="mintAmountOption one selected" onClick={() => this.selectAmount(1)}>
                                        1
                                    </div>
                                    <div data-amount="2" className="mintAmountOption two" onClick={() => this.selectAmount(2)}>
                                        2
                                    </div>
                                    <div data-amount="3" className="mintAmountOption three" onClick={() => this.selectAmount(3)}>
                                        3
                                    </div>

                                </div>
                                <button className="btn btn-primary" onClick={() => this.mint(1)}>MINT</button>
                            </div>
                        ) : (
                            // CONNECT CARD
                            <div className="Connect">
                                <h1>CONNECT YOUR WALLET</h1>
                                <div className="widget_text">To proceed with minting, please connect a wallet of your choice.</div>
                                <button className="btn btn-primary" onClick={() => this.connectWalletPressed(this)}>
                                    Connect Wallet
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    //METAMASK NOT INSTALLED
                    <div className="Card">
                        <h1>ERROR</h1>
                        <div>
                            You must install Metamask, a virtual Ethereum wallet, in your
                            browser.
                        </div>
                        <a className="btn btn-primary" rel="noreferrer" target="_blank" href={`https://metamask.io/download.html`}>
                            Get it here
                        </a>
                    </div>
                )}
            </div>
        );
    }
}

export default Main