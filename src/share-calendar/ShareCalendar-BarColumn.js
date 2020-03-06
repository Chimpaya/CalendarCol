import React from 'react'
import Bar from './ShareCalendar-Bar'
import { getColumnLabel } from './ShareCalendar-title_helper'
function BarColumn({ colColor, colData, colLabel, barType }) {

    const renderColumn = () => {


        return (
            <div style={{ zIndex: 1, height: '100%', width: 200, borderRight: '1px solid gainsboro', boxSizing: 'border-box' }}>
                <div style={{ width: '100%', height: 50, position: 'absolute', top: 0 }}>
                    <p style={{ textAlign: 'center', fontWeight: 600 }}>fdsf</p>
                </div>
                <div style={{ position: 'relative', width: '100%', height: 0 }}>
                    {/* {
                        colData.map((data, index) =>
                            <Bar key={index} type={barType} color={colColor} data={colData} index={index + 1} />
                        )
                    } */}
                </div>
            </div>
        )
    }
    return (
        renderColumn()
    )
}

export default BarColumn