import React, { useEffect } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from '@solana/wallet-adapter-react';
import CandyMachine from "../components/CandyMachine"

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
    const wallet = useWallet();
    useEffect(() => {
        renderNotConnectedContainer();
        if (wallet) {
             console.log("Phantom Wallet Found.", wallet.publicKey)
        }
        // Here I need a condition that checks if the wallet is connected
    }, [wallet]);
    // Actions
    const renderNotConnectedContainer = () => (
        <div>
            <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />

            <div className="button-container">
                <WalletMultiButton className="cta-button connect-wallet-button" />
            </div>
        </div>
    );

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">Stable Diffusion Drop</p>
                    <p className="sub-text">Noone cares really</p>
                    {/* Render your connect to wallet button right here */}
                    {wallet.publicKey ? <CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}
                </div>

                
                    <div className="badge-container grow">
                        <a
                        href="https://twitter.com/Arghyad18"
                        target="_blank"
                        rel="noreferrer"
                        >
                        <div className="badge">
                            <p>build by Arghya</p>
                        </div>
                        </a>
                    </div>
               
            </div>
        </div>
    );
};

export default Home;