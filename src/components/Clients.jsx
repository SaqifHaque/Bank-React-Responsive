import React from 'react'
import { clients } from "../constants";
import styles from "../styles";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id}>
            <img/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients