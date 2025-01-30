import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Heading from './components/sections/Heading'
import { Wedding } from './models/wedding'
import Video from './components/sections/Video'
import ImageGallery from './components/sections/ImageGallery'
import Intro from './components/sections/Intro'
import FullscreenMessage from './components/shared/FullscreenMessage'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8888/wedding')
      .then((resp) => {
        if (!resp.ok) {
          setError(true)
          throw new Error('청첩장 데이터를 불러오지 못 했습니다.')
        }
        return resp.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        console.error(e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <FullscreenMessage type="loading" />
  if (error || !wedding) return <FullscreenMessage type="error" />

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={wedding?.date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <ImageGallery images={galleryImages} />
      {JSON.stringify(wedding)}
    </div>
  )
}

export default App
