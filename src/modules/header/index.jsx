import React from 'react'
import './header.scss'

const HeaderComponent = () => {
  return (
    <div style={{ display: "flex", padding: "20px 0 0 0", flexWrap: "wrap", textAlign: "center", alignItems: "center", justifyContent: "center", background: "transparent" }}>
      <div style={{ flex: 1, background: "transparent" }}>
        <h3 style={{ margin: "5px" }}>MSDSPT2025B</h3>
        <p style={{ margin: "5px" }}>Learning Team 1</p>
      </div>
      <div style={{ flex: 1.5, display: "flex", flexDirection: "column", alignItems: "center", background: "transparent"  }}>
        <h2 style={{ margin: 0 }}>MACHINE LEARNING 3</h2>
      </div>
      <div style={{ flex: 1, background: "transparent"  }}>
        <h3 style={{ margin: "5px" }}>Tuesday</h3>
        <p style={{ margin: "5px" }}>March 18, 2025</p>
      </div>
    </div>
  )
}

export default HeaderComponent