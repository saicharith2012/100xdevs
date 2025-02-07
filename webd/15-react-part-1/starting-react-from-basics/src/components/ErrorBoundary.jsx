import React from 'react'

function Card1() {
    throw new Error("Error while rendering")
    return (
        <div style={{ backgroundColor: "papayawhip", borderRadius: "20px", padding: "20px", margin: "20px" }}>
            hi there
        </div>
    )
}

function Card2() {
    return (
        <div style={{ backgroundColor: "lavenderblush", borderRadius: "20px", padding: "20px", margin: "20px" }}>
            hi there
        </div>
    )
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ backgroundColor: "papayawhip", borderRadius: "20px", padding: "20px", margin: "20px" }}>
                    Something went wrong.
                </div>
            )
        }

        return this.props.children
    }
}

export { Card1, Card2, ErrorBoundary }