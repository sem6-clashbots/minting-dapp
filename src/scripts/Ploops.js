import logo from '../resources/webLogo.png'

function Ploops({pos}) {
    return (
        <div className="Ploops" style={{marginTop: pos + 'vh'}}>
            <div class="machine">
                <img src={logo} class="package"></img>
                <img src={logo} class="package delay-1"></img>
                <img src={logo} class="package delay-2"></img>
                <img src={logo} class="package delay-3"></img>
                <img src={logo} class="package delay-4"></img>
                <div class="belt">
                    <div class="gear"></div>
                    <div class="TheseAreTheBreaks"></div>
                    <div class="TheseAreTheBreaks_Again"></div>
                </div>
            </div>
        </div>
    );
}

export default Ploops;
