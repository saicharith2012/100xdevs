import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [currentTab, setCurrentTab] = useState("feed")
    const [notificationCount, setNotificationCount] = useState(0)

    useEffect(() => {

        console.log("above setInterval")
        // starting a clock to independent of component rendering
        let interval = setInterval(() => {
            // 
            // setNotificationCount(count + 1) --> since useEffect runs only once during first render in this case
            // it locks the count value to be 1 and keep on rendering 2 on the viewport
            // to solve this set function is passed with the a function that increments the prevcount value everytime it is called.
            // *functional update
            setNotificationCount((prevCount) => prevCount + 1)
        }, 5000)

        // since the app is in strict mode, clearing the interval once it unmounts after the first render.
        // cleanup function ---> runs when the component unmounts
        return () => { clearInterval(interval) }
    }, [])
    // the state variables are not updated inside the useEffect after its first rerender, 
    // in order to updated them, the state variables need to be passed into the dependency array.
    // But in this case, the count variable is not passed into the array, since it caused the useEffect run every 
    // time the count is changed and thus creating a new clock for every render of count.


    // The clock in the above setInterval is created as a side Effect, hence it needs to be cleared at the component unmount 
    // using a cleanup function.
    // otherwise, it will run forever.

    useEffect(() => {
        console.log(`Sending request to backend to get data for the ${currentTab} tab `)
    }, [currentTab])
    return (
        <div className='navbar' style={{
            height: "58px",
            position: "fixed",
            left: "0px",
            right: "0px",
            top: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px 20px",
            boxSizing: "border-box",
            backgroundColor: "rgb(241, 241, 233)",
            zIndex: "101",
            borderBottom: "1px solid gray",
        }}>
            <div style={{}}>

                <button style={{ fontFamily: "inherit", color: currentTab === "feed" ? "red" : "black" }} onClick={() => setCurrentTab("feed")}>Feed</button>
                <button style={{ fontFamily: "inherit", color: currentTab === "notifications" ? "red" : "black" }} onClick={() => setCurrentTab("notifications")}>Notifications</button>
                <button style={{ fontFamily: "inherit", color: currentTab === "messages" ? "red" : "black" }} onClick={() => setCurrentTab("messages")}>Messages</button>
                <button style={{ fontFamily: "inherit", color: currentTab === "jobs" ? "red" : "black" }} onClick={() => setCurrentTab("jobs")}>Jobs</button>
            </div>

            <div className='notification-icon' style={{ position: "relative" }}>
                <img src='https://img.icons8.com/windows/32/appointment-reminders--v1.png' style={{ width: "32px", height: "32px", position: "relative" }}></img>
                <div style={{ display: notificationCount ? "block" : "none" }}>
                    <div style={{
                        position: "absolute",
                        top: "-10%",
                        left: "40%",
                        padding: "4px 6px",
                        backgroundColor: "#cb112d",
                        color: "whitesmoke",
                        fontWeight: "800",
                        borderRadius: "50px",
                        fontSize: "13px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>{notificationCount}</div>
                </div>
            </div>
        </div>)
}