import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    navHeight: PropTypes.number,
    colWidth: PropTypes.number
}
const defaultProps = {
    navHeight: 50,
    colWidth: 50
}

function NavBar({
    Separators,
    navHeight,
    colWidth
}) {

    return (
        <div style={{
            width: '100%',
            minHeight: navHeight,
            backgroundColor: 'white',
            position: 'relative',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 50,
        }}>
            <div style={{ flex: 1, minWidth: 900, height: '100%', backgroundColor: 'blue', marginRight: 10 }}>

            </div>
            <div style={{ flex: 1, minWidth: 900, height: '100%', backgroundColor: 'blue', marginRight: 10 }}>

            </div>
            <div style={{ flex: 1, minWidth: 900, height: '100%', backgroundColor: 'blue', marginRight: 10 }}>

            </div>

        </div>
    )
}

NavBar.propTypes = propTypes
NavBar.defaultProps = defaultProps
export default React.memo(NavBar)