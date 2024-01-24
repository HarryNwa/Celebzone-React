import React from 'react'

const Header = ({ toggleModal, nbOfContacts}) => {
  return (
    <header className='header'>
        <div className='container'>
            <h3>Celebrity List({nbOfContacts})</h3>
            <button onClick={() => toggleModal(true)} className='btn'>
                <i className='bi bi-plus-square'></i>Add New Celebrity</button>
        </div>
    </header>
  )
}

export default Header