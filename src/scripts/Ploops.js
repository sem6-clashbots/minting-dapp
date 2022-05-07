import logo from '../resources/webLogo.png'
import part1 from '../resources/parts/default.png'
import part2 from '../resources/parts/dark-default.png'
import part3 from '../resources/parts/slim-dark.png'
import part4 from '../resources/parts/slim-default.png'

function Ploops({pos}) {
    return (
        <div className="Ploops" style={{marginTop: pos + 'vh'}}>
            <div className="machine">
                <img src={part1} className="package delay-1"></img>
                <img src={part2} className="package delay-2"></img>
                <img src={part3} className="package delay-3"></img>
                <img src={part4} className="package delay-4"></img>
                <img src={part2} className="package delay-2"></img>
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
