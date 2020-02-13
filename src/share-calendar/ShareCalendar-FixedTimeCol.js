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
                                alignItems: 'flex-top'
                            }}>
                            <div
                                style={{
                                    position: 'absolute',
                                    marginTop: -10,
                                    marginRight: '20%'
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