import React, { useEffect, useState, componentDidMount } from "react";
import $ from 'jquery'
import {
    connectWallet,
    getCurrentWalletConnected,
} from "../js/walletConnect";

function Main() {
    const metamaskInstalled = window.ethereum;

    const [walletAddress, setWallet] = useState("");
    const [amount, setAmount] = useState("");

    useEffect(() => {
        async function fetchData() {
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
            addWalletListener();
        }
        fetchData()
    }, []);

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                } else {
                    setWallet("");
                }
            });
        }
    }

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setWallet(walletResponse.address);
    };

    function selectAmount(e) {
        $('.mintAmountOption').removeClass('selected')
        let amountSelected = $(e.target)
        amountSelected.addClass('selected')
        setAmount(amountSelected.attr('data-amount'))
    };

    function mint() {
        alert("MINTED: " + amount)
    };

    return (
        <div className='Main'>
            {metamaskInstalled ? (
                <div className='Card'>
                    {walletAddress.length > 0 ? (
                        //MINT WIDGET
                        <div className="Widget">
                            <h1>MINT</h1>
                            <div className="mintAmountContainer">
                                <div data-amount="1" className="mintAmountOption one selected" onClick={selectAmount}>
                                    1
                                </div>
                                <div data-amount="2" className="mintAmountOption two" onClick={selectAmount}>
                                    2
                                </div>
                                <div data-amount="3" className="mintAmountOption three" onClick={selectAmount}>
                                    3
                                </div>

                            </div>
                            <button className="btn btn-primary" onClick={mint}>MINT</button>
                        </div>
                    ) : (
                        // CONNECT CARD
                        <div className="Connect">
                            <h1>CONNECT YOUR WALLET</h1>
                            <div className="widget_text">To proceed with minting, please connect a wallet of your choice.</div>
                            <button className="btn btn-primary" onClick={connectWalletPressed}>
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
                    <a className="btn btn-primary" target="_blank" href={`https://metamask.io/download.html`}>
                        Get it here
                    </a>
                </div>
            )}
        </div>
    );
}

export default Main;
