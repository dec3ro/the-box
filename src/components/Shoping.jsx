import { useState, useEffect } from 'react'
import defaultImage from '../../public/logo_box.png'
import '../custom.css'

export const Shoping = () => {
  const [imageIndexes, setImageIndexes] = useState([])

  useEffect(() => {
    const shuffledIndexes = Array.from(
      { length: 38 },
      (_, index) => index + 1
    ).sort(() => Math.random() - 0.5)

    setImageIndexes(shuffledIndexes)
  }, [])

  const uniqueImages = imageIndexes.map((index) => `/products/${index}.avif`)

  const handleImageClick = (index) => {
    const number = '+51902640753'
    let message = 'Hola, quiero más información sobre '

    if (index >= 1 && index <= 8) {
      message += 'los guantes Lishen rosados'
    } else if (
      (index >= 9 && index <= 20) ||
      [28, 29, 30, 31, 32, 33].includes(index)
    ) {
      message += 'los guantes WSD Boxing Fighting'
    } else if (index >= 21 && index <= 27) {
      message += 'los guantes Twins Special'
    } else if ([34, 36, 37].includes(index)) {
      message += 'el polo Dry Fit'
    } else if ([35, 38].includes(index)) {
      message += 'el vendas KM'
    }

    // const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(
    //   message
    // )}`
    // window.open(whatsappUrl, '_blank')
    console.log(index + ' ' + message)
  }

  return (
    <main className="grid-container px-4">
      {uniqueImages.map((image, index) => (
        <figure
          key={index}
          className={`grid-item ${
            index % 7 === 0 || index % 6 === 0 ? 'double' : ''
          } cursor-pointer animate-fade-in`}
          style={{
            gridColumn: `span ${index % 7 === 0 || index % 6 === 0 ? 2 : 1}`
          }}
          onClick={() => handleImageClick(imageIndexes[index])}
        >
          {image ? (
            <img
              src={image}
              alt={`Image ${imageIndexes[index]}`}
              className="w-full h-auto"
            />
          ) : (
            <img
              src={defaultImage}
              alt="Default Image"
              className="w-full h-auto"
            />
          )}
        </figure>
      ))}
    </main>
  )
}
