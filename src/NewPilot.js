import React, {useState, useEffect} from "react"
import axios from "axios"
import './NewPilotStyle.css'
import config from './config'

function NewPilot() {
    // zhaofei
    const [allNames, setAllNames] = useState([])
    const [stage, setStage] = useState('') 
    const [name, setName] = useState('Seaqueue') 
    const [studentType, setStudentType] = useState('') 
    const [year, setYear] = useState('') 
    const [gaoKao, setGaoKao] = useState(0)
    const [yiBen, setYiBen] = useState(0)
    const [erBen, setErBen] = useState(0)
    const [university, setUniversity] = useState('')
    const [universityType, setUniversityType] = useState('')
    const [gaoKaoReport, setGaoKaoReport] = useState([])
    const [zhaoFeiDaXueReport, setZhaoFeiDaXueReport] = useState([])
    const [family, setFamily] = useState([])
    const [hobby, setHobby] = useState([])
    const [achivements, setAchivements] = useState([])
    const [gameTest, setGameTest] = useState('')
    const [simulatorTest, setSimulatorTest] = useState('')
    const [spaceSense, setSpaceSense] = useState('')
    const [interview, setInterview] = useState(0)
    const [appearance, setAppearance] = useState('')
    const [zhaoFeiSchoolReward, setZhaoFeiSchoolReward] = useState([])
    const [zhaoFeiSchoolPenelty, setZhaoFeiSchoolPenelty] = useState([])
    const [zhaoFeiSocialReward, setZhaoFeiSocialReward] = useState([])
    const [zhaoFeiSocialPenelty, setZhaoFeiSocialPenelty] = useState([])
    const [zhaoFeiPsychology, setZhaoFeiPsychology] = useState('')
    const [key, setKey] = useState('')
    const [value, setValue] = useState('')
    const [yangcheng, setYangcheng] = useState(true)

    // ground
    const [groundDaXueReport, setGroundDaXueReport] = useState([])
    const [groundSchoolReward, setGroundSchoolReward] = useState([])
    const [groundSchoolPenelty, setGroundSchoolPenelty] = useState([])
    const [groundSocialReward, setGroundSocialReward] = useState([])
    const [groundSocialPenelty, setGroundSocialPenelty] = useState([])
    const [groundPsychology, setGroundPsychology] = useState('')
    
    // training
    const [trainingTestFailTimes, setTrainingTestFailTimes] = useState(0)
    const [trainingOvertime, setTrainingOvertime] = useState(0)
    const [trainingExamExtraTimes, setTrainingExamExtraTimes] = useState(0)
    const [trainingAccident, setTrainingAccident] = useState([])
    const [trainingSchoolReward, setTrainingSchoolReward] = useState([])
    const [trainingSchoolPenelty, setTrainingSchoolPenelty] = useState([])
    const [trainingSocialReward, setTrainingSocialReward] = useState([])
    const [trainingSocialPenelty, setTrainingSocialPenelty] = useState([])
    const [trainingPsychology, setTrainingPsychology] = useState('')

    //operating
    const [operatingExams, setOperatingExams] = useState([])
    const [operatingExamRetakeTimes, setOperatingExamRetakeTimes] = useState(0)
    const [operatingExmaFailTimes, setOperatingExmaFailTimes] = useState(0)
    const [aptRetakeTimes, setAptRetakeTimes] = useState(0)
    const [judgingScore, setJudgingScore] = useState(0)
    const [operatingSchoolReward, setOperatingSchoolReward] = useState([])
    const [operatingSchoolPenelty, setOperatingSchoolPenelty] = useState([])
    const [operatingSocialReward, setOperatingSocialReward] = useState([])
    const [operatingSocialPenelty, setOperatingSocialPenelty] = useState([])
    const [updateTime, setUpdateTime] = useState(0)
    const [readyToJoinTime, setReadToJoinTime] = useState(0)
    const [livingCondition, setLivingCondition] = useState(0)
    const [operatingPychology, setOperatingPychology] = useState('')

    useEffect(() => {
        async function fetchAllPilots() {
            try {
                // const response = await axios.post(config.developmentHost + '/pilot/get_all_pilot');
                const response = await axios.post(config.productionHost + '/pilot/get_all_pilot');
                console.log("all pilots:", response.data)
                // var names = []
                // response.data.forEach(element => names.push(element.??????))
                setAllNames(response.data)
            } catch(e) {
                console.log(e);
            }
        }
        fetchAllPilots()
    }, [])

    const zhaoFeiRewardPenelty = [
        { value: '', text: '?????????'},
        { value: 'rp1', text: '????????????'},
        { value: 'rp2', text: '????????????'},
        { value: 'rp3', text: '????????????'},
        { value: 'rp4', text: '????????????'},
    ]
    const liLunRewardPenelty = [
        { value: '', text: '?????????'},
        { value: 'rp5', text: '????????????'},
        { value: 'rp6', text: '????????????'},
        { value: 'rp7', text: '????????????'},
        { value: 'rp8', text: '????????????'},
    ]
    const feiXunRewardPenelty = [
        { value: '', text: '?????????'},
        { value: 'rp9', text: '????????????'},
        { value: 'rp10', text: '????????????'},
        { value: 'rp11', text: '????????????'},
        { value: 'rp12', text: '????????????'},
    ]
    const yunXingRewardPenelty = [
        { value: '', text: '?????????'},
        { value: 'rp13', text: '????????????'},
        { value: 'rp14', text: '????????????'},
        { value: 'rp15', text: '????????????'},
        { value: 'rp16', text: '????????????'},
    ]
    const psychologyOptions = [
        { value: '1', text: '1 (?????????'},
        { value: '2', text: '2'},
        { value: '3', text: '3'},
        { value: '4', text: '4'},
        { value: '5', text: '5'},
        { value: '6', text: '6'},
        { value: '7', text: '7'},
        { value: '8', text: '8'},
        { value: '9', text: '9'},
        { value: '10', text: '10 ????????????'},
    ]

    const handleCreate = e => {
        e.preventDefault();
        if (allNames.includes(name)) {
            alert("????????????????????????")
        }
        else {
            var allGood = window.confirm("???????????????????")
            if (allGood) {
                e.target.reset();
                try {
                    creatPilot();
                } catch (e) {
                    console.log(e);
                }
                setGaoKao(0)
                setYiBen(0)
                setErBen(0)
                setUniversity('')
                setUniversityType('')
                setGaoKaoReport([])
                setZhaoFeiDaXueReport([])
                setHobby([])
                setAchivements([])
                setZhaoFeiSchoolReward([])
                setZhaoFeiSchoolPenelty([])
                setZhaoFeiSocialReward([])
                setZhaoFeiSocialPenelty([])
            }
        }
    }

    // ???????????? create a new pilot
    const creatPilot = async () => {
        console.log("name: ", name)
        console.log("report: ", zhaoFeiDaXueReport)
        console.log("zhaoFeiSchoolReward: ", zhaoFeiSchoolReward)
        console.log("zhaoFeiPsychology: ", zhaoFeiPsychology)
        try {
        axios
            // .post(config.developmentHost + "/pilot/create", {
            .post(config.productionHost + "/pilot/create", {
                name: name,
                studentType: studentType,
                year: year,
                gaoKao: gaoKao,
                yiBen: yiBen,
                erBen: erBen,
                university: university,
                universityType: universityType,
                gaoKaoReport: gaoKaoReport,
                zhaoFeiDaXueReport: zhaoFeiDaXueReport,
                family: family,
                hobby: hobby,
                achivements: achivements,
                gameTest: gameTest,
                simulatorTest: simulatorTest,
                spaceSense: spaceSense,
                interview: interview,
                appearance: appearance,
                zhaoFeiSchoolReward: zhaoFeiSchoolReward,
                zhaoFeiSchoolPenelty: zhaoFeiSchoolPenelty,
                zhaoFeiSocialReward: zhaoFeiSocialReward,
                zhaoFeiSocialPenelty: zhaoFeiSocialPenelty,
                zhaoFeiPsychology: zhaoFeiPsychology,
            })
            .then(response => console.log(response))
            .catch(e => {
                console.log("errorRRR: ", e);
            })
        } catch(e) {
            console.log("errorRRR: ", e);
        }
    }

    const handleGaoKaoReport = e => {
        e.preventDefault()
        var keyV = key === "" || key === "rp1" || key === "rp2" || key === "rp3" || key === "rp4" || key === "rp5" || key === "rp6" || key === "rp7" || key === "rp8" || key === "rp9" || key === "rp10" || key === "rp11" || key === "rp12" || key === "rp13" || key === "rp14" || key === "rp15" || key === "rp16"
        if (!keyV && value !== "") {
            console.log("key: ", key)
            console.log("value: ", value)
            console.log("gaoKaoReport:", {...gaoKaoReport})
            setGaoKaoReport([...gaoKaoReport, {[key]:value}])
            const gaoKaokm = document.getElementById('1')
            gaoKaokm.value = ''
            setKey('')
            const gaoKaocj = document.getElementById('2')
            gaoKaocj.value = ''
            setValue('')
        }
        else {
            alert("???????????????")
        }
    }

    const handleZhaoFeiDaXueReport = e => {
        e.preventDefault()
        var keyV = key === "" || key === "rp1" || key === "rp2" || key === "rp3" || key === "rp4" || key === "rp5" || key === "rp6" || key === "rp7" || key === "rp8" || key === "rp9" || key === "rp10" || key === "rp11" || key === "rp12" || key === "rp13" || key === "rp14" || key === "rp15" || key === "rp16"
        if (!keyV && value !== "") {
            console.log("key: ", key)
            console.log("value: ", value)
            setZhaoFeiDaXueReport([...zhaoFeiDaXueReport, {[key]:value}])
            const daXuekm = document.getElementById('3')
            daXuekm.value = ''
            setKey('')
            const daXuecj = document.getElementById('4')
            daXuecj.value = ''
            setValue('')
        }
        else {
            alert("???????????????")
        }
    }

    const handleFamily = e => {
        e.preventDefault()
        if (value !== "") {
            console.log("value: ", value)
            console.log("hobby: ", hobby)
            setFamily([...family, value])
            const fam = document.getElementById('fam')
            fam.value = ''
            setValue('')
        }
        else {
            alert("???????????????")
        }
    }

    const handleHobby = e => {
        e.preventDefault()
        if (value !== "") {
            console.log("value: ", value)
            console.log("hobby: ", hobby)
            setHobby([...hobby, value])
            const hob = document.getElementById('5')
            hob.value = ''
            setValue('')
        }
        else {
            alert("???????????????")
        }
    }

    const handleAchivement = e => {
        e.preventDefault()
        if (value !== "") {
            console.log("value: ", value)
            console.log("achive: ", achivements)
            setAchivements([...achivements, value])
            const achive = document.getElementById('6')
            achive.value = ''
            setValue("")
        }
        else {
            alert("???????????????")
        }
    }

    const handleZhaoFeiRewardPenelty = e => {
        e.preventDefault()
        if (key !== "" && value !== "") {
            console.log("key: ", key)
            console.log("value: ", value)
            if (key === 'rp1') {
                setZhaoFeiSchoolReward([...zhaoFeiSchoolReward, value])
            }
            else if (key === 'rp2') {
                setZhaoFeiSchoolPenelty([...zhaoFeiSchoolPenelty, value])
            }
            else if (key === 'rp3') {
                setZhaoFeiSocialReward([...zhaoFeiSocialReward, value])
            }
            else if (key === 'rp4') {
                setZhaoFeiSocialPenelty([...zhaoFeiSocialPenelty, value])
            }
            const reward = document.getElementById('7')
            reward.value = ''
            setValue("")
        }
        else {
            alert("???????????????")
        }
    }

    // ????????????
    const handleGroundPhase = e => {
        e.preventDefault();
        var allGood = window.confirm("???????????????????")
        if (allGood) {
            e.target.reset();
            try {
                groundPhaseCreate();
            } catch (e) {
                console.log(e);
            }
            setGroundDaXueReport([])
            setGroundSchoolReward([])
            setGroundSchoolPenelty([])
            setGroundSocialReward([])
            setGroundSocialPenelty([])
        }
    }

    const groundPhaseCreate = async () => {
        console.log("name: ", name)
        console.log("report: ", groundDaXueReport)
        try {
        axios
            // .post(config.developmentHost + "/pilot/ground_phase", {
            .post(config.productionHost + "/pilot/ground_phase", {
                name: name,
                groundDaXueReport: groundDaXueReport,
                groundSchoolReward: groundSchoolReward,
                groundSchoolPenelty: groundSchoolPenelty,
                groundSocialReward: groundSocialReward,
                groundSocialPenelty: groundSocialPenelty,
                groundPsychology: groundPsychology,
            })
            .then(response => console.log(response))
            .catch(e => {
                console.log("errorRRR: ", e);
            })
        } catch(e) {
            console.log("errorRRR: ", e);
        }
    }

    const handleGroundDaXueReport = e => {
        e.preventDefault()
        var keyV = key === "" || key === "rp1" || key === "rp2" || key === "rp3" || key === "rp4" || key === "rp5" || key === "rp6" || key === "rp7" || key === "rp8" || key === "rp9" || key === "rp10" || key === "rp11" || key === "rp12" || key === "rp13" || key === "rp14" || key === "rp15" || key === "rp16"
        if (!keyV && value !== "") {
            console.log("key: ", key)
            console.log("value: ", value)
            setGroundDaXueReport([...groundDaXueReport, {[key]:value}])
            const daXuekm = document.getElementById('8')
            daXuekm.value = ''
            setKey('')
            const daXuecj = document.getElementById('9')
            daXuecj.value = ''
            setValue('')
        }
        else {
            alert("???????????????")
        }
    }

    const handleGroundRewardPenelty = e => {
        e.preventDefault()
        if (key !== "" && value !== "") {
            console.log("key: ", key)
            console.log("value: ", value)
            if (key === 'rp5') {
                setGroundSchoolReward([...groundSchoolReward, value])
            }
            else if (key === 'rp6') {
                setGroundSchoolPenelty([...groundSchoolPenelty, value])
            }
            else if (key === 'rp7') {
                setGroundSocialReward([...groundSocialReward, value])
            }
            else if (key === 'rp8') {
                setGroundSocialPenelty([...groundSocialPenelty, value])
            }
            const reward = document.getElementById('10')
            reward.value = ''
            setValue("")
        }
        else {
            alert("???????????????")
        }
    }

    // ????????????
    const handleTrainingPhase = e => {
        e.preventDefault();
        var allGood = window.confirm("???????????????????")
        if (allGood) {
            e.target.reset();
            try {
                trainingPhaseCreate();
            } catch (e) {
                console.log(e);
            }
            setTrainingTestFailTimes(0)
            setTrainingOvertime(0)
            setTrainingExamExtraTimes(0)
            setTrainingAccident([])
            setTrainingSchoolReward([])
            setTrainingSchoolPenelty([])
            setTrainingSocialReward([])
            setTrainingSocialPenelty([])
            setTrainingPsychology('')
        }
    }

    const trainingPhaseCreate = async () => {
        console.log("name: ", name)
        try {
        axios
            // .post(config.developmentHost + "/pilot/training_phase", {
            .post(config.productionHost + "/pilot/training_phase", {
                name: name,
                trainingTestFailTimes: trainingTestFailTimes,
                trainingOvertime: trainingOvertime,
                trainingExamExtraTimes: trainingExamExtraTimes,
                trainingAccident: trainingAccident,
                trainingSchoolReward: trainingSchoolReward,
                trainingSchoolPenelty: trainingSchoolPenelty,
                trainingSocialReward: trainingSocialReward,
                trainingSocialPenelty: trainingSocialPenelty,
                trainingPsychology: trainingPsychology,
            })
            .then(response => console.log(response))
            .catch(e => {
                console.log("errorRRR: ", e);
            })
        } catch(e) {
            console.log("errorRRR: ", e);
        }
    }

    const handleTrainingRewardPenelty = e => {
        e.preventDefault()
        if (key !== "" && value !== "") {
            console.log("key: ", key)
            console.log("value: ", value)
            if (key === 'rp9') {
                setTrainingSchoolReward([...trainingSchoolReward, value])
            }
            else if (key === 'rp10') {
                setTrainingSchoolPenelty([...trainingSchoolPenelty, value])
            }
            else if (key === 'rp11') {
                setTrainingSocialReward([...trainingSocialReward, value])
            }
            else if (key === 'rp12') {
                setTrainingSocialPenelty([...trainingSocialPenelty, value])
            }
            const reward = document.getElementById('11')
            reward.value = ''
            setValue("")
        }
        else {
            alert("???????????????")
        }
    }

    const handleTrainingAccident = e => {
        e.preventDefault()
        if (key !== "" && value !== "") {
            console.log("key: ", key)
            console.log("value: ", value)
            console.log("????????????:", {...trainingAccident})
            setTrainingAccident([...trainingAccident, {[key]:value}])
            const reward = document.getElementById('trainingAccident')
            reward.value = ''
            setValue("")
        }
        else {
            alert("???????????????")
        }
    }

     // ???????????????????????????
    const handleOperatingPhase = e => {
        e.preventDefault();
        var allGood = window.confirm("???????????????????")
        if (allGood) {
            e.target.reset();
            try {
                operatingPhaseCreate();
            } catch (e) {
                console.log(e);
            }
            setOperatingExams([])
            setOperatingExamRetakeTimes(0)
            setOperatingExmaFailTimes(0)
            setAptRetakeTimes(0)
            setJudgingScore(0)
            setOperatingSchoolReward([])
            setOperatingSchoolPenelty([])
            setOperatingSocialReward([])
            setOperatingSocialPenelty([])
            setUpdateTime(0)
            setReadToJoinTime(0)
            setLivingCondition(0)
            setOperatingPychology('')
        }
    }

    const operatingPhaseCreate = async () => {
        console.log("name: ", name)
        console.log("???????????????????????????", operatingExmaFailTimes)
        try {
        axios
            // .post(config.developmentHost + "/pilot/operating_phase", {
            .post(config.productionHost + "/pilot/operating_phase", {
                name: name,
                operatingExams: operatingExams,
                operatingExamRetakeTimes: operatingExamRetakeTimes,
                operatingExmaFailTimes: operatingExmaFailTimes,
                aptRetakeTimes: aptRetakeTimes,
                judgingScore: judgingScore,
                operatingSchoolReward: operatingSchoolReward,
                operatingSchoolPenelty: operatingSchoolPenelty,
                operatingSocialReward: operatingSocialReward,
                operatingSocialPenelty: operatingSocialPenelty,
                updateTime: updateTime,
                readyToJoinTime: readyToJoinTime,
                livingCondition: livingCondition,
                operatingPychology: operatingPychology,
            })
            .then(response => console.log(response))
            .catch(e => {
                console.log("errorRRR: ", e);
            })
        } catch(e) {
            console.log("errorRRR: ", e);
        }
    }

    const handleOperatingExamRetakeTimes = e => {
        e.preventDefault()
        var keyV = key === "" || key === "rp1" || key === "rp2" || key === "rp3" || key === "rp4" || key === "rp5" || key === "rp6" || key === "rp7" || key === "rp8" || key === "rp9" || key === "rp10" || key === "rp11" || key === "rp12" || key === "rp13" || key === "rp14" || key === "rp15" || key === "rp16"
        if (!keyV && value !== "") {
            console.log("key: ", key)
            console.log("value: ", value)
            console.log("??????????????????:", {...operatingExams})
            setOperatingExams([...operatingExams, {[key]:value}])
            const exams = document.getElementById('12')
            exams.value = ''
            setKey('')
            const operatingExamscj = document.getElementById('13')
            operatingExamscj.value = ''
            setValue('')
        }
        else {
            alert("???????????????")
        }
    }

    const handleOperatingRewardPenelty = e => {
        e.preventDefault()
        if (key !== "" && value !== "") {
            console.log("key: ", key)
            console.log("value: ", value)
            if (key === 'rp13') {
                setOperatingSchoolReward([...operatingSchoolReward, value])
            }
            else if (key === 'rp14') {
                setOperatingSchoolPenelty([...operatingSchoolPenelty, value])
            }
            else if (key === 'rp15') {
                setOperatingSocialReward([...operatingSocialReward, value])
            }
            else if (key === 'rp16') {
                setOperatingSocialPenelty([...operatingSocialPenelty, value])
            }
            const reward = document.getElementById('14')
            reward.value = ''
            setValue("")
        }
        else {
            alert("???????????????")
        }
    }


    return (
        <div id='newPilot'>
            <div className="stages">
                <button id="modelBtn" onClick={() => {setStage("recruit")}}>????????????</button>
                <button id="modelBtn" onClick={() => {setStage("pilotSchool")}}>??????????????????</button>
                <button id="modelBtn" onClick={() => {setStage("training")}}>??????????????????</button>
                <button id="modelBtn" onClick={() => {setStage("operating")}}>????????????????????????</button>
            </div>
            <div className="dataInput">
                ????????????
            </div>
            {stage === "recruit" ? 
                <div className="stage">
                    <label style={{color: 'gold'}}>????????????</label>
                    <form onSubmit={handleCreate}>
                        <div className='section1'>
                            <div id='subsec1'>
                                <div>
                                    <label id="labels">??????: </label> &nbsp;
                                    <input type="text" onChange={e => {
                                        // if (allNames.includes(e.target.value)) {
                                        //     alert("????????????????????????")
                                        // }
                                        // else {
                                            setName(e.target.value)
                                        // }
                                    }}/>
                                </div>
                                <div>
                                    <label id='labels'>???????????????</label>
                                    <select type='text' onChange={e => {
                                        setStudentType(e.target.value)
                                        if (e.target.value === "?????????") {
                                            setYangcheng(true)
                                        }
                                        else {
                                            setYangcheng(false)
                                        }
                                    }}>
                                        <option value='none' selected>?????????</option>
                                        <option value="?????????">?????????</option>
                                        <option value="?????????">?????????</option>
                                    </select>
                                </div>
                                <div>
                                    <label>???????????????</label>
                                    <input type='text' onChange={e => setYear(e.target.value)}></input>
                                </div>
                                {yangcheng ? 
                                    <div>
                                        <div>
                                            <label>?????????</label>
                                            <input type='text' onChange={e => setUniversity(e.target.value)}></input>
                                        </div>
                                        <div>
                                            <label id="labels">???????????????</label>
                                            <input type="text" onChange={e => setGaoKao(e.target.value)}/> 
                                        </div>
                                        <div>
                                            <label id="labels">??????????????????</label>
                                            <input type="text" onChange={e => setErBen(e.target.value)}/>
                                        </div>
                                        <div>
                                            <label id="labels">??????????????????</label>
                                            <input type="text" onChange={e => setYiBen(e.target.value)}/>
                                        </div>
                                        <div>
                                            <label id="labels">??????????????????</label>
                                            <label id="labels">?????????</label>
                                            {/* <input id='1' type="text" onChange={e => setKey(e.target.value)}/>  */}
                                            <select id='1' type='text' onChange={e => setKey(e.target.value)}>
                                                <option value='none' selected>?????????</option>
                                                <option value="Math">??????</option>
                                                <option value="English">??????</option>
                                                <option value="PE">??????</option>
                                                {/* <option value="overAllAverage">?????????????????????</option>
                                                <option value="failCount">?????????????????????</option> */}
                                            </select>
                                            <label id="labels">?????????</label>
                                            <input id='2' type="text" onChange={e => setValue(e.target.value)}/> 
                                            <button className='submitBtn' onClick={handleGaoKaoReport}>??????</button>
                                        </div>
                                    </div> 
                                    :
                                    <div>
                                        <div>
                                            <label>?????????</label>
                                            <input type='text' onChange={e => setUniversity(e.target.value)}></input>
                                        </div>
                                        <div>
                                            <label>???????????????</label>
                                            <select id='1' type='text' onChange={e => setUniversityType(e.target.value)}>
                                                <option value='none' selected>?????????</option>
                                                <option value="??????">??????</option>
                                                <option value="??????">??????</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label id="labels">??????????????????</label>
                                            <label id="labels">?????????</label>
                                            <input id='3' type="text" onChange={e => setKey(e.target.value)}/>
                                            {/* <select id='3' type='text' onChange={e => setKey(e.target.value)}>
                                                <option value='none' selected>?????????</option>
                                                <option value="Math">??????</option>
                                                <option value="CET4">CET4</option>
                                                <option value="CET6">CET6</option>
                                                <option value="PE">??????</option>
                                                <option value="overAllAverage">?????????????????????</option>
                                                <option value="failCount">?????????????????????</option>
                                            </select> */}
                                            <label id="labels">?????????</label>
                                            <input id='4' type="text" onChange={e => setValue(e.target.value)}/>
                                            <button className='submitBtn' onClick={handleZhaoFeiDaXueReport}>??????</button>
                                        </div>
                                        <div>
                                            <label>???????????????????????????</label>
                                            <input type='text' onChange={e => setInterview(e.target.value)}></input>
                                        </div>
                                        <div>
                                            <label>???????????????</label>
                                            <select onChange={e => setAppearance(e.target.value)}>
                                                <option value='none' selected>?????????</option>
                                                <option value="??????">??????</option>
                                                <option value="?????????">?????????</option>
                                            </select>
                                        </div>
                                    </div>}
                                <div>
                                    <label>???????????????????????????????????????</label>
                                    <input id='fam' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleFamily}>??????</button>
                                </div> 
                                <div>
                                    <label>???????????????</label>
                                    <select onChange={e => setKey(e.target.value)}>
                                        {zhaoFeiRewardPenelty.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                    <label id="labels">?????????</label>
                                    <input id='7' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleZhaoFeiRewardPenelty}>??????</button>
                                </div>
                            </div>
                            <div id="subsec2">
                                <div>
                                    <label>?????????????????????</label>
                                    <input id='5' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleHobby}>??????</button>
                                </div>
                                <div>
                                    <label>?????????????????????</label>
                                    <input id='6' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleAchivement}>??????</button>
                                </div>
                                <div>
                                    <label>???????????????</label>
                                    <select onChange={e => setGameTest(e.target.value)}>
                                        <option value='none' selected>?????????</option>
                                        <option value="??????">??????</option>
                                        <option value="??????">??????</option>
                                        <option value="???">???</option>
                                    </select>
                                </div>
                                <div>
                                    <label>??????????????????</label>
                                    <select onChange={e => setSimulatorTest(e.target.value)}>
                                        <option value='none' selected>?????????</option>
                                        <option value="??????">??????</option>
                                        <option value="??????">??????</option>
                                        <option value="???">???</option>
                                    </select>
                                </div>
                                <div>
                                    <label>?????????????????????</label>
                                    <select onChange={e => setSpaceSense(e.target.value)}>
                                        <option value='none' selected>?????????</option>
                                        <option value="??????">??????</option>
                                        <option value="??????">??????</option>
                                        <option value="???">???</option>
                                    </select>
                                </div>
                                <div>
                                    <label>??????????????????:</label>
                                    <select onChange={e => {setZhaoFeiPsychology(e.target.value)}}>
                                        {psychologyOptions.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="create"/>
                    </form>
                    <div style={{color: "gold"}}>??????????????????
                        <br/>
                        ???????????????: &nbsp;
                        {gaoKaoReport.map(pair => {
                            return (
                                <>
                                    {Object.entries(pair)[0][0]} : {Object.entries(pair)[0][1]}
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            )
                        })}
                        <br/>
                        ??????????????????&nbsp;
                        {zhaoFeiDaXueReport.map(pair => {
                            return (
                                <>
                                    {Object.entries(pair)[0][0]} : {Object.entries(pair)[0][1]}
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            )
                        })}
                        <br/>
                        ?????????&nbsp;
                        {family.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ???????????????&nbsp;
                        {hobby.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ???????????????&nbsp;
                        {achivements.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ?????????????????????&nbsp;
                        {zhaoFeiSchoolReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ?????????????????????&nbsp;
                        {zhaoFeiSchoolPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ?????????????????????&nbsp;
                        {zhaoFeiSocialReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ?????????????????????&nbsp;
                        {zhaoFeiSocialPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                    </div>
                </div> : <></>}
            {stage === "pilotSchool" ? 
                <div className='stage'>
                    <label style={{color: 'gold'}}>??????????????????</label>
                    <form onSubmit={handleGroundPhase}>
                        <div className='section2'>
                            <div>
                                <label id="labels">??????: </label> &nbsp;
                                <input type="text" onChange={e => setName(e.target.value)}/>
                            </div>
                            <div>
                                <label id="labels">??????????????????</label>
                                <label id="labels">?????????</label>
                                <input id='8' type="text" onChange={e => setKey(e.target.value)}/>
                                <label id="labels">?????????</label>
                                <input id='9' type="text" onChange={e => setValue(e.target.value)}/>
                                <button className='submitBtn' onClick={handleGroundDaXueReport}>??????</button>
                            </div>
                            <div>
                                <label>???????????????</label>
                                <select onChange={e => setKey(e.target.value)}>
                                    {liLunRewardPenelty.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.text}
                                        </option>
                                    ))}
                                </select>
                                <label id="labels">?????????</label>
                                <input id='10' type='text' onChange={e => setValue(e.target.value)}></input>
                                <button className='submitBtn' onClick={handleGroundRewardPenelty}>??????</button>
                            </div>
                            <div>
                                <label>??????????????????:</label>
                                <select onChange={e => {setGroundPsychology(e.target.value)}}>
                                    {psychologyOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.text}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <input type="submit" value="create"/>
                    </form>
                    <div style={{color: "gold"}}>???????????????:
                        <br/>
                        ??????????????????&nbsp;
                        {groundDaXueReport.map(pair => {
                            return (
                                <>
                                    {Object.entries(pair)[0][0]} : {Object.entries(pair)[0][1]}
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            )
                        })}
                        <br/>
                        ?????????????????????&nbsp;
                        {groundSchoolReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ?????????????????????&nbsp;
                        {groundSchoolPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ?????????????????????&nbsp;
                        {groundSocialReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ?????????????????????&nbsp;
                        {groundSocialPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                    </div>
                </div> : <></>}
            {stage === "training" ? 
                <div className='stage'>
                    <label style={{color: 'gold'}}>??????????????????</label>
                    <form onSubmit={handleTrainingPhase}>
                        <div className='section1'>
                            <div id='subsec1'>
                                <div>
                                    <label id="labels">??????: </label> &nbsp;
                                    <input type="text" onChange={e => setName(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">???????????????????????????: </label> &nbsp;
                                    <input type="text" onChange={e => setTrainingTestFailTimes(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">??????????????????: </label> &nbsp;
                                    <input type="text" onChange={e => setTrainingOvertime(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">????????????????????????: </label> &nbsp;
                                    <input type="text" onChange={e => setTrainingExamExtraTimes(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">??????????????????: </label> &nbsp;
                                    <input id='trainingAccident' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleTrainingAccident}>??????</button>
                                </div>
                            </div>
                            <div id="subsec2">
                                <div>
                                    <label>???????????????</label>
                                    <select onChange={e => setKey(e.target.value)}>
                                        {feiXunRewardPenelty.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                    <label id="labels">?????????</label>
                                    <input id='11' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleTrainingRewardPenelty}>??????</button>
                                </div>
                                <div>
                                    <label>??????????????????:</label>
                                    <select onChange={e => {setTrainingPsychology(e.target.value)}}>
                                        {psychologyOptions.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="create"/>
                    </form>
                    <div style={{color: "gold"}}>???????????????:
                        <br/>
                        ??????????????????:&nbsp;
                        {trainingAccident.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ?????????????????????&nbsp;
                        {trainingSchoolReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ?????????????????????&nbsp;
                        {trainingSchoolPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ?????????????????????&nbsp;
                        {trainingSocialReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ?????????????????????&nbsp;
                        {trainingSocialPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                    </div>
                </div> : <></>}
            {stage === "operating" ? 
                <div className='stage'>
                    <label style={{color: 'gold'}}>???????????????????????????</label>
                    <form onSubmit={handleOperatingPhase}>
                        <div className='section1'>
                            <div id='subsec1'>
                                <div>
                                    <label id="labels">??????: </label> &nbsp;
                                    <input type="text" onChange={e => setName(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">??????????????????: </label> &nbsp;
                                    <label id="labels">?????????</label>
                                    <input id='12' type="text" onChange={e => setKey(e.target.value)}/>
                                    <label id="labels">?????????</label>
                                    <input id='13' type="text" onChange={e => setValue(e.target.value)}/> 
                                    <button className='submitBtn' onClick={handleOperatingExamRetakeTimes}>??????</button>
                                </div>
                                <div>
                                    <label id="labels">??????????????????????????????: </label> &nbsp;
                                    <input type="text" onChange={e => setOperatingExamRetakeTimes(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">???????????????????????????: </label> &nbsp;
                                    <input type="text" onChange={e => setOperatingExmaFailTimes(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">APT+????????????????????????: </label> &nbsp;
                                    <input type="text" onChange={e => setAptRetakeTimes(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">??????????????????: </label> &nbsp;
                                    <input type="text" onChange={e => setJudgingScore(e.target.value)}/>
                                </div>
                            </div>
                            <div id="subsec2">
                                <div>
                                    <label id="labels">?????????????????????(???): </label> &nbsp;
                                    <input type="text" onChange={e => setUpdateTime(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">??????????????????(???): </label> &nbsp;
                                    <input type="text" onChange={e => setReadToJoinTime(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">????????????: </label> &nbsp;
                                    <select type='text' onChange={e => {setLivingCondition(e.target.value)}}>
                                        <option value='none' selected>?????????</option>
                                        <option value="??????">??????</option>
                                        <option value="??????">??????</option>
                                        <option value="???">???</option>
                                    </select>
                                </div>
                                <div>
                                    <label>???????????????</label>
                                    <select onChange={e => setKey(e.target.value)}>
                                        {yunXingRewardPenelty.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                    <label id="labels">?????????</label>
                                    <input id='14' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleOperatingRewardPenelty}>??????</button>
                                </div>
                                <div>
                                    <label>??????????????????:</label>
                                    <select onChange={e => {setOperatingPychology(e.target.value)}}>
                                        {psychologyOptions.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="create" id='creatBtn'/>
                    </form>
                    <div style={{color: "gold"}}>???????????????:
                        <br/>
                        ?????????????????????&nbsp;
                        {operatingExams.map(pair => {
                            console.log(Object.entries(pair)[0][0])
                            return (
                                <>
                                    {Object.entries(pair)[0][0]} : {Object.entries(pair)[0][1]}
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            )
                        })}
                        <br/>
                        ??????????????????????????????&nbsp;
                        {operatingSchoolReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ??????????????????????????????&nbsp;
                        {operatingSchoolPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ??????????????????????????????&nbsp;
                        {operatingSocialReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        ??????????????????????????????&nbsp;
                        {operatingSocialPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                    </div>
                </div> : <></>}
        </div>
    );
}

export default NewPilot;

