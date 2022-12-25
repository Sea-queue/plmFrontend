import React, {useState, useEffect} from 'react'
import axios from 'axios'
import config from './config'
import './DataReviseStyle.css'


function DataRevise() {
    const [name, setName] = useState('')
    const [key, setKey] = useState('')
    const [value, setValue] = useState('')
    const [allPilotNames, setAllPilotNames] = useState([])
    const [oldName, setOldName] = useState('')
    const [newName, setNewName] = useState('')
    const [old批次, setOld批次] = useState('')
    const [new批次, setNew批次] = useState('')
    const [old学生类型, setOld学生类型] = useState('')
    const [new学生类型, setNew学生类型] = useState('')
    const [old高考总分, setOld高考总分] = useState('')
    const [new高考总分, setNew高考总分] = useState('')
    const [old当地二本线, setOld当地二本线] = useState('')
    const [new当地二本线, setNew当地二本线] = useState('')
    const [old当地一本线, setOld当地一本线] = useState('')
    const [new当地一本线, setNew当地一本线] = useState('')
    const [old高考成绩单, setOld高考成绩单] = useState('')
    const [new高考成绩单, setNew高考成绩单] = useState('')
    const [old大学, setOld大学] = useState('')
    const [new大学, setNew大学] = useState('')
    const [old大学种类, setOld大学种类] = useState('')
    const [new大学种类, setNew大学种类] = useState('')
    const [old招飞大学成绩单, setOld招飞大学成绩单] = useState('')
    const [new招飞大学成绩单, setNew招飞大学成绩单] = useState('')
    const [old家庭, setOld家庭] = useState('')
    const [new家庭, setNew家庭] = useState('')
    const [old与职业相关爱好, setOld与职业相关爱好] = useState('')
    const [new与职业相关爱好, setNew与职业相关爱好] = useState('')
    const [old与职业相关成果, setOld与职业相关成果] = useState('')
    const [new与职业相关成果, setNew与职业相关成果] = useState('')
    const [old游戏测试, setOld游戏测试] = useState('')
    const [new游戏测试, setNew游戏测试] = useState('')
    const [old模拟机测试, setOld模拟机测试] = useState('')
    const [new模拟机测试, setNew模拟机测试] = useState('')
    const [old空间定位测试, setOld空间定位测试] = useState('')
    const [new空间定位测试, setNew空间定位测试] = useState('')
    const [old面试前开放性试题, setOld面试前开放性试题] = useState('')
    const [new面试前开放性试题, setNew面试前开放性试题] = useState('')
    const [old气质仪表, setOld气质仪表] = useState('')
    const [new气质仪表, setNew气质仪表] = useState('')
    const [old招飞学校奖励, setOld招飞学校奖励] = useState('')
    const [new招飞学校奖励, setNew招飞学校奖励] = useState('')
    const [old招飞学校惩罚, setOld招飞学校惩罚] = useState('')
    const [new招飞学校惩罚, setNew招飞学校惩罚] = useState('')
    const [old招飞社会奖励, setOld招飞社会奖励] = useState('')
    const [new招飞社会奖励, setNew招飞社会奖励] = useState('')
    const [old招飞社会惩罚, setOld招飞社会惩罚] = useState('')
    const [new招飞社会惩罚, setNew招飞社会惩罚] = useState('')
    const [old招飞心里测试结果, setOld招飞心里测试结果] = useState('')
    const [new招飞心里测试结果, setNew招飞心里测试结果] = useState('')
    const [old理论大学成绩单, setOld理论大学成绩单] = useState('')
    const [new理论大学成绩单, setNew理论大学成绩单] = useState('')
    const [old理论学校奖励, setOld理论学校奖励] = useState('')
    const [new理论学校奖励, setNew理论学校奖励] = useState('')
    const [old理论学校惩罚, setOld理论学校惩罚] = useState('')
    const [new理论学校惩罚, setNew理论学校惩罚] = useState('')
    const [old理论社会奖励, setOld理论社会奖励] = useState('')
    const [new理论社会奖励, setNew理论社会奖励] = useState('')
    const [old理论社会惩罚, setOld理论社会惩罚] = useState('')
    const [new理论社会惩罚, setNew理论社会惩罚] = useState('')
    const [old理论心里测试结果, setOld理论心里测试结果] = useState('')
    const [new理论心里测试结果, setNew理论心里测试结果] = useState('')
    const [old理论补考次数, setOld理论补考次数] = useState('')
    const [new理论补考次数, setNew理论补考次数] = useState('')
    const [old航校训练加时, setOld航校训练加时] = useState('')
    const [new航校训练加时, setNew航校训练加时] = useState('')
    const [old航校检查补考次数, setOld航校检查补考次数] = useState('')
    const [new航校检查补考次数, setNew航校检查补考次数] = useState('')
    const [old航校训练事故, setOld航校训练事故] = useState('')
    const [new航校训练事故, setNew航校训练事故] = useState('')
    const [old飞训航校奖励, setOld飞训航校奖励] = useState('')
    const [new飞训航校奖励, setNew飞训航校奖励] = useState('')
    const [old飞训航校惩罚, setOld飞训航校惩罚] = useState('')
    const [new飞训航校惩罚, setNew飞训航校惩罚] = useState('')
    const [old飞训社会奖励, setOld飞训社会奖励] = useState('')
    const [new飞训社会奖励, setNew飞训社会奖励] = useState('')
    const [old飞训社会惩罚, setOld飞训社会惩罚] = useState('')
    const [new飞训社会惩罚, setNew飞训社会惩罚] = useState('')
    const [old飞训心里测试结果, setOld飞训心里测试结果] = useState('')
    const [new飞训心里测试结果, setNew飞训心里测试结果] = useState('')
    const [old换证考试成绩, setOld换证考试成绩] = useState('')
    const [new换证考试成绩, setNew换证考试成绩] = useState('')
    const [old改装理论考试补考次数, setOld改装理论考试补考次数] = useState('')
    const [new改装理论考试补考次数, setNew改装理论考试补考次数] = useState('')
    const [old入队考试不合格次数, setOld入队考试不合格次数] = useState('')
    const [new入队考试不合格次数, setNew入队考试不合格次数] = useState('')
    const [oldAPT改装检查补考次数, setOldAPT改装检查补考次数] = useState('')
    const [newAPT改装检查补考次数, setNewAPT改装检查补考次数] = useState('')
    const [old量化考核评分, setOld量化考核评分] = useState('')
    const [new量化考核评分, setNew量化考核评分] = useState('')
    const [old运行航校奖励, setOld运行航校奖励] = useState('')
    const [new运行航校奖励, setNew运行航校奖励] = useState('')
    const [old运行航校惩罚, setOld运行航校惩罚] = useState('')
    const [new运行航校惩罚, setNew运行航校惩罚] = useState('')
    const [old运行社会奖励, setOld运行社会奖励] = useState('')
    const [new运行社会奖励, setNew运行社会奖励] = useState('')
    const [old运行社会惩罚, setOld运行社会惩罚] = useState('')
    const [new运行社会惩罚, setNew运行社会惩罚] = useState('')
    const [old商仪航换证时长, setOld商仪航换证时长] = useState('')
    const [new商仪航换证时长, setNew商仪航换证时长] = useState('')
    const [old入队报到间隔时长, setOld入队报到间隔时长] = useState('')
    const [new入队报到间隔时长, setNew入队报到间隔时长] = useState('')
    const [old卫生情况, setOld卫生情况] = useState('')
    const [new卫生情况, setNew卫生情况] = useState('')
    const [old运行心里测试结果, setOld运行心里测试结果] = useState('')
    const [new运行心里测试结果, setNew运行心里测试结果] = useState('')
    
    useEffect(() => {
        async function fetchAllPilots() {
            try {
                //const response = await axios.post(config.developmentHost + '/pilot/get_all_pilot');
                const response = await axios.post(config.productionHost + '/pilot/get_all_pilot');
                // console.log("all pilot names in DR:", response.data)
                // var names = []
                // response.data.forEach(element => names.push(element.名字))
                setAllPilotNames(response.data)
            } catch(e) {
                console.log(e);
            }
        }
        fetchAllPilots()
    }, [allPilotNames])

    //get the info of the required the pilot, and assign the info to each parameter
    const handleGetOldInfo = async e => {
        e.preventDefault();
        if (!allPilotNames.includes(name)) {
            alert("查无此人")
        }
        try {
            // const response = await axios.post(config.developmentHost + '/pilot/get_pilot_by_name', {
            //     name:name
            // });
            const response = await axios.post(config.productionHost + '/pilot/get_pilot_by_name', {
                name:name
            });
            console.log("pilot to edit:", response.data[0])
            assignOldInfo(response.data[0])
        } catch(e) {
            console.log(e);
        }
    }

    //assign the old info to each parameter to display
    const assignOldInfo = (oldInfo) => {
        for (const key in oldInfo) {
            if (key === '名字') { setOldName(oldInfo[key]) }
            else if (key === '批次') { setOld批次(oldInfo[key]) }
            else if (key === '学生类型') { setOld学生类型(oldInfo[key]) }
            else if (key === '高考总分') { setOld高考总分(oldInfo[key]) }
            else if (key === '当地二本线') { setOld当地二本线(oldInfo[key]) }
            else if (key === '当地一本线') { setOld当地一本线(oldInfo[key]) }
            else if (key === '高考成绩单') { setOld高考成绩单(oldInfo[key]) }
            else if (key === '大学') { setOld大学(oldInfo[key]) }
            else if (key === '大学种类') { setOld大学种类(oldInfo[key]) }
            else if (key === '招飞大学成绩单') { setOld招飞大学成绩单(oldInfo[key]) }
            else if (key === '家庭') { setOld家庭(oldInfo[key]) }
            else if (key === '与职业相关爱好') { setOld与职业相关爱好(oldInfo[key]) }
            else if (key === '与职业相关成果') { setOld与职业相关成果(oldInfo[key]) }
            else if (key === '游戏测试') { setOld游戏测试(oldInfo[key]) }
            else if (key === '模拟机测试') { setOld模拟机测试(oldInfo[key]) }
            else if (key === '空间定位测试') { setOld空间定位测试(oldInfo[key]) }
            else if (key === '面试前开放性试题') { setOld面试前开放性试题(oldInfo[key]) }
            else if (key === '气质仪表') { setOld气质仪表(oldInfo[key]) }
            else if (key === '招飞学校奖励') { setOld招飞学校奖励(oldInfo[key]) }
            else if (key === '招飞学校惩罚') { setOld招飞学校惩罚(oldInfo[key]) }
            else if (key === '招飞社会奖励') { setOld招飞社会奖励(oldInfo[key]) }
            else if (key === '招飞社会惩罚') { setOld招飞社会惩罚(oldInfo[key]) }
            else if (key === '招飞心里测试结果') { setOld招飞心里测试结果(oldInfo[key]) }
            else if (key === '理论大学成绩单') { setOld理论大学成绩单(oldInfo[key]) }
            else if (key === '理论学校奖励') { setOld理论学校奖励(oldInfo[key]) }
            else if (key === '理论学校惩罚') { setOld理论学校惩罚(oldInfo[key]) }
            else if (key === '理论社会奖励') { setOld理论社会奖励(oldInfo[key]) }
            else if (key === '理论社会惩罚') { setOld理论社会惩罚(oldInfo[key]) }
            else if (key === '理论心里测试结果') { setOld理论心里测试结果(oldInfo[key]) }
            else if (key === '理论补考次数') { setOld理论补考次数(oldInfo[key]) }
            else if (key === '航校训练加时') { setOld航校训练加时(oldInfo[key]) }
            else if (key === '航校检查补考次数') { setOld航校检查补考次数(oldInfo[key]) }
            else if (key === '航校训练事故') { setOld航校训练事故(oldInfo[key]) }
            else if (key === '飞训航校奖励') { setOld飞训航校奖励(oldInfo[key]) }
            else if (key === '飞训航校惩罚') { setOld飞训航校惩罚(oldInfo[key]) }
            else if (key === '飞训社会奖励') { setOld飞训社会奖励(oldInfo[key]) }
            else if (key === '飞训社会惩罚') { setOld飞训社会惩罚(oldInfo[key]) }
            else if (key === '飞训心里测试结果') { setOld飞训心里测试结果(oldInfo[key]) }
            else if (key === '换证考试成绩') { setOld换证考试成绩(oldInfo[key]) }
            else if (key === '改装理论考试补考次数') { setOld改装理论考试补考次数(oldInfo[key]) }
            else if (key === '入队考试不合格次数') { setOld入队考试不合格次数(oldInfo[key]) }
            else if (key === 'APT改装检查补考次数') { setOldAPT改装检查补考次数(oldInfo[key]) }
            else if (key === '量化考核评分') { setOld量化考核评分(oldInfo[key]) }
            else if (key === '运行航校奖励') { setOld运行社会奖励(oldInfo[key]) }
            else if (key === '运行航校惩罚') { setOld运行航校惩罚(oldInfo[key]) }
            else if (key === '运行社会奖励') { setOld运行社会奖励(oldInfo[key]) }
            else if (key === '运行社会惩罚') { setOld运行社会惩罚(oldInfo[key]) }
            else if (key === '商仪航换证时长') { setOld商仪航换证时长(oldInfo[key]) }
            else if (key === '入队报到间隔时长') { setOld入队报到间隔时长(oldInfo[key]) }
            else if (key === '卫生情况') { setOld卫生情况(oldInfo[key]) }
            else if (key === '运行心里测试结果') { setOld运行心里测试结果(oldInfo[key]) }
        }
    }

    //send the new info of the pilot to backend and update in the database
    const handleUpdate = async e => {
        e.preventDefault()
        var allGood = window.confirm("确定提交信息?")
        if (allGood) {
            try {
                const response = await axios.post(config.developmentHost + '/pilot/edit', {
                    oldName:oldName,
                    newName:newName,
                    new批次: new批次,
                    new学生类型: new学生类型,
                    new高考总分: new高考总分,
                    new当地二本线: new当地二本线,
                    new当地一本线: new当地一本线,
                    new高考成绩单: new高考成绩单,
                    new大学: new大学,
                    new大学种类: new大学种类,
                    new招飞大学成绩单: new招飞大学成绩单,
                    new家庭: new家庭,
                    new与职业相关爱好: new与职业相关爱好,
                    new与职业相关成果: new与职业相关成果,
                    new游戏测试: new游戏测试,
                    new模拟机测试: new模拟机测试,
                    new空间定位测试: new空间定位测试,
                    new面试前开放性试题: new面试前开放性试题,
                    new气质仪表: new气质仪表,
                    new招飞学校奖励: new招飞学校奖励,
                    new招飞学校惩罚: new招飞学校惩罚,
                    new招飞社会奖励: new招飞社会奖励,
                    new招飞社会惩罚: new招飞社会惩罚,
                    new招飞心里测试结果: new招飞心里测试结果,
                    new理论大学成绩单: new理论大学成绩单,
                    new理论学校奖励: new理论学校奖励,
                    new理论学校惩罚: new理论学校惩罚,
                    new理论社会奖励: new理论社会奖励,
                    new理论社会惩罚: new理论社会惩罚,
                    new理论心里测试结果: new理论心里测试结果,
                    new理论补考次数: new理论补考次数,
                    new航校训练加时: new航校训练加时,
                    new航校检查补考次数: new航校检查补考次数,
                    new航校训练事故: new航校训练事故,
                    new飞训航校奖励: new飞训航校奖励,
                    new飞训航校惩罚: new飞训航校惩罚,
                    new飞训社会奖励: new飞训社会奖励,
                    new飞训社会惩罚: new飞训社会惩罚,
                    new飞训心里测试结果: new飞训心里测试结果,
                    new换证考试成绩: new换证考试成绩,
                    new改装理论考试补考次数: new改装理论考试补考次数,
                    new入队考试不合格次数: new入队考试不合格次数,
                    newAPT改装检查补考次数: newAPT改装检查补考次数,
                    new量化考核评分: new量化考核评分,
                    new运行航校奖励: new运行航校奖励,
                    new运行航校惩罚: new运行航校惩罚,
                    new运行社会奖励: new运行社会奖励,
                    new运行社会惩罚: new运行社会惩罚,
                    new商仪航换证时长: new商仪航换证时长,
                    new入队报到间隔时长: new入队报到间隔时长,
                    new卫生情况: new卫生情况,
                    new运行心里测试结果: new运行心里测试结果,
                });
                console.log("pilot edit:", response.data)
            } catch (error) {
                console.log(error);
            }
            const searchInput = document.getElementById('searchInput')
            searchInput.value = ''
            const e1 = document.getElementById('1')
            e1.value = ''
            const e2 = document.getElementById('2')
            e2.value = ''
            const e3 = document.getElementById('3')
            e3.value = ''
            const e4 = document.getElementById('4')
            e4.value = ''
            const e5 = document.getElementById('5')
            e5.value = ''
            const e6 = document.getElementById('6')
            e6.value = ''
            const e7 = document.getElementById('7')
            e7.value = ''
            const e8 = document.getElementById('8')
            e8.value = ''
            const e9 = document.getElementById('9')
            e9.value = ''
            const e10 = document.getElementById('10')
            e10.value = ''
            const e11 = document.getElementById('11')
            e11.value = ''
            const e12 = document.getElementById('12')
            e12.value = ''
            const e13 = document.getElementById('13')
            e13.value = ''
            const e14 = document.getElementById('14')
            e14.value = ''
            const e15 = document.getElementById('15')
            e15.value = ''
            const e16 = document.getElementById('16')
            e16.value = ''
            const e17 = document.getElementById('17')
            e17.value = ''
            const e18 = document.getElementById('18')
            e18.value = ''
            const e19 = document.getElementById('19')
            e19.value = ''
            const e20 = document.getElementById('20')
            e20.value = ''
            const e21 = document.getElementById('21')
            e21.value = ''
            const e22 = document.getElementById('22')
            e22.value = ''
            const e23 = document.getElementById('23')
            e23.value = ''
            const e24 = document.getElementById('24')
            e24.value = ''
            const e25 = document.getElementById('25')
            e25.value = ''
            const e26 = document.getElementById('26')
            e26.value = ''
            const e27 = document.getElementById('27')
            e27.value = ''
            const e28 = document.getElementById('28')
            e28.value = ''
            const e29 = document.getElementById('29')
            e29.value = ''
            const e30 = document.getElementById('30')
            e30.value = ''
            const e31 = document.getElementById('31')
            e31.value = ''
            const e32 = document.getElementById('32')
            e32.value = ''
            const e33 = document.getElementById('33')
            e33.value = ''
            const e34 = document.getElementById('34')
            e34.value = ''
            const e35 = document.getElementById('35')
            e35.value = ''
            const e36 = document.getElementById('36')
            e36.value = ''
            const e37 = document.getElementById('37')
            e37.value = ''
            const e38 = document.getElementById('38')
            e38.value = ''
            const e39 = document.getElementById('39')
            e39.value = ''
            const e40 = document.getElementById('40')
            e40.value = ''
            const e41 = document.getElementById('41')
            e41.value = ''
            const e42 = document.getElementById('42')
            e42.value = ''
            const e43 = document.getElementById('43')
            e43.value = ''
            const e44 = document.getElementById('44')
            e44.value = ''
            const e45 = document.getElementById('45')
            e45.value = ''
            const e46 = document.getElementById('46')
            e46.value = ''
            const e47 = document.getElementById('47')
            e47.value = ''
            const e48 = document.getElementById('48')
            e48.value = ''
            const e49 = document.getElementById('49')
            e49.value = ''
            const e50 = document.getElementById('50')
            e50.value = ''
            const e51 = document.getElementById('51')
            e51.value = ''
            
            setName('')
            setOldName('')
            setNewName('')
            setOld批次('')
            setNew批次('')
            setOld学生类型('')
            setNew学生类型('')
            setOld高考总分('')
            setNew高考总分('')
            setOld当地二本线('')
            setNew当地二本线('')
            setOld当地一本线('')
            setNew当地一本线('')
            setOld高考成绩单('')
            setNew高考成绩单('')
            setOld大学('')
            setNew大学('')
            setOld大学种类('')
            setNew大学种类('')
            setOld招飞大学成绩单('')
            setNew招飞大学成绩单('')
            setOld家庭('')
            setNew家庭('')
            setOld与职业相关爱好('')
            setNew与职业相关爱好('')
            setOld与职业相关成果('')
            setNew与职业相关成果('')
            setOld游戏测试('')
            setNew游戏测试('')
            setOld模拟机测试('')
            setNew模拟机测试('')
            setOld空间定位测试('')
            setNew空间定位测试('')
            setOld面试前开放性试题('')
            setNew面试前开放性试题('')
            setOld气质仪表('')
            setNew气质仪表('')
            setOld招飞学校奖励('')
            setNew招飞学校奖励('')
            setOld招飞学校惩罚('')
            setNew招飞学校惩罚('')
            setOld招飞社会奖励('')
            setNew招飞社会奖励('')
            setOld招飞社会惩罚('')
            setNew招飞社会惩罚('')
            setOld招飞心里测试结果('')
            setNew招飞心里测试结果('')
            setOld理论大学成绩单('')
            setNew理论大学成绩单('')
            setOld理论学校奖励('')
            setNew理论学校奖励('')
            setOld理论学校惩罚('')
            setNew理论学校惩罚('')
            setOld理论社会奖励('')
            setNew理论社会奖励('')
            setOld理论社会惩罚('')
            setNew理论社会惩罚('')
            setOld理论心里测试结果('')
            setNew理论心里测试结果('')
            setOld理论补考次数('')
            setNew理论补考次数('')
            setOld航校训练加时('')
            setNew航校训练加时('')
            setOld航校检查补考次数('')
            setNew航校检查补考次数('')
            setOld航校训练事故('')
            setNew航校训练事故('')
            setOld飞训航校奖励('')
            setNew飞训航校奖励('')
            setOld飞训航校惩罚('')
            setNew飞训航校惩罚('')
            setOld飞训社会奖励('')
            setNew飞训社会奖励('')
            setOld飞训社会惩罚('')
            setNew飞训社会惩罚('')
            setOld飞训心里测试结果('')
            setNew飞训心里测试结果('')
            setOld换证考试成绩('')
            setNew换证考试成绩('')
            setOld改装理论考试补考次数('')
            setNew改装理论考试补考次数('')
            setOld入队考试不合格次数('')
            setNew入队考试不合格次数('')
            setOldAPT改装检查补考次数('')
            setNewAPT改装检查补考次数('')
            setOld量化考核评分('')
            setNew量化考核评分('')
            setOld运行航校奖励('')
            setNew运行航校奖励('')
            setOld运行航校惩罚('')
            setNew运行航校惩罚('')
            setOld运行社会奖励('')
            setNew运行社会奖励('')
            setOld运行社会惩罚('')
            setNew运行社会惩罚('')
            setOld商仪航换证时长('')
            setNew商仪航换证时长('')
            setOld入队报到间隔时长('')
            setNew入队报到间隔时长('')
            setOld卫生情况('')
            setNew卫生情况('')
            setOld运行心里测试结果('')
            setNew运行心里测试结果('')
        }
    }

    const handleGaoKaoReport = e => {
        e.preventDefault()
        var keyV = key === "" || key === "rp1" || key === "rp2" || key === "rp3" || key === "rp4" || key === "rp5" || key === "rp6" || key === "rp7" || key === "rp8" || key === "rp9" || key === "rp10" || key === "rp11" || key === "rp12" || key === "rp13" || key === "rp14" || key === "rp15" || key === "rp16"
        if (!keyV && value !== "") {
            console.log("key: ", key)
            console.log("value: ", value)
            console.log("new高考成绩单:", {...new高考成绩单})
            setNew高考成绩单([...new高考成绩单, {[key]:value}])
            const gaoKaokm = document.getElementById('52')
            gaoKaokm.value = ''
            setKey('')
            const gaoKaocj = document.getElementById('53')
            gaoKaocj.value = ''
            setValue('')
        }
        else {
            alert("请填写信息")
        }
    }

    return (
        <div className="dataRevise">
            <div id="title">
                数据修改/删除
            </div>
            <div>
                <label>搜索: </label> &nbsp;
                <input id="searchInput" type="text" onChange={e => setName(e.target.value)}/>&nbsp;
                <button id='getBtn' type="submit" onClick={handleGetOldInfo}>提取</button>
            </div>
            <div>
                已填名字：<t3 style={{color: "gold", background: "#47546e"}}>{oldName}</t3> &nbsp;
                新名字：<input id="1" type="text" onChange={e => setNewName(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填面试时间：{old批次} &nbsp;
                新面试时间：<input id="2" type="text" onChange={e => setNew批次(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填学生类型：{old学生类型} &nbsp;
                新学生类型：<select id="3" type='text' onChange={e => setNew学生类型(e.target.value)}>
                                <option value='none' selected>请选择</option>
                                <option value="养成生">养成生</option>
                                <option value="大毕改">大毕改</option>
                            </select>&nbsp;
            </div>
            <div>
                已填高考总分：{old高考总分} &nbsp;
                新高考总分：<input id="4" type="text" onChange={e => setNew高考总分(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填当地二本线：{old当地二本线} &nbsp;
                新当地二本线：<input id="5" type="text" onChange={e => setNew当地二本线(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填当地一本线：{old当地一本线} &nbsp;
                新当地一本线：<input id="6" type="text" onChange={e => setNew当地一本线(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填高考成绩单：{old高考成绩单} &nbsp;
                新高考成绩单：<label id="labels">科目：</label>
                            <select id='52' type='text' onChange={e => setKey(e.target.value)}>
                                <option value='none' selected>请选择</option>
                                <option value="Math">数学</option>
                                <option value="English">英语</option>
                                <option value="PE">体育</option>
                            </select>
                            <label id="labels">成绩：</label>
                            <input id='53' type="text" onChange={e => setValue(e.target.value)}/> 
                            <button className='submitBtn' onClick={handleGaoKaoReport}>添加</button>
            </div>
            <div>
                已填大学：{old大学} &nbsp;
                新大学：<input id="8" type="text" onChange={e => setNew大学(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填大学种类：{old大学种类} &nbsp;
                新大学种类：<input id="9" type="text" onChange={e => setNew大学种类(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填招飞大学成绩单：{old招飞大学成绩单} &nbsp;
                新招飞大学成绩单：<input id="10" type="text" onChange={e => setNew招飞大学成绩单(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填家庭：{old家庭} &nbsp;
                新家庭：<input id="11" type="text" onChange={e => setNew家庭(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填与职业相关爱好：{old与职业相关爱好} &nbsp;
                新与职业相关爱好：<input id="12" type="text" onChange={e => setNew与职业相关爱好(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填与职业相关成果：{old与职业相关成果} &nbsp;
                新与职业相关成果：<input id="13" type="text" onChange={e => setNew与职业相关成果(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填游戏测试：{old游戏测试} &nbsp;
                新游戏测试：<input id="14" type="text" onChange={e => setNew游戏测试(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填模拟机测试：{old模拟机测试} &nbsp;
                新模拟机测试：<input id="15" type="text" onChange={e => setNew模拟机测试(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填空间定位测试：{old空间定位测试} &nbsp;
                新空间定位测试：<input id="16" type="text" onChange={e => setNew空间定位测试(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填面试前开放性试题：{old面试前开放性试题} &nbsp;
                新面试前开放性试题：<input id="17" type="text" onChange={e => setNew面试前开放性试题(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填气质仪表：{old气质仪表} &nbsp;
                新气质仪表：<select onChange={e => setNew气质仪表(e.target.value)}>
                                <option value='none' selected>请选择</option>
                                <option value="合格">合格</option>
                                <option value="不合格">不合格</option>
                            </select>
            </div>
            <div>
                已填招飞学校奖励：{old招飞学校奖励} &nbsp;
                新招飞学校奖励：<input id="19" type="text" onChange={e => setNew招飞学校奖励(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填招飞学校惩罚：{old招飞学校惩罚} &nbsp;
                新招飞学校惩罚：<input id="20" type="text" onChange={e => setNew招飞学校惩罚(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填招飞社会奖励：{old招飞社会奖励} &nbsp;
                新招飞社会奖励：<input id="21" type="text" onChange={e => setNew招飞社会奖励(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填招飞社会惩罚：{old招飞社会惩罚} &nbsp;
                新招飞社会惩罚：<input id="22" type="text" onChange={e => setNew招飞社会惩罚(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填招飞心里测试结果：{old招飞心里测试结果} &nbsp;
                新招飞心里测试结果：<input id="23" type="text" onChange={e => setNew招飞心里测试结果(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填理论大学成绩单：{old理论大学成绩单} &nbsp;
                新理论大学成绩单：<input id="24" type="text" onChange={e => setNew理论大学成绩单(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填理论学校奖励：{old理论学校奖励} &nbsp;
                新理论学校奖励：<input id="25" type="text" onChange={e => setNew理论学校奖励(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填理论学校惩罚：{old理论学校惩罚} &nbsp;
                新理论学校惩罚：<input id="26" type="text" onChange={e => setNew理论学校惩罚(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填理论社会奖励：{old理论社会奖励} &nbsp;
                新理论社会奖励：<input id="27" type="text" onChange={e => setNew理论社会奖励(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填理论社会惩罚：{old理论社会惩罚} &nbsp;
                新理论社会惩罚：<input id="28" type="text" onChange={e => setNew理论社会惩罚(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填理论心里测试结果：{old理论心里测试结果} &nbsp;
                新理论心里测试结果：<input id="29" type="text" onChange={e => setNew理论心里测试结果(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填理论补考次数：{old理论补考次数} &nbsp;
                新理论补考次数：<input id="30" type="text" onChange={e => setNew理论补考次数(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填航校训练加时：{old航校训练加时} &nbsp;
                新航校训练加时：<input id="31" type="text" onChange={e => setNew航校训练加时(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填航校检查补考次数：{old航校检查补考次数} &nbsp;
                新航校检查补考次数：<input id="32" type="text" onChange={e => setNew航校检查补考次数(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填航校训练事故：{old航校训练事故} &nbsp;
                新航校训练事故：<input id="33" type="text" onChange={e => setNew航校训练事故(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填飞训航校奖励：{old飞训航校奖励} &nbsp;
                新飞训航校奖励：<input id="34" type="text" onChange={e => setNew飞训航校奖励(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填飞训航校惩罚：{old飞训航校惩罚} &nbsp;
                新飞训航校惩罚：<input id="35" type="text" onChange={e => setNew飞训航校惩罚(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填飞训社会奖励：{old飞训社会奖励} &nbsp;
                新飞训社会奖励：<input id="36" type="text" onChange={e => setNew飞训社会奖励(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填飞训社会惩罚：{old飞训社会惩罚} &nbsp;
                新飞训社会惩罚：<input id="37" type="text" onChange={e => setNew飞训社会惩罚(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填飞训心里测试结果：{old飞训心里测试结果} &nbsp;
                新飞训心里测试结果：<input id="38" type="text" onChange={e => setNew飞训心里测试结果(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填换证考试成绩：{old换证考试成绩} &nbsp;
                新换证考试成绩：<input id="39" type="text" onChange={e => setNew换证考试成绩(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填改装理论考试补考次数：{old改装理论考试补考次数} &nbsp;
                新改装理论考试补考次数：<input id="40" type="text" onChange={e => setNew改装理论考试补考次数(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填入队考试不合格次数：{old入队考试不合格次数} &nbsp;
                新入队考试不合格次数：<input id="41" type="text" onChange={e => setNew入队考试不合格次数(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填APT改装检查补考次数: {oldAPT改装检查补考次数} &nbsp;
                新APT改装检查补考次数: <input id="42" type="text" onChange={e => setNewAPT改装检查补考次数(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填量化考核评分：{old量化考核评分} &nbsp;
                新量化考核评分：<input id="43" type="text" onChange={e => setNew量化考核评分(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填运行航校奖励：{old运行航校奖励} &nbsp;
                新运行航校奖励：<input id="44" type="text" onChange={e => setNew运行航校奖励(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填运行航校惩罚：{old运行航校惩罚} &nbsp;
                新运行航校惩罚：<input id="45" type="text" onChange={e => setNew运行航校惩罚(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填运行社会奖励：{old运行社会奖励} &nbsp;
                新运行社会奖励：<input id="46" type="text" onChange={e => setNew运行社会奖励(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填运行社会惩罚：{old运行社会惩罚} &nbsp;
                新运行社会惩罚：<input id="47" type="text" onChange={e => setNew运行社会惩罚(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填商仪航换证时长：{old商仪航换证时长} &nbsp;
                新商仪航换证时长：<input id="48" type="text" onChange={e => setNew商仪航换证时长(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填入队报到间隔时长：{old入队报到间隔时长} &nbsp;
                新入队报到间隔时长：<input id="49" type="text" onChange={e => setNew入队报到间隔时长(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填卫生情况：{old卫生情况} &nbsp;
                新卫生情况：<input id="50" type="text" onChange={e => setNew卫生情况(e.target.value)}/>&nbsp;
            </div>
            <div>
                已填运行心里测试结果：{old运行心里测试结果} &nbsp;
                新运行心里测试结果：<input id="51" type="text" onChange={e => setNew运行心里测试结果(e.target.value)}/>&nbsp;
            </div>
            <button id='getBtn' type="submit" onClick={handleUpdate}>提交</button>
        </div>
    );
}

export default DataRevise;

