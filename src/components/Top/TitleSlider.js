import React from "react"
import { keyframes } from "react-emotion"

export default ({ items, color, backgroundColor, position, delay, delay2, delay3, delay4 }) => (
  <div
    css={{
      display: `inline`,
      textIndent: `8px`,
      

      "& span": {
        animation: `${topToBottom} 10s linear infinite ${delay}`,
        opacity: 0,
        paddingRight: `8px`,
        paddingLeft: `8px`,
        fontFamily: 'Permanent Marker',
        fontSize: '1.8rem',

        ":nth-child(2)": {
          animationDelay: delay2,
        },

        ":nth-child(3)": {
          animationDelay: delay3,
        },

        ":nth-child(4)": {
          animationDelay: delay4,
        },
      },
    }}
  >
    {items.map(item => (
      <span key={item} css={{ color, backgroundColor, position }}>
        {item}
      </span>
    ))}
  </div>
)

const topToBottom = keyframes({
  "0%": {
    opacity: 0,
  },
  "6%": {
    opacity: 0,
    transform: `translateY(-30px)`,
  },
  "10%": {
    opacity: 1,
    transform: `translateY(0px)`,
  },
  "25%": {
    opacity: 1,
    transform: `translateY(0px)`,
  },
  "29%": {
    opacity: 0,
    transform: `translateY(30px)`,
  },
  "80%": {
    opacity: 0,
  },
  "100%": {
    opacity: 0,
  },
})