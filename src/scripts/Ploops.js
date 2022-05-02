import logo from '../resources/webLogo.png'

function Ploops({pos}) {
    return (
        <div className="Ploops" style={{marginTop: pos + 'vh'}}>
            <div className="machine">
                <img src={logo} className="package"></img>
                <img src={logo} className="package delay-1"></img>
                <img src={logo} className="package delay-2"></img>
                <img src={logo} className="package delay-3"></img>
                <img src={logo} className="package delay-4"></img>
                <div className="belt">
                    <div className="gear"></div>
                    <div className="TheseAreTheBreaks"></div>
                    <div className="TheseAreTheBreaks_Again"></div>
                </div>
            </div>
        </div>
    );
}

export default Ploops;
