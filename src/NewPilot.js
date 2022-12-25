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
                // response.data.forEach(element => names.push(element.名字))
                setAllNames(response.data)
            } catch(e) {
                console.log(e);
            }
        }
        fetchAllPilots()
    }, [])

    const zhaoFeiRewardPenelty = [
        { value: '', text: '请选择'},
        { value: 'rp1', text: '学校奖励'},
        { value: 'rp2', text: '学校惩罚'},
        { value: 'rp3', text: '社会奖励'},
        { value: 'rp4', text: '社会惩罚'},
    ]
    const liLunRewardPenelty = [
        { value: '', text: '请选择'},
        { value: 'rp5', text: '学校奖励'},
        { value: 'rp6', text: '学校惩罚'},
        { value: 'rp7', text: '社会奖励'},
        { value: 'rp8', text: '社会惩罚'},
    ]
    const feiXunRewardPenelty = [
        { value: '', text: '请选择'},
        { value: 'rp9', text: '航校奖励'},
        { value: 'rp10', text: '航校惩罚'},
        { value: 'rp11', text: '社会奖励'},
        { value: 'rp12', text: '社会惩罚'},
    ]
    const yunXingRewardPenelty = [
        { value: '', text: '请选择'},
        { value: 'rp13', text: '航校奖励'},
        { value: 'rp14', text: '航校惩罚'},
        { value: 'rp15', text: '社会奖励'},
        { value: 'rp16', text: '社会惩罚'},
    ]
    const psychologyOptions = [
        { value: '1', text: '1 (内向）'},
        { value: '2', text: '2'},
        { value: '3', text: '3'},
        { value: '4', text: '4'},
        { value: '5', text: '5'},
        { value: '6', text: '6'},
        { value: '7', text: '7'},
        { value: '8', text: '8'},
        { value: '9', text: '9'},
        { value: '10', text: '10 （外向）'},
    ]

    const handleCreate = e => {
        e.preventDefault();
        if (allNames.includes(name)) {
            alert("名字重复；请区分")
        }
        else {
            var allGood = window.confirm("确定提交信息?")
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

    // 招飞阶段 create a new pilot
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
            alert("请填写信息")
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
            alert("请填写信息")
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
            alert("请填写信息")
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
            alert("请填写信息")
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
            alert("请填写信息")
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
            alert("请填写信息")
        }
    }

    // 理论阶段
    const handleGroundPhase = e => {
        e.preventDefault();
        var allGood = window.confirm("确定提交信息?")
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
            alert("请填写信息")
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
            alert("请填写信息")
        }
    }

    // 飞训阶段
    const handleTrainingPhase = e => {
        e.preventDefault();
        var allGood = window.confirm("确定提交信息?")
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
            alert("请填写信息")
        }
    }

    const handleTrainingAccident = e => {
        e.preventDefault()
        if (key !== "" && value !== "") {
            console.log("key: ", key)
            console.log("value: ", value)
            console.log("航校事故:", {...trainingAccident})
            setTrainingAccident([...trainingAccident, {[key]:value}])
            const reward = document.getElementById('trainingAccident')
            reward.value = ''
            setValue("")
        }
        else {
            alert("请填写信息")
        }
    }

     // 副驾驶资质训练阶段
    const handleOperatingPhase = e => {
        e.preventDefault();
        var allGood = window.confirm("确定提交信息?")
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
        console.log("入队考试不合格次数", operatingExmaFailTimes)
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
            console.log("换证考试成绩:", {...operatingExams})
            setOperatingExams([...operatingExams, {[key]:value}])
            const exams = document.getElementById('12')
            exams.value = ''
            setKey('')
            const operatingExamscj = document.getElementById('13')
            operatingExamscj.value = ''
            setValue('')
        }
        else {
            alert("请填写信息")
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
            alert("请填写信息")
        }
    }


    return (
        <div id='newPilot'>
            <div className="stages">
                <button id="modelBtn" onClick={() => {setStage("recruit")}}>招飞阶段</button>
                <button id="modelBtn" onClick={() => {setStage("pilotSchool")}}>航校理论阶段</button>
                <button id="modelBtn" onClick={() => {setStage("training")}}>飞行训练阶段</button>
                <button id="modelBtn" onClick={() => {setStage("operating")}}>副驾资质训练阶段</button>
            </div>
            <div className="dataInput">
                数据录入
            </div>
            {stage === "recruit" ? 
                <div className="stage">
                    <label style={{color: 'gold'}}>招飞阶段</label>
                    <form onSubmit={handleCreate}>
                        <div className='section1'>
                            <div id='subsec1'>
                                <div>
                                    <label id="labels">名字: </label> &nbsp;
                                    <input type="text" onChange={e => {
                                        // if (allNames.includes(e.target.value)) {
                                        //     alert("名字重复；请区分")
                                        // }
                                        // else {
                                            setName(e.target.value)
                                        // }
                                    }}/>
                                </div>
                                <div>
                                    <label id='labels'>学生类型：</label>
                                    <select type='text' onChange={e => {
                                        setStudentType(e.target.value)
                                        if (e.target.value === "养成生") {
                                            setYangcheng(true)
                                        }
                                        else {
                                            setYangcheng(false)
                                        }
                                    }}>
                                        <option value='none' selected>请选择</option>
                                        <option value="养成生">养成生</option>
                                        <option value="大毕改">大毕改</option>
                                    </select>
                                </div>
                                <div>
                                    <label>面试时间：</label>
                                    <input type='text' onChange={e => setYear(e.target.value)}></input>
                                </div>
                                {yangcheng ? 
                                    <div>
                                        <div>
                                            <label>大学：</label>
                                            <input type='text' onChange={e => setUniversity(e.target.value)}></input>
                                        </div>
                                        <div>
                                            <label id="labels">高考总分：</label>
                                            <input type="text" onChange={e => setGaoKao(e.target.value)}/> 
                                        </div>
                                        <div>
                                            <label id="labels">当地二本线：</label>
                                            <input type="text" onChange={e => setErBen(e.target.value)}/>
                                        </div>
                                        <div>
                                            <label id="labels">当地一本线：</label>
                                            <input type="text" onChange={e => setYiBen(e.target.value)}/>
                                        </div>
                                        <div>
                                            <label id="labels">高考成绩单：</label>
                                            <label id="labels">科目：</label>
                                            {/* <input id='1' type="text" onChange={e => setKey(e.target.value)}/>  */}
                                            <select id='1' type='text' onChange={e => setKey(e.target.value)}>
                                                <option value='none' selected>请选择</option>
                                                <option value="Math">数学</option>
                                                <option value="English">英语</option>
                                                <option value="PE">体育</option>
                                                {/* <option value="overAllAverage">所有课程平均分</option>
                                                <option value="failCount">不及格课程数量</option> */}
                                            </select>
                                            <label id="labels">成绩：</label>
                                            <input id='2' type="text" onChange={e => setValue(e.target.value)}/> 
                                            <button className='submitBtn' onClick={handleGaoKaoReport}>添加</button>
                                        </div>
                                    </div> 
                                    :
                                    <div>
                                        <div>
                                            <label>大学：</label>
                                            <input type='text' onChange={e => setUniversity(e.target.value)}></input>
                                        </div>
                                        <div>
                                            <label>大学种类：</label>
                                            <select id='1' type='text' onChange={e => setUniversityType(e.target.value)}>
                                                <option value='none' selected>请选择</option>
                                                <option value="一本">一本</option>
                                                <option value="二本">二本</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label id="labels">大学成绩单：</label>
                                            <label id="labels">科目：</label>
                                            <input id='3' type="text" onChange={e => setKey(e.target.value)}/>
                                            {/* <select id='3' type='text' onChange={e => setKey(e.target.value)}>
                                                <option value='none' selected>请选择</option>
                                                <option value="Math">数学</option>
                                                <option value="CET4">CET4</option>
                                                <option value="CET6">CET6</option>
                                                <option value="PE">体育</option>
                                                <option value="overAllAverage">所有课程平均分</option>
                                                <option value="failCount">不及格课程数量</option>
                                            </select> */}
                                            <label id="labels">成绩：</label>
                                            <input id='4' type="text" onChange={e => setValue(e.target.value)}/>
                                            <button className='submitBtn' onClick={handleZhaoFeiDaXueReport}>添加</button>
                                        </div>
                                        <div>
                                            <label>面试试题（分数）：</label>
                                            <input type='text' onChange={e => setInterview(e.target.value)}></input>
                                        </div>
                                        <div>
                                            <label>气质仪表：</label>
                                            <select onChange={e => setAppearance(e.target.value)}>
                                                <option value='none' selected>请选择</option>
                                                <option value="合格">合格</option>
                                                <option value="不合格">不合格</option>
                                            </select>
                                        </div>
                                    </div>}
                                <div>
                                    <label>家庭（具体航空相关领域）：</label>
                                    <input id='fam' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleFamily}>添加</button>
                                </div> 
                                <div>
                                    <label>阶段奖惩：</label>
                                    <select onChange={e => setKey(e.target.value)}>
                                        {zhaoFeiRewardPenelty.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                    <label id="labels">内容：</label>
                                    <input id='7' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleZhaoFeiRewardPenelty}>添加</button>
                                </div>
                            </div>
                            <div id="subsec2">
                                <div>
                                    <label>飞行相关爱好：</label>
                                    <input id='5' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleHobby}>添加</button>
                                </div>
                                <div>
                                    <label>飞行相关成果：</label>
                                    <input id='6' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleAchivement}>添加</button>
                                </div>
                                <div>
                                    <label>游戏测试：</label>
                                    <select onChange={e => setGameTest(e.target.value)}>
                                        <option value='none' selected>请选择</option>
                                        <option value="优秀">优秀</option>
                                        <option value="正常">正常</option>
                                        <option value="差">差</option>
                                    </select>
                                </div>
                                <div>
                                    <label>模拟机测试：</label>
                                    <select onChange={e => setSimulatorTest(e.target.value)}>
                                        <option value='none' selected>请选择</option>
                                        <option value="优秀">优秀</option>
                                        <option value="正常">正常</option>
                                        <option value="差">差</option>
                                    </select>
                                </div>
                                <div>
                                    <label>空间定位测试：</label>
                                    <select onChange={e => setSpaceSense(e.target.value)}>
                                        <option value='none' selected>请选择</option>
                                        <option value="优秀">优秀</option>
                                        <option value="正常">正常</option>
                                        <option value="差">差</option>
                                    </select>
                                </div>
                                <div>
                                    <label>心里测试结果:</label>
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
                    <div style={{color: "gold"}}>已录入数据：
                        <br/>
                        高考成绩单: &nbsp;
                        {gaoKaoReport.map(pair => {
                            return (
                                <>
                                    {Object.entries(pair)[0][0]} : {Object.entries(pair)[0][1]}
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            )
                        })}
                        <br/>
                        大学成绩单：&nbsp;
                        {zhaoFeiDaXueReport.map(pair => {
                            return (
                                <>
                                    {Object.entries(pair)[0][0]} : {Object.entries(pair)[0][1]}
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            )
                        })}
                        <br/>
                        家庭：&nbsp;
                        {family.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        相关爱好：&nbsp;
                        {hobby.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        相关成果：&nbsp;
                        {achivements.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        招飞学校奖励：&nbsp;
                        {zhaoFeiSchoolReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        招飞学校惩罚：&nbsp;
                        {zhaoFeiSchoolPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        招飞社会奖励：&nbsp;
                        {zhaoFeiSocialReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        招飞社会惩罚：&nbsp;
                        {zhaoFeiSocialPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                    </div>
                </div> : <></>}
            {stage === "pilotSchool" ? 
                <div className='stage'>
                    <label style={{color: 'gold'}}>航校理论阶段</label>
                    <form onSubmit={handleGroundPhase}>
                        <div className='section2'>
                            <div>
                                <label id="labels">名字: </label> &nbsp;
                                <input type="text" onChange={e => setName(e.target.value)}/>
                            </div>
                            <div>
                                <label id="labels">大学成绩单：</label>
                                <label id="labels">科目：</label>
                                <input id='8' type="text" onChange={e => setKey(e.target.value)}/>
                                <label id="labels">成绩：</label>
                                <input id='9' type="text" onChange={e => setValue(e.target.value)}/>
                                <button className='submitBtn' onClick={handleGroundDaXueReport}>添加</button>
                            </div>
                            <div>
                                <label>阶段奖惩：</label>
                                <select onChange={e => setKey(e.target.value)}>
                                    {liLunRewardPenelty.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.text}
                                        </option>
                                    ))}
                                </select>
                                <label id="labels">内容：</label>
                                <input id='10' type='text' onChange={e => setValue(e.target.value)}></input>
                                <button className='submitBtn' onClick={handleGroundRewardPenelty}>添加</button>
                            </div>
                            <div>
                                <label>心里测试结果:</label>
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
                    <div style={{color: "gold"}}>已录入数据:
                        <br/>
                        大学成绩单：&nbsp;
                        {groundDaXueReport.map(pair => {
                            return (
                                <>
                                    {Object.entries(pair)[0][0]} : {Object.entries(pair)[0][1]}
                                    &nbsp;&nbsp;&nbsp;
                                </>
                            )
                        })}
                        <br/>
                        理论学校奖励：&nbsp;
                        {groundSchoolReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        理论学校惩罚：&nbsp;
                        {groundSchoolPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        理论社会奖励：&nbsp;
                        {groundSocialReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        理论社会惩罚：&nbsp;
                        {groundSocialPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                    </div>
                </div> : <></>}
            {stage === "training" ? 
                <div className='stage'>
                    <label style={{color: 'gold'}}>飞行训练阶段</label>
                    <form onSubmit={handleTrainingPhase}>
                        <div className='section1'>
                            <div id='subsec1'>
                                <div>
                                    <label id="labels">名字: </label> &nbsp;
                                    <input type="text" onChange={e => setName(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">理论考试不及格次数: </label> &nbsp;
                                    <input type="text" onChange={e => setTrainingTestFailTimes(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">航校训练加时: </label> &nbsp;
                                    <input type="text" onChange={e => setTrainingOvertime(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">航校检查补考次数: </label> &nbsp;
                                    <input type="text" onChange={e => setTrainingExamExtraTimes(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">航校训练事故: </label> &nbsp;
                                    <input id='trainingAccident' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleTrainingAccident}>添加</button>
                                </div>
                            </div>
                            <div id="subsec2">
                                <div>
                                    <label>阶段奖惩：</label>
                                    <select onChange={e => setKey(e.target.value)}>
                                        {feiXunRewardPenelty.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                    <label id="labels">内容：</label>
                                    <input id='11' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleTrainingRewardPenelty}>添加</button>
                                </div>
                                <div>
                                    <label>心里测试结果:</label>
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
                    <div style={{color: "gold"}}>已录入数据:
                        <br/>
                        航校训练事故:&nbsp;
                        {trainingAccident.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        飞训航校奖励：&nbsp;
                        {trainingSchoolReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        飞训航校惩罚：&nbsp;
                        {trainingSchoolPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        飞训社会奖励：&nbsp;
                        {trainingSocialReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        飞训社会惩罚：&nbsp;
                        {trainingSocialPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                    </div>
                </div> : <></>}
            {stage === "operating" ? 
                <div className='stage'>
                    <label style={{color: 'gold'}}>副驾驶资质训练阶段</label>
                    <form onSubmit={handleOperatingPhase}>
                        <div className='section1'>
                            <div id='subsec1'>
                                <div>
                                    <label id="labels">名字: </label> &nbsp;
                                    <input type="text" onChange={e => setName(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">换证考试成绩: </label> &nbsp;
                                    <label id="labels">科目：</label>
                                    <input id='12' type="text" onChange={e => setKey(e.target.value)}/>
                                    <label id="labels">成绩：</label>
                                    <input id='13' type="text" onChange={e => setValue(e.target.value)}/> 
                                    <button className='submitBtn' onClick={handleOperatingExamRetakeTimes}>添加</button>
                                </div>
                                <div>
                                    <label id="labels">改装理论考试补考次数: </label> &nbsp;
                                    <input type="text" onChange={e => setOperatingExamRetakeTimes(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">入队考试不合格次数: </label> &nbsp;
                                    <input type="text" onChange={e => setOperatingExmaFailTimes(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">APT+改装检查补考次数: </label> &nbsp;
                                    <input type="text" onChange={e => setAptRetakeTimes(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">量化考核评分: </label> &nbsp;
                                    <input type="text" onChange={e => setJudgingScore(e.target.value)}/>
                                </div>
                            </div>
                            <div id="subsec2">
                                <div>
                                    <label id="labels">商仪航换证时长(月): </label> &nbsp;
                                    <input type="text" onChange={e => setUpdateTime(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">入队报到时长(月): </label> &nbsp;
                                    <input type="text" onChange={e => setReadToJoinTime(e.target.value)}/>
                                </div>
                                <div>
                                    <label id="labels">卫生情况: </label> &nbsp;
                                    <select type='text' onChange={e => {setLivingCondition(e.target.value)}}>
                                        <option value='none' selected>请选择</option>
                                        <option value="优秀">优秀</option>
                                        <option value="正常">正常</option>
                                        <option value="差">差</option>
                                    </select>
                                </div>
                                <div>
                                    <label>阶段奖惩：</label>
                                    <select onChange={e => setKey(e.target.value)}>
                                        {yunXingRewardPenelty.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                    <label id="labels">内容：</label>
                                    <input id='14' type='text' onChange={e => setValue(e.target.value)}></input>
                                    <button className='submitBtn' onClick={handleOperatingRewardPenelty}>添加</button>
                                </div>
                                <div>
                                    <label>心里测试结果:</label>
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
                    <div style={{color: "gold"}}>已录入数据:
                        <br/>
                        换证考试成绩：&nbsp;
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
                        副驾驶资质航校奖励：&nbsp;
                        {operatingSchoolReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        副驾驶资质航校惩罚：&nbsp;
                        {operatingSchoolPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        副驾驶资质社会奖励：&nbsp;
                        {operatingSocialReward.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                        <br/>
                        副驾驶资质社会惩罚：&nbsp;
                        {operatingSocialPenelty.map(item => {
                            return (<>{item}&nbsp;&nbsp;&nbsp;</>)
                        })}
                    </div>
                </div> : <></>}
        </div>
    );
}

export default NewPilot;

