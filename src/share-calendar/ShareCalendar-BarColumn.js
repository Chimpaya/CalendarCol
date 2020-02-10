import React from 'react'

function BarColumn() {
    return (
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
    )
}

export default BarColumn