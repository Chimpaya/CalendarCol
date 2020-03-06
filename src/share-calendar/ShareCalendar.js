import React, { useRef, useEffect, useState } from 'react'
import TimeFrame from './ShareCalendar-TimeFrame'
import FixedCol from './ShareCalendar-FixedTimeCol'
import './ShareCalendar.css'
import ScrollContainer from 'react-indiana-drag-scroll'
import BarColumn from './ShareCalendar-BarColumn'
import NavBar from './ShareCalendar-NavBar'
import Separators from './ShareCalendar-Separtors'
import useStyles from './ShareCalendar-Style'

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

    /* variables */

    //states
    const [containerMeasure, setContainerMeasure] = useState({ //measure of scrollContainer, use for rendering Separators
        width: 0,
        height: 0,
        isAtTop: true
    })
    const [uiConst, setUIConst] = useState({
        navHeight: 50,          //height of navBar
        colWidth: 50,           //width of fixed time col
        rowHeight: 60           //height of each time frame
    })
    //styles
    const classes = useStyles.ShareCalendar(uiConst)
    //refs
    let containerRef = useRef(null)
    //destructure variables
    const { navHeight, colWidth, rowHeight } = uiConst

    /* End of variables */


    /* useEffect hooks */

    //set scrollContainer measurements
    useEffect(() => {
        if (!containerRef)
            return
        const { current } = containerRef
        setContainerMeasure(containerMeasure => ({
            ...containerMeasure,
            width: current.clientWidth,
            height: current.clientHeight
        }))
    }, [containerRef])

    /* End of useEffect hooks */


    /* Handlers */

    //onScroll handlers for scrollContainer
    //detect when scrollContainer is scrolled to the top
    const onEndScroll = (left, top, width, height) => {
        if (top > 0 && containerMeasure.isAtTop)
            setContainerMeasure({ ...containerMeasure, isAtTop: false })

        if (top == 0 && !containerMeasure.isAtTop)
            setContainerMeasure({ ...containerMeasure, isAtTop: true })
    }
    const onStartScroll = () => {
        setContainerMeasure({ ...containerMeasure, isAtTop: false })
    }

    /* End of Handlers */


    return (
        <div
            ref={containerRef}
            className={classes.scrollContainer}
        >
            <Separators
                containerMeasure={containerMeasure}
                navHeight={navHeight}
                colWidth={colWidth}
            />
            <NavBar
                navHeight={navHeight}
                colWidth={colWidth}
            />
            <ScrollContainer
                horizontal={true}
                vertical={false}
                hideScrollbars={false}
                style={{ flexGrow: 1, width: '100%', overflowY: 'auto' }}>
                <div className={classes.calendarContainer}>
                    <div className={classes.fixedcolContainer}>
                        <FixedCol rowHeight={rowHeight} />
                    </div>
                    <div className={classes.timeframeContainer}>
                        <TimeFrame rowHeight={rowHeight} />
                    </div>
                    <div className={classes.columnContainer}>
                        <div style={{ width: 2000, height: '100%' }}>

                        </div>
                    </div>
                </div>
            </ScrollContainer>

        </div>
    )
}

export default ShareCalendar