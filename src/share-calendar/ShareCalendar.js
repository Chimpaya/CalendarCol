import React, { useRef, useEffect } from 'react'
import TimeFrame from './ShareCalendar-TimeFrame'
import FixedCol from './ShareCalendar-FixedTimeCol'
import './ShareCalendar.css'
import ScrollContainer from 'react-indiana-drag-scroll'

const rowHeight = 50
function ShareCalendar() {
    let containerRef = useRef(null)
    let navRef = useRef(null)

    // useEffect(() => {
    //     const { current: container } = containerRef
    //     const { current: nav } = navRef
    //     container.addEventListener('scroll', () => {
    //         nav.scrollLeft = container.scrollLeft
    //     })

    // }, [containerRef])

    // useEffect(() => {
    //     const { current: container } = containerRef
    //     const { current: nav } = navRef
    //     nav.addEventListener('scroll', () => {
    //         container.scrollLeft = nav.scrollLeft
    //     })

    // }, [navRef])

    return (
        <div style={{
            width: '80%',
            height: '80%',

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
                <div style={{ width: 50, }}>
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
                        height: rowHeight * 24 + 20,
                        overflowX: 'auto',
                        overflowY: 'hidden'
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
                        }}>
                            <TimeFrame rowHeight={rowHeight} />
                        </div>
                        <div style={{ height: '100%', minWidth: '100%', width: 'auto', display: 'flex', flexDirection: 'row' }}>
                            <div style={{ zIndex: 1, height: '100%', width: 200, position: 'relative', padding: 5 }}>
                                <div style={{ width: '100%', height: 50, backgroundColor: 'green', position: 'absolute', top: 90, padding: 10 }}>
                                    <p>
                                        plan 1
                                    </p>
                                </div>
                                <div style={{ width: '100%', height: 90, backgroundColor: 'green', position: 'absolute', top: 300, padding: 10 }}>
                                    <p>
                                        plan 2
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </ScrollContainer>

            </div>

        </div>


    )
}

export default ShareCalendar