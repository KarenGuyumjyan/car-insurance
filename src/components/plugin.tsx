import { $damageList, addDamageList} from '../store/store.ts';
import { useUnit } from 'effector-react/compat';
import './plugin.css';
import CarImage from "../assets/carTopView.png";

const PluginApp = () => {

    const damageList = useUnit($damageList)
    const carAreas = [
        ['A1', 'A2', 'A3', 'A4'],
        ['B1', 'B2', 'B3', 'B4', 'B5'],
        ['C1', 'C2', 'C3', 'C4']
    ]

    return (
        <div className="container">
            <img src={CarImage} alt="React logo"/>
            <div className="firstArea AreaLine">
                {
                    carAreas[0].map((area) => (
                        <div className="round" key={area}>
                            <input type="checkbox" id={area} onClick={() => addDamageList(area)}/>
                            <label htmlFor={area}></label>
                        </div>
                    ))
                }
            </div>
            <div className="secondArea AreaLine">
                {
                    carAreas[1].map((area) => (
                        <div className="round" key={area}>
                            <input type="checkbox" id={area} onClick={() => addDamageList(area)}/>
                            <label htmlFor={area}></label>
                        </div>))
                }
            </div>
            <div className="thirdArea AreaLine">
                {
                    carAreas[2].map((area) => (
                        <div className="round" key={area}>
                            <input type="checkbox" id={area} onClick={() => addDamageList(area)}/>
                            <label htmlFor={area}></label>
                        </div>))
                }
            </div>
            <button onClick={() => console.log(damageList)}>Send Report</button>
        </div>
    )
}

export default PluginApp;