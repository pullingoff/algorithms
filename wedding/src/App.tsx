import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import FullscreenMessage from './components/shared/FullScreenMessage'
import Heading from './components/sections/Heading'
import { Wedding } from './models/wedding'
import Video from './components/sections/Video'

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
  if (error) return <FullscreenMessage type="error" />

  return (
    <div className={cx('container')}>
      <Heading date={wedding?.date} />
      <Video />
    </div>
  )
}

export default App
