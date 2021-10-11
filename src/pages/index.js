import React from 'react'
import { navigate } from 'gatsby'
import Header from '../component/Header/Header'
import Lolly from '../component/Lolly/Lolly'
import * as styles from "./index.module.css"

const Home = () => {

  const lollies = [
    { fillLollyTop: "#e97393", fillLollyMiddle: "#d23a62", fillLollyBottom: "#bb1161" },
    { fillLollyTop: "#ed265b", fillLollyMiddle: "#f77249", fillLollyBottom: "#f5c64d" },
    { fillLollyTop: "#97e665", fillLollyMiddle: "#8ccb4c", fillLollyBottom: "#a8d838" },
    { fillLollyTop: "#cd2753", fillLollyMiddle: "#d5cfd1", fillLollyBottom: "#5ba3da" },
    { fillLollyTop: "#feefd6", fillLollyMiddle: "#b65ae4", fillLollyBottom: "#c116c1" },
  ]

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.lollies}>
        {lollies.map(({ fillLollyTop, fillLollyMiddle, fillLollyBottom }, index) => (
          <div className={styles.lolly} key={index}>
            <Lolly
              fillLollyTop={fillLollyTop}
              fillLollyMiddle={fillLollyMiddle}
              fillLollyBottom={fillLollyBottom} />
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <button onClick={() => navigate("/createNew")}>Create new lolly to send to a friend</button>
      </div>
    </div>
  )
}

export default Home
