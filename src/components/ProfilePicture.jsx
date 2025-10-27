import React from 'react'

const ProfilePicture = () => {

    const imageUrl = "./src/assets/Foodies logo without Banner 1.png"
    const handleClick = (e) => e.target.style.display = "none"
  return (
    <>
        <img onClick= { (e) => handleClick(e)} src={imageUrl} alt="" />
    </>
  )
}

export default ProfilePicture
