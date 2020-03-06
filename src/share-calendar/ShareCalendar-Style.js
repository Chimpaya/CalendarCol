import { createUseStyles, useTheme, ThemeProvider } from 'react-jss'

export default {
    ShareCalendar: createUseStyles({
        scrollContainer: {
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
        },
        contentContainer: {
            height: '100%',
            zIndex: 99,
            minWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: 'max-content',
            backgroundColor: 'white',
        },
        calendarContainer: {
            width: 'max-content',
            minWidth: '100%',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            backgroundColor: 'white',
            zIndex: 2,
            height: 'max-content'
        },
        fixedcolContainer: ({ colWidth }) => ({
            width: colWidth,
            height: '100%',
            left: 0,
            position: 'sticky',
            backgroundColor: 'inherit',
            zIndex: 100,
        }),
        timeframeContainer: {
            position: 'absolute',
            left: 0,
            width: '100%',
            zIndex: 1,
            top: 0
        },
        columnContainer: {
            flexGrow: 1,
            width: 'max-content',
            height: 'auto',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative'
        }
    }),
    Separators: createUseStyles({
        separatorContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
        verticalWrapper: {
            position: 'absolute',
            top: 0,
            backgroundColor: 'gainsboro',
            width: 1,
            zIndex: 99,
        },
        horizontalWrapper: {
            position: 'absolute',
            height: 1,
            backgroundColor: 'gainsboro',
            zIndex: 99
        }
    })
}