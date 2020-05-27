import React from "react"
import PropTypes from "prop-types"
import moment from "moment"
import style from "../styles/repository.module.scss"
import "@fortawesome/fontawesome-free/css/all.css"

const Repository = ({ name, description, forkCount, createdAt, url }) => {
  return (
    <div className={style.card}>
      <div className={style.content}>
        <h3>{name}</h3>
        <div className={style.subtitle}>
          {moment(createdAt).format("MM/DD/YYYY")}
        </div>
        <p className={style.description}>
          {description || "Description not available"}
        </p>

        <div className={style.details}>
          <div className={style.inner}>
            <div>
              <a id="repoUrl" className={style.button} href={url}>
                Go !
              </a>
            </div>
            <div className={style.options}>
              <div>
                <a>
                  <i class="fas fa-code-branch"></i>
                  &nbsp;{forkCount} forks
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  forkCount: PropTypes.number,
  createdAt: PropTypes.object,
  url: PropTypes.string.isRequired,
}

export default Repository
