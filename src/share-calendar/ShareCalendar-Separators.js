import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

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
function Separtors({
    containerMeasure,
    navHeight,
    colWidth
}) {

    const getHorizontalStyle = () => {
        const { width: containerWidth, isAtTop } = containerMeasure
        let left, width
        if (!isAtTop) {
            left = 10
            width = containerWidth - 30
        } else {
            left = 50

            width = containerWidth - left
        }
        return {
            left,
            width
        }
    }

    const getVerticalStyle = () => {
        const { height: containerHeight } = containerMeasure
        let marginTop, height
        marginTop = 30
        height = containerHeight - marginTop
        return {
            height,
            marginTop
        }
    }

    return (
        <div style={{
            width: '100%',
            height: navHeight,
            backgroundColor: 'white',
            position: 'sticky',
            top: 0,
            zIndex: 3,
            paddingLeft: colWidth
        }}>
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'
            }}>
                <div style={{
                    position: 'sticky',
                    top: 0,
                    left: colWidth + 10,
                    backgroundColor: 'gainsboro',
                    width: 1,
                    zIndex: 99,
                    ...getVerticalStyle()
                }}>
                </div>
                <div style={{
                    position: 'sticky',
                    top: navHeight,
                    height: 1,
                    backgroundColor: 'gainsboro',
                    ...getHorizontalStyle()
                }}>
                </div>
            </div>
        </div>
    )
}

Separtors.propTypes = propTypes
Separtors.defaultProps = defaultProps
export default React.memo(Separtors)