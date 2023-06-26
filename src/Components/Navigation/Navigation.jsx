import React from 'react'
import './Navigation.css'

import {Link} from 'react-router-dom'
const Navigation = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="#" className="active">Home</Link>
            </li>
            <li>
              <Link to="#">Adopt</Link>
            </li>
            <li>
              <Link to="#">Donate</Link>
            </li>
            <li>
              <Link to="#">Volunteer</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Rest of the page content */}

    </div>
  )
}

export default Navigation