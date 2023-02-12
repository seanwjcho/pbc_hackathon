import { Col, Layout, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { CollectionCard } from '../../components/CollectionCard';
import { useCollections } from '../../hooks/useCollections';

export const CollectionsView = () => {
  const { liveCollections } = useCollections();

  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      <span className={'collections-title'}>How It Works</span>
      <h6>CharityChain NFT Holders are granted voting power in the associated DAO.

The DAO is responsible for making decisions on the allocation of funds, project progress, and any other critical issues related to the charity. NFT holders can vote on proposals and have a say in the direction of their chosen charity project

NFT holders will be ranked based on their activity within the DAO. At the end of the project, the best holders will be drafted for an in-person experience related to the actual project they funded</h6>
    </Layout>
  );
};
