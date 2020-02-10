import React from 'react'
import Bar from './ShareCalendar-Bar'
import { getColumnLabel } from './ShareCalendar-title_helper'
function BarColumn({ columnData, barType, labelType }) {

    const renderColumn = () => {
        const { col_color, col_data, col_info } = columnData
        let label = getColumnLabel(col_info, labelType)

        return (
            <div style={{ zIndex: 1, height: '100%', width: 200, borderRight: '1px solid gainsboro', boxSizing: 'border-box' }}>
                <div style={{ width: '100%', height: 50, }}>
                    <p style={{ textAlign: 'center', fontWeight: 600 }}>{label}</p>
                </div>
                <div style={{ position: 'relative', width: '100%', height: 0 }}>
                    {
                        col_data.map((data, index) =>
                            <Bar key={index} type={barType} color={col_color} data={data} index={index + 1} />
                        )
                    }
                </div>

            </div>
        )
    }
    return (
        renderColumn()
    )
}

export default BarColumn