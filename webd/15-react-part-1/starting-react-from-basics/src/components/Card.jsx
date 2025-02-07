export default function Card({ children }) {
    return <div style={{ backgroundColor: "white", color: "black", borderRadius: 10, padding: "10px", margin: "10px", display: "flex", flexDirection: "column", justifyContent: "start", gap: "20px", border: "1px solid gray", boxShadow: "0px 6px 20px 0 rgba(0, 0, 0, 0.1)" }}>
        Upper Topbar
        {children}
        Lower bottom footer
    </div>
}