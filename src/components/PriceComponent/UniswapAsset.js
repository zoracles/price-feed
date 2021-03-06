import React, { useState, useEffect, Fragment } from 'react'
import { getDerivedETHFromUniswap } from 'API'
import _ from 'lodash'
import moment from 'moment'
import { request } from 'graphql-request'
import {useInterval} from 'react-use';
import Spinner from 'assets/spinner.svg'

const Asset = ({ pricePair, eth }) => {
  const { address, symbol } = pricePair
  const [assetName, setAssetName] = useState('')
  const [pricePercentage, setPricePercentage] = useState(null)
  const [price, setPrice] = useState(null)
  const [timestamp, setTimestamp] = useState(null)
  const [priceFetchTime, setPriceFetchTime] = useState(0)
  const [pastTime, setPastTime] = useState(0)
  useInterval(() => {
    setPriceFetchTime(t => t + 1)
  }, 100000);

  useInterval(() => {
    const timeDiff = moment().diff(timestamp)
    setPastTime(moment.utc(timeDiff).format('mm [min],ss [secs]'))
  }, 1000)
  useEffect(() => {
    request('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', getDerivedETHFromUniswap, {address}).then(({token}) => {
      const { derivedETH } = token;
      const priceFromAPI = derivedETH;
      setTimestamp(moment())
      if (priceFromAPI === null)
        setPricePercentage(0)
      else {
        if (price === null)
          setPricePercentage(0);
        else
          setPricePercentage(parseFloat(((parseFloat(price) - parseFloat(priceFromAPI)) / parseFloat(price) * 100)))
      }
      setPrice(parseFloat(priceFromAPI))
      setAssetName(symbol)
    }).catch(e => console.log(e))
  }, [priceFetchTime])
  return (
    <div className="prices-card">
      {pastTime && assetName.length > 0 ? <Fragment>
        <div className="prices-card__text-section">
          <div className="prices-card__text">
            {assetName}
          </div>
          <div className="prices-card__subtext-section">
            <h3 className="prices-card__text">{price > 0 && "$"}{(price * eth).toFixed(2)}</h3>
            <p className={`prices-card__subtext ${pricePercentage < 0 ? "prices-card__subtext--red" : "prices-card__subtext--green"}`}>
              {pricePercentage > 0 && '+'}{(pricePercentage * eth).toFixed(2)}{typeof pricePercentage === "number" && "%"}
            </p>
          </div>
          <div className="prices-card__subtext-section">
            <p className="prices-card__subtext">{pastTime} ago</p>
          </div>
        </div>
        <img className="prices-card__icon" src={require(`../../assets/${symbol.toLowerCase()}.png`)} alt="icon" />
      </Fragment>: <img src={Spinner} alt="Spinner" />}
    </div>
  )
}

export default Asset;