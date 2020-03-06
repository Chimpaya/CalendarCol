import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useStyles from './ShareCalendar-Style'

const propTypes = {
    containerMeasure: PropTypes.exact({
        width: PropTypes.number,
        height: PropTypes.number,
        isAtTop: PropTypes.bool
    }).isRequired,
    navHeight: PropTypes.number,
    colWidth: PropTypes.number
}
const defaultProps = {
    navHeight: 50,
    colWidth: 50
}

function Separators({
    containerMeasure,
    navHeight,
    colWidth
}) {
    const classes = useStyles.Separators({ containerMeasure, navHeight, colWidth })
    const getHorizontalStyle = () => {
        const { width: containerWidth, isAtTop } = containerMeasure
        let left, width, top

        top = navHeight
        if (!isAtTop) {
            left = 10
            width = containerWidth - 30
        } else {
            left = 50
            width = containerWidth - left
        }
        return {
            left,
            width,
            top
        }
    }

    const getVerticalStyle = () => {
        const { height: containerHeight } = containerMeasure
        let top, height, left

        top = 30
        height = containerHeight - top
        left = colWidth + 10

        return {
            height,
            top,
            left
        }
    }

    return (
        <>
            <div
                className={classes.verticalWrapper}
                style={getVerticalStyle()}
            >
            </div>
            <div
                className={classes.horizontalWrapper}
                style={getHorizontalStyle()}
            >
            </div>
        </>
    )
}

Separators.propTypes = propTypes
Separators.defaultProps = defaultProps
export default React.memo(Separators)