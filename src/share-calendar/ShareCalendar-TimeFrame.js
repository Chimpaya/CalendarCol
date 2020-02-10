import React from 'react'
import { Grid } from '@material-ui/core'

function TimeFrame({ rowHeight }) {
    return (
        <>
            {
                Array(24).fill(null).map((item, index) => {
                    return (
                        <div style={{
                            boxSizing: 'border-box',
                            MozBoxSizing: 'border-box',
                            WebkitBoxSizing: 'border-box',
                            borderTop: '1px solid grey',
                            height: rowHeight,
                            width: '100%'
                        }}
                            key={index}
                        >

                        </div>
                    )
                })
            }
        </>
    )
}

export default TimeFrame