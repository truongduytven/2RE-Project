// CountdownTimer.tsx
import React, { useState, useEffect } from 'react'
import './style.css'

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const endTime = new Date('01/01/2025 00:00:00').getTime()
    const now = new Date().getTime()
    const distance = endTime - now

    const days = Math.floor(distance / (24 * 60 * 60 * 1000))
    const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (3600 * 1000))
    const minutes = Math.floor((distance % (3600 * 1000)) / (60 * 1000))
    const seconds = Math.floor((distance % (60 * 1000)) / 1000)

    return { ngày: days, giờ: hours, phút: minutes, giây: seconds }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='flex justify-center items-center bg-cover mt-4'>
      <div className='flex justify-center items-center'>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div className='flex flex-col gap-4 items-center'>
            <div
              key={unit}
              className='number-countdown bg-white w-16 h-16 flex justify-center items-center shadow-custom rounded-lg text-3xl mx-2 relative'
            >
              {value}
            </div>
            <span className='text-lg'>{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountdownTimer
