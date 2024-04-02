
export function Card() {
    const styles = {
        borderRadius: "10px",
        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.17)",
        padding: "20px",
        margin: "10px",
        textAlign: "center",
        maxWidth: "250px",
        display: "inline-block",
    }

    return (
        <div className="card">
            <img className="card-image" alt="card" src="https://via.placeholder.com/150"></img>
            <h2 className="card-title">Item</h2>
            <p className="card-text">Lorem ipsum dolor sit amet</p>
        </div>
    );
}

