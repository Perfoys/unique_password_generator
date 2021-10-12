

const Generat = () => {
    return (
        <div className="App-generator">
            <input className="password-field" placeholder="New password" type="text"></input>
            <div className="password-input">
                <label>Password length</label>
                <input className="password-length" type="number"></input>
            </div>
            <div className="password-input">
                <label>Include lowercase</label>
                <input className="password-lwcase" type="checkbox" value="Include lowercase"></input>
            </div>
            <div className="password-input">
                <label>Include uppercase</label>
                <input className="password-upcase" type="checkbox" value="Include uppercase"></input>
            </div>
            <div className="password-input">
                <label>Include numbers</label>
                <input className="password-number" type="checkbox" value="Include numbers"></input>
            </div>
            <div className="password-input">
                <label>Include symbol</label>
                <input className="password-symbol" type="checkbox" value="Include symbol"></input>
            </div>
            <div className="password-btn">
                <button className="btn-generate">Get new password</button>
            </div>
        </div>
    )
}

export default Generat