import React, { Fragment } from 'react'
import { PriceWrapper } from 'components/PriceComponent'
import FaqComonent from 'components/FaqComponent'
import Logo from 'common/Logo'
import Footer from 'common/Footer'
import './index.scss'
import batImg from 'assets/icn-bat.svg'

const Assets = [
  {
    assetName: 'BAT',
    price: 0.34,
    pricePercentage: 2.69,
    hoursBefore: "3hrs,34 mins ago",
    imgSrc: batImg
  },
  {
    assetName: 'BAT',
    price: 0.34,
    pricePercentage: -2.69,
    hoursBefore: "3hrs,34 mins ago",
    imgSrc: batImg
  },
  {
    assetName: 'BAT',
    price: 0.34,
    pricePercentage: -2.69,
    hoursBefore: "3hrs,34 mins ago",
    imgSrc: batImg
  },
  {
    assetName: 'BAT',
    price: 0.34,
    pricePercentage: -2.69,
    hoursBefore: "3hrs,34 mins ago",
    imgSrc: batImg
  },
  {
    assetName: 'BAT',
    price: 0.34,
    pricePercentage: -2.69,
    hoursBefore: "3hrs,34 mins ago",
    imgSrc: batImg
  },
  {
    assetName: 'BAT',
    price: 0.34,
    pricePercentage: -2.69,
    hoursBefore: "3hrs,34 mins ago",
    imgSrc: batImg
  },
  {
    assetName: 'BAT',
    price: 0.34,
    pricePercentage: -2.69,
    hoursBefore: "3hrs,34 mins ago",
    imgSrc: batImg
  },
]

const ReporterAssets = [
  {
    assetName: 'BAT',
    price: "10 prices",
    imgSrc: batImg
  },
  {
    assetName: 'BAT',
    price: "10 prices",
    imgSrc: batImg
  },
]

function Homepage() {
  return (
    <Fragment>
      <div className="header container">
        <Logo>Zoracles</Logo>
      </div>
      <div className="w-100 main-container">
        <section className="hero">
          <div className="container">
            <div className="header-view d-flex flex-column justify-content-center align-items-center">
              <div className="header-view__header-line">
                <h2 className="header-view__header">Open Price Feed</h2>
              </div>
              <p className="header-view__subheader">
                The Open Price Feed is a system to allow various sources (i.e. reporters) to sign off-chain data about prices and allow any Ethereum account to move that data on-chain.
              </p>
            </div>
          </div>
        </section>
        <section className="prices">
          <div className="container">
            <p className="section-header">Assets</p>
            <PriceWrapper Assets={Assets} />
          </div>
        </section>
        <section className="reporters mb-4">
          <div className="container">
            <p className="section-header">Reporters</p>
            <PriceWrapper Assets={ReporterAssets} />
          </div>
        </section>
        {/* <section className="faq-section">
          <div className="container">
            <FaqComonent />
          </div>
        </section> */}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Fragment>
  )
}

export default Homepage
