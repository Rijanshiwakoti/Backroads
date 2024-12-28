import React from 'react'
import { tours } from '../data'

const ToursSection = () => {
  return (
    <section class="section" id="tours">
      <div class="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div class="section-center featured-center">
        {tours.map((tour) => {
          const { id, img, Date, name, text, location, duration, cost } = tour
          return (
            <article class="tour-card" key={id}>
              <div class="tour-img-container">
                <img src={img} class="tour-img" alt="" />
                <p class="tour-date">{Date}</p>
              </div>
              <div class="tour-info">
                <div class="tour-title">
                  <h4>{name}</h4>
                </div>
                <p>{text}</p>
                <div class="tour-footer">
                  <p>
                    <span>
                      <i class="fas fa-map"></i>
                    </span>
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ToursSection
