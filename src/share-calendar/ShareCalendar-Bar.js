import React from 'react'
import { getBarTitle } from './ShareCalendar-title_helper'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Bar({ type, color, data, index }) {
  const renderBar = () => {
    const { height, top } = data
    const title = getBarTitle(data, type)

    return (
      <div style={{
        width: '100%',
        height: getRandomInt(60, 100),
        top: getRandomInt(90 * index, 170 * index),
        backgroundColor: color,
        position: 'absolute',
        padding: 10,
        boxSizing: 'border-box',
        borderRadius: 5,
        border: '1px solid white'
      }}>
        {title}
      </div>

    )
  }
  return (
    renderBar()
  )
}

export default Bar