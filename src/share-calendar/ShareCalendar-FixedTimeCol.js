import React from 'react'

function FixedCol({ rowHeight }) {
    return (
        <>
            {
                Array(24).fill(null).map((item, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                height: rowHeight,
                                width: '100%',
                                position: 'relative',
                                alignItems: 'flex-top'
                            }}>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: -10,
                                    right: '20%'
                                }}>
                                {`${index}:00`}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default FixedCol