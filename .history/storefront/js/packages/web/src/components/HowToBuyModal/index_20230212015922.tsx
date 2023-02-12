import { InstructionsModal } from '../InstructionsModal';
import React from 'react';
import { LABELS } from '../../constants';
import { ConnectButton } from '@oyster/common';

interface HowToBuyModalProps {
  buttonClassName: string;
  onClick?: any;
}

export const HowToBuyModal: React.FC<HowToBuyModalProps> = ({
  buttonClassName,
  onClick,
}) => {
  return (
    <InstructionsModal
      buttonClassName={buttonClassName}
      buttonText="How to Buy Charity Chain NFTs"
      modalTitle={`Buying NFTs through Charity Chain`}
      cardProps={[
        {
          title: 'Create a SOL wallet',
          imgSrc: 'solana.png',
          description: `SOL is the cryptocurrency we use for purchases on Charity Chain. To keep your SOL safe, you’ll need a crypto wallet—we recommend using one called Phantom. Just head to Phantom’s site, install the Chrome extension, and create an account.`,
        },
        {
          title: 'Add funds to your wallet',
          imgSrc: 'addmoney.png',
          description: `To fund your wallet, you’ll need to purchase SOL tokens. Open your wallet, and tap “Deposit SOL”.`,
        },
        {
          title: `Connect your wallet to Charity Chain.`,
          imgSrc: 'charitychain.jpg',
          description: `To connect your wallet, tap “Connect Wallet” here on the site. Select the Phantom option, and your wallet will connect. After that, you can start bidding on NFTs.`,
          endElement: <ConnectButton className={'secondary-btn'} />,
        },
      ]}
      onClick={onClick}
    />
  );
};
