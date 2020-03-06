import React, { useRef, useEffect, useState } from 'react'
import TimeFrame from './ShareCalendar-TimeFrame'
import FixedCol from './ShareCalendar-FixedTimeCol'
import './ShareCalendar.css'
import ScrollContainer from 'react-indiana-drag-scroll'
import BarColumn from './ShareCalendar-BarColumn'
import Separators from './ShareCalendar-Separators'

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

function ShareCalendar() {
    let containerRef = useRef(null)
    const [containerMeasure, setContainerMeasure] = useState({
        width: 0,
        height: 0,
        isAtTop: true
    })
    const [uiConst, setUIConst] = useState({
        navHeight: 50,
        colWidth: 50,
        rowHeight: 60
    })
    const { navHeight, colWidth, rowHeight } = uiConst

    useEffect(() => {
        if (!containerRef)
            return
        const { current: { container: { current } } } = containerRef
        setContainerMeasure(containerMeasure => ({
            ...containerMeasure,
            width: current.clientWidth,
            height: current.clientHeight
        }))
    }, [containerRef])

    const onEndScroll = (left, top, width, height) => {
        if (top > 0 && containerMeasure.isAtTop)
            setContainerMeasure({ ...containerMeasure, isAtTop: false })

        if (top == 0 && !containerMeasure.isAtTop)
            setContainerMeasure({ ...containerMeasure, isAtTop: true })
    }
    const onStartScroll = () => {
        setContainerMeasure({ ...containerMeasure, isAtTop: false })
    }
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
            vertical={false}
            hideScrollbars={false}
            ref={containerRef}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative'
            }}
            onStartScroll={onStartScroll}
            onEndScroll={onEndScroll}
        >
            <div style={{
                height: 'max-content',
                zIndex: 99,
                minWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                width: 'max-content',
                backgroundColor: 'white',
            }}
            >
                <Separators
                    containerMeasure={containerMeasure}
                    navHeight={navHeight}
                    colWidth={colWidth}
                />

                <div style={{
                    width: 'auto',
                    minWidth: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                    backgroundColor: 'white',
                    zIndex: 2,
                    height: 'max-content'
                }}>
                    <div style={{
                        width: colWidth,
                        height: '100%',
                        left: 0,
                        position: 'sticky',
                        backgroundColor: 'inherit',
                        zIndex: 100,
                    }}>
                        <FixedCol rowHeight={rowHeight} />
                    </div>
                    <div style={{
                        position: 'absolute',
                        left: colWidth,
                        width: '100%',
                        zIndex: 1,
                        top: 0
                    }}>
                        <TimeFrame rowHeight={rowHeight} />
                    </div>
                    <div style={{ flexGrow: 1, width: 'max-content', height: 'auto', display: 'flex', flexDirection: 'row', position: 'relative' }}>
                        <div style={{ width: 100, height: '100%' }}>

                        </div>
                    </div>
                </div>

            </div>
        </ScrollContainer>
    )
}

export default ShareCalendar