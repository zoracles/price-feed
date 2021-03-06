import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Asset = ({assetName, price, pricePercentage, hoursBefore, imgSrc}) => {
  return (
    <div className="prices-card">
      <div className="prices-card__text-section">
        <div className="prices-card__text">
          {assetName}
        </div>
        <div className="prices-card__subtext-section">
          <h3 className="prices-card__text">{typeof price === "number" && "$"}{price}</h3>
          <p className={`prices-card__subtext ${pricePercentage < 0 ? "prices-card__subtext--red" : "prices-card__subtext--green"}`}>
            {pricePercentage > 0 && '+'}{pricePercentage}{typeof pricePercentage === "number" && "%"}
          </p>
        </div>
        <div className="prices-card__subtext-section">
          <p className="prices-card__subtext">{hoursBefore}</p>
        </div>
      </div>
      <img className="prices-card__icon" src={imgSrc} alt="icon" />
    </div>
  )
}

const DataSourceWrapper = ({ Assets }) => {
  return (
    <div className="row">
      {
        Assets.map((asset, index) => 
        <div key={`dataSource-${index}`} className="col-xs-6 col-sm-6 col-lg-3">
          <Link to={asset.link} style={{textDecoration: 'none'}}>
            <Asset {...asset} />
          </Link>
        </div>)
      }
    </div>
  )
}

export default DataSourceWrapper