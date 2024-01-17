import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AuctionItem from './AuctionItem';

function Auction() {
  const [auctionArray, setAuctionArray] = useState([]);

  const [forSale, setSale] = useState(true);

  function getAuction() {
    return axios
      .get('/db/auction/')
      .then((response) => {
        setAuctionArray(response.data);
      })
      .catch((err) => console.error('Could not GET auction items: ', err));
  }

  useEffect(() => {
    getAuction();
  }, []);

  useEffect(() => {
    if (!forSale) {
      getAuction();
      setSale(true);
    }
  }, [forSale]);

  const auctionItems = auctionArray.map((art) => (
    <AuctionItem key={art.imageId} art={art} setSale={setSale} />
  ));

  return <span>{auctionItems}</span>;
}

export default Auction;
