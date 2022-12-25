import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './HomeStyle.css'
import config from './config'
import {clustering, box, radar, radar_single, area} from './Graphs/graphs'


function Home() {
    // pilot name from the user
    const [name, setName] = useState('Seaqueue')
    const [model, setModel] = useState('')
    const [allPilotNames, setAllPilotNames] = useState(["Seaqueue", "George", "Coco"])

    // KSAP Model
    const [ksapModel, setKsapModel] = useState(true)
    const [radarKsap, setRadarKsap] = useState([])
    const [boxKsap, setBoxKsap] = useState([[1,1.5,1.7],[2,1.3,1],[3.2,2.1,1.6]])
    const [radarFilter, setRadarFilter] = useState('all')
    const [select2, setSelect2] = useState(false)
    const [select3, setSelect3] = useState(false)
    const [graph1, setGraph1] = useState(true)
    const [color1, setColor1] = useState("gold")
    const [graph2, setGraph2] = useState(false)
    const [color2, setColor2] = useState("aquamarine")
    const [graph3, setGraph3] = useState(false)
    const [color3, setColor3] = useState("aquamarine")
    
    // Helping Model
    const [helpingModel, setHelpingModel] = useState(false)
    const [helpKsapValue, setHelpKsapValue] = useState([])
    const [helpName, setHelpName] = useState('')
    
    // Eliminate Model
    const [eliminateModel, setEliminateModel] = useState(false)
    const [pilotsToCompare, setPilotsToCompare] = useState([])
    const [eliminateFilter, setEliminateFilter] = useState(1)
    const [eliminateKsapValues, setEliminateKsapValues] = useState([])
    const [pilotsBelowAverage, setPilotsBelowAverage] = useState([])


    const handleModels = () => {
        if (model === 'ksapModel'){
            setKsapModel(true)
            setHelpingModel(false)
            setEliminateModel(false)
        }
        else if (model === 'helpModel'){
            setHelpingModel(true)
            setKsapModel(false)
            setEliminateModel(false)
        }
        else if (model === 'eliminateModel'){
            setEliminateModel(true)
            setKsapModel(false)
            setHelpingModel(false)
        }
    }


    // getting the pilot data
    const getPilot = async () => {
        // console.log("radarFileter", radarFilter)
        try {
            // console.log("name: ", name)
            // const response = await axios.post(config.developmentHost + '/pilot/get_radar', {
            const response = await axios.post(config.productionHost + '/pilot/get_radar', {
                name: name,
                filter: radarFilter,
            });
            return response;
        } catch(e) {
            console.log(e);
        }
    }


    const handleGet = e => {
        e.preventDefault();
        let input = document.getElementById("searchInput");
        input.value = '';
        try {
            async function fetchData() {
            const response = await getPilot();
            // console.log("response:", response.data);
            setRadarKsap(response.data)
        }
        fetchData()
        // setName('')
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        async function fetchBox() {
            try {
                // const response = await axios.post(config.developmentHost + '/pilot/get_box');
                const response = await axios.post(config.productionHost + '/pilot/get_box');
                console.log("boxKsap", response.data)
                setBoxKsap(response.data)
            } catch(e) {
                console.log(e);
            }
        }
        fetchBox()
        handleModels()

        async function fetchAllPilots() {
            try {
                // const response = await axios.post(config.developmentHost + '/pilot/get_all_pilot');
                const response = await axios.post(config.productionHost + '/pilot/get_all_pilot');
                console.log("all pilot names:", response.data)
                setAllPilotNames(response.data)
            } catch(e) {
                console.log(e);
            }
        }
        fetchAllPilots()
    }, [model])

    // Helping Model
    const handleHelpModel = async() => {
        console.log("helpModel: ", name)
        try {
            // const response = await axios.post(config.developmentHost + '/pilot/help_model', {
            const response = await axios.post(config.productionHost + '/pilot/help_model', {
                name: name
            });
            console.log("Helping Model: ", response.data)
            setHelpKsapValue(response.data)
            const n = document.getElementById('helpSearchInput')
            n.value = ''
            setHelpName(name)
            setName('')
        } catch(e) {
            console.log(e);
        }
    }


    // Eliminate Model 
    const handleEliminateModel = async () => {
        console.log("pilotsToCompare: ", pilotsToCompare)
        console.log("eliminate Filter: ", eliminateFilter)
        try {
            // const response = await axios.post(config.developmentHost + '/pilot/eliminate_model', {
            const response = await axios.post(config.productionHost + '/pilot/eliminate_model', {
                pilotToCompare: pilotsToCompare,
                filter: eliminateFilter,
            });
            console.log("Eliminate Model: ", response.data)
            setEliminateKsapValues(calcEliminateModelAverage(response.data))
            setPilotsBelowAverage(findPilotsBelowAverage(response.data))
        } catch(e) {
            console.log(e);
        }
    }


    const handlePilotsCompareList = e => {
        e.preventDefault()
        if (name !== "") {
            console.log("name: ", name)
            console.log("pilotsToCompare: ", pilotsToCompare)
            setPilotsToCompare([...pilotsToCompare, name])
            const n = document.getElementById('pilotsCompare')
            n.value = ''
            setName('')
        }
        else {
            alert("请填写信息")
        }
    }


    // takes in List of dictionaries: Pilots names as key and their ksap as values
    // calculating their averages 
    const calcEliminateModelAverage = (ksapList) => {
        let res = []
        let num_of_people = ksapList.length - 1
        let k_vals = 0
        let s_vals = 0
        let a_vals = 0
        let p_vals = 0

        // nice forEach example
        // ksapList.forEach(element => {
        //     console.log(Object.entries(element)[0][1])
        //     if (Object.entries(element)[0][0] != "all") {
        //         k_vals += Object.entries(element)[0][1][0]
        //         s_vals += Object.entries(element)[0][1][1]
        //         a_vals += Object.entries(element)[0][1][2]
        //         p_vals += Object.entries(element)[0][1][3]
        //     }
        // })

        for (let i = 0; i < ksapList.length - 1; i += 1) {
            k_vals += Object.entries(ksapList[i])[0][1][0]
            s_vals += Object.entries(ksapList[i])[0][1][1]
            a_vals += Object.entries(ksapList[i])[0][1][2]
            p_vals += Object.entries(ksapList[i])[0][1][3]
        }
        res.push(k_vals / num_of_people)
        res.push(s_vals / num_of_people)
        res.push(a_vals / num_of_people)
        res.push(p_vals / num_of_people)
        console.log(ksapList[num_of_people].all[0])
        res.push(ksapList[num_of_people].all[0])
        res.push(ksapList[num_of_people].all[1])
        res.push(ksapList[num_of_people].all[2])
        res.push(ksapList[num_of_people].all[3])
        console.log("final eliminate valus", res)
        return res
    }


    // return the info of all pilots whose ksap values are below the average of it's group
    const findPilotsBelowAverage = (ksapList) => {
        let res = []
        let num_of_people = ksapList.length - 1
        const ksap_average = calcEliminateModelAverage(ksapList)
        const k_ave = ksap_average[0]
        const s_ave = ksap_average[1]
        const a_ave = ksap_average[2]
        const p_ave = ksap_average[3]

        for (let i = 0; i < num_of_people; i += 1) {
            const pilot_name = Object.entries(ksapList[i])[0][0]
            // console.log("findPilotsBelowAverage:", pilot_name)
            let pilot = {}
            pilot[pilot_name] = []
            let check = false
            const k = Object.entries(ksapList[i])[0][1][0]
            const s = Object.entries(ksapList[i])[0][1][1]
            const a = Object.entries(ksapList[i])[0][1][2]
            const p = Object.entries(ksapList[i])[0][1][3]
            if (k < k_ave) {
                pilot[pilot_name].push("k:" + k)
                check = true
            }
            if (s < s_ave) {
                pilot[pilot_name].push("s: " + s)
                check = true
            }
            if (a < a_ave) {
                pilot[pilot_name].push("a: " + a)
                check = true
            }
            if (p < p_ave) {
                pilot[pilot_name].push("p: " + p)
                check = true
            }
            if (check) {
                res.push(pilot)
            }
        }
        
        return res
    }


    return (
        <div className="allDiv">
            <div className="models">
                <button id="modelBtn" onClick={() => {setModel("ksapModel")}}>KSAP</button>
                <button id="modelBtn" onClick={() => {setModel("helpModel")}}>辅助决策</button>
                <button id="modelBtn" onClick={() => {setModel("eliminateModel")}}>选择对比</button>
                {/* <p className="totalPeople" style={{color: "black"}}>累计面试人数：{allPilotNames.length}</p> */}
            </div>
            {ksapModel && 
                    <div>
                        <div className="ksapModel">
                            {graph1 ? <div className="clusterChart">{clustering(boxKsap, allPilotNames)}</div> : ""}
                            {graph2 ? 
                                <div className="radarSection">
                                    <div className="radarSearchGraph">
                                        <div>
                                            <label>搜索: </label> &nbsp;
                                            <input id="searchInput" type="text" onChange={e => setName(e.target.value)}/>
                                            &nbsp;<label>对比: </label> &nbsp;
                                            <select onChange={e => {
                                                if (e.target.value !== "批次") {
                                                    setRadarFilter(e.target.value)
                                                }
                                                if (e.target.value === "批次") {
                                                    setSelect2(true)
                                                    setSelect3(false)
                                                }
                                                else if (e.target.value === "学生类型") {
                                                    setSelect2(false)
                                                    setSelect3(true)
                                                }
                                                else {
                                                    setSelect2(false)
                                                    setSelect3(false)
                                                }
                                            }}>
                                                {/* <option value='none' selected>请选择</option> */}
                                                <option value="all">所有学员</option>
                                                <option value="批次">批次</option>
                                                <option value="养成生">养成生</option>
                                                <option value="大毕改">大毕改</option>
                                                {/* <option value="学生类型">学生类型</option> */}
                                            </select>
                                            {select2 ? <select onChange={e => setRadarFilter(e.target.value)}>
                                                            <option value=""></option>
                                                            <option value="01">01</option>
                                                            <option value="02">02</option>
                                                        </select> : ""}
                                            {select3 ? <select>
                                                            <option value="养成生">养成生</option>
                                                            <option value="大毕改">大毕改</option>
                                                        </select> : ""}
                                            &nbsp;
                                            <button id='getBtn' type="submit" onClick={handleGet}>提取</button>
                                        </div>
                                        {radar(radarKsap, name, "平均值")}
                                    </div>
                                </div>
                                : ""}
                            {graph3 ? <div className="boxChart">{box(boxKsap)}</div> : ""}
                        </div>
                        <div className="page">
                            第: &nbsp;
                            <button style={{backgroundColor: color1}} onClick={() => {
                                setGraph1(true)
                                setColor1("gold")
                                setGraph2(false)
                                setColor2("aquamarine")
                                setGraph3(false)
                                setColor3("aquamarine")
                            }}>1</button>
                            <button style={{backgroundColor: color2}} onClick={() => {
                                setGraph1(false)
                                setColor1("aquamarine")
                                setGraph2(true)
                                setColor2("gold")
                                setGraph3(false)
                                setColor3("aquamarine")
                            }}>2</button>
                            <button style={{backgroundColor: color3}} onClick={() => {
                                setGraph1(false)
                                setColor1("aquamarine")
                                setGraph2(false)
                                setColor2("aquamarine")
                                setGraph3(true)
                                setColor3("gold")
                            }}>3</button> 
                            &nbsp; 页
                        </div>
                    </div>
            }
            {helpingModel && 
                <div id="helpModel">
                    <div>
                        <div id='helpLeft'>
                            <label>搜索: </label> &nbsp;
                            <input id="helpSearchInput" type="text" onChange={e => setName(e.target.value)}/> &nbsp;
                            <button id='getBtn' type="submit" onClick={handleHelpModel}>提取</button> &nbsp;
                            <p style={{color: "rgb(7, 139, 149)"}}>
                                学员总结:
                            </p>
                            {helpName} 是一位好学生。
                        </div>
                    </div>
                    <div id="helpRight">
                        <div id="helpGraph">
                            {radar_single(helpKsapValue, helpName)}
                        </div>
                        <div id="helpSuggestion">
                            <p style={{color: "rgb(7, 139, 149)"}}>
                                建议：
                            </p>
                            继续 好好学习；天天向上。
                        </div>
                    </div>
                </div>
            }
            {eliminateModel && 
                // <div className="other">其他模型 敬请期待</div>
                <div id='eliminateModel'>
                    <div>
                        <label style={{color: "black"}}>对比人员: </label> &nbsp;
                        <input id="pilotsCompare" type="text" onChange={e => setName(e.target.value)}/>
                        <button className='submitBtn' onClick={handlePilotsCompareList}>添加</button>
                        &nbsp;<label style={{color: "black"}}>对比阶段: </label> &nbsp;
                        <select type='text' onChange={e => setEliminateFilter(e.target.value)}>
                            <option value='none' selected>请选择</option>
                            <option value="招飞阶段">招飞阶段</option>
                            <option value="航校理论阶段">航校理论阶段</option>
                            <option value="飞行训练阶段">飞行训练阶段</option>
                            <option value="副驾驶资质训练阶段">副驾驶资质训练阶段</option>
                        </select>
                        <button id='getBtn' type="submit" onClick={handleEliminateModel}>提取</button>
                    </div>
                    <div>
                        <br/>
                        对比人员名单: &nbsp;
                        {pilotsToCompare.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <button onClick={() => setPilotsToCompare([])}>清除</button>
                        <br/>
                        {/* 对比人员KSAP: &nbsp;
                        {eliminateKsapValues.map(pair => {
                            return (
                                <>
                                    {Object.entries(pair)[0][0]} : [
                                        {Object.entries(pair)[0][1][0]} &nbsp;
                                        {Object.entries(pair)[0][1][1]} &nbsp;
                                        {Object.entries(pair)[0][1][2]} &nbsp;
                                        {Object.entries(pair)[0][1][3]}
                                    ]
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            )
                        })} */}
                    </div>
                    <div id='eliminateData'>
                        {radar(eliminateKsapValues, "对比人员均值", "所有人员均值")}
                        <div id='eliminateList'>
                            {pilotsBelowAverage.map(pair => {
                                // console.log("pilotsBelowAverage", Object.entries(pair))
                                return (
                                    <>
                                        {Object.entries(pair)[0][0]} : [
                                            {Object.entries(pair)[0][1][0]} &nbsp;
                                            {Object.entries(pair)[0][1][1]} &nbsp;
                                            {Object.entries(pair)[0][1][2]} &nbsp;
                                            {Object.entries(pair)[0][1][3]}
                                        ]
                                        &nbsp;&nbsp;&nbsp;
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Home;

