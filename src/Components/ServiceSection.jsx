import React from 'react'
import { services } from '../data'

const ServiceSection = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, symbol, title, text } = service
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={symbol}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ServiceSection
