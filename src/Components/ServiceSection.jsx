import React from 'react'
import { services } from '../data'

const ServiceSection = () => {
  return (
    <section class="section services" id="services">
      <div class="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div class="section-center services-center">
        {services.map((service) => {
          const { id, symbol, title, text } = service
          return (
            <article class="service" key={id}>
              <span class="service-icon">
                <i class={symbol}></i>
              </span>
              <div class="service-info">
                <h4 class="service-title">{title}</h4>
                <p class="service-text">{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ServiceSection
