import React from 'react'

export default function Header({titulo}) {
console.log(titulo)
  return (
    <div>
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{titulo}</a>
  </div>
</nav>
    <div>
      
    </div>
    </div>
  )
}
