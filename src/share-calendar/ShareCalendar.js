import React, { useRef, useEffect } from 'react'
import TimeFrame from './ShareCalendar-TimeFrame'
import FixedCol from './ShareCalendar-FixedTimeCol'
import './ShareCalendar.css'
import ScrollContainer from 'react-indiana-drag-scroll'
import BarColumn from './ShareCalendar-BarColumn'

const rowHeight = 50
const navHeight = 50

const sampleData = [{
    name: 'user1',
    color: 'green',
    user_plans: [{
        title: 'plan1',
        start: '2020/02/02 11:10',
        finish: '2020/02/02 12:34'
    }, {
        title: 'plan2',
        start: '2020/02/02 11:10',
        finish: '2020/02/02 12:34'
    },
    {
        title: 'plan3',
        start: '2020/02/02 11:10',
        finish: '2020/02/02 12:34'
    }]
},
{
    name: 'user2',
    color: 'grey',
    user_plans: [{
        title: 'plan1',
        start: '2020/02/02 11:10',
        finish: '2020/02/02 12:34'
    }, {
        title: 'plan2',
        start: '2020/02/02 11:10',
        finish: '2020/02/02 12:34'
    },
    {
        title: 'plan3',
        start: '2020/02/02 11:10',
        finish: '2020/02/02 12:34'
    }]
},
{
    name: 'user3',
    color: 'blue',
    user_plans: [{
        title: 'plan1',
        start: '2020/02/02 11:10',
        finish: '2020/02/02 12:34'
    }, {
        title: 'plan2',
        start: '2020/02/02 11:10',
        finish: '2020/02/02 12:34'
    },
    {
        title: 'plan3',
        start: '2020/02/02 11:10',
        finish: '2020/02/02 12:34'
    }]
}]

//Plan dang hien thi random vi tri (xem Component SHareCalendar-Bar.js)
function ShareCalendar() {
    let containerRef = useRef(null)
    const renderDailyPlans = () => {
        const transformedData = sampleData.map(userData => {
            return {
                col_info: userData,
                col_data: userData.user_plans,
                col_color: userData.color
            }
        })

        return transformedData.map((col, index) => {
            return <BarColumn key={index} columnData={col} barType={'plan'} labelType={'user'} />
        })
    }

    return (

        <ScrollContainer
            horizontal={true}
            vertical={true}
            hideScrollbars={false}
            style={{
                width: '100%',
                display: 'flex',
                flexGrow: 1,
                height: '100%'
            }}
            ref={containerRef}
        >
            <div style={{ height: rowHeight * 24 + navHeight + 20, zIndex: 99, minWidth: '100%', display: 'flex', flexDirection: 'row', position: 'relative' }}>
                <div style={{ width: 50, height: '100%', top: 50, left: 0, position: 'absolute' }}>
                    <FixedCol rowHeight={rowHeight} />
                </div>
                <div style={{ marginLeft: 50, flexGrow: 1, position: 'relative', display: 'flex', flexDirection: 'row', }}>
                    <div style={{
                        position: 'absolute',
                        top: navHeight,
                        left: 0,
                        width: '100%',
                    }}>
                        <TimeFrame rowHeight={rowHeight} />
                    </div>
                    {renderDailyPlans()}
                    <div style={{ height: '100%', width: 9000 }}>
                    </div>
                </div>
            </div>
        </ScrollContainer >
    )
}

export default ShareCalendar