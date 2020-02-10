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
        <div style={{
            width: '100%',
            height: '100%',
        }}>
            <div style={{
                display: 'flex',
                height: '100%',
                flexDirection: 'row',
                overflowY: 'auto',
                paddingTop: 10,
                paddingLeft: 10,
                width: '100%'
            }}>
                <div style={{ width: 50, marginTop: 50 }}>
                    <FixedCol rowHeight={rowHeight} />
                </div>
                <ScrollContainer
                    horizontal={true}
                    vertical={false}
                    hideScrollbars={false}
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexGrow: 1,
                        height: rowHeight * 24 + navHeight + 20,
                        overflowX: 'auto',
                        overflowY: 'hidden',
                    }}
                    ref={containerRef}
                >
                    <div style={{ width: 'auto', position: 'relative', minWidth: '100%' }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            // border: '1px solid red',
                            boxSizing: 'border-box',
                            MozBoxSizing: 'border-box',
                            WebkitBoxSizing: 'border-box',
                            marginTop: navHeight
                        }}>
                            <TimeFrame rowHeight={rowHeight} />
                        </div>
                        <div style={{ height: '100%', zIndex: 99, minWidth: '100%', width: 'auto', display: 'flex', flexDirection: 'row' }}>
                            {renderDailyPlans()}
                        </div>
                    </div>
                </ScrollContainer>

            </div>

        </div >


    )
}

export default ShareCalendar