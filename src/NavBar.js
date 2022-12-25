import React from "react";
import './NavBarStyle.css';
import springLogo from './springAirlines.jpg'

function NavBar() {
  return (
    <div className='all'>
        <div className='header'>
          <img style={{width: '100px'}} src={springLogo}/>
          <h1> Professionalism Lifecycle Management System </h1>
        </div> &nbsp;
        <div className="navbar">
          <a id='page' href='/'>首页</a><br/>
          {/* <a id='page' href='/recruitingStage'>招飞阶段</a>
          <a id='page' href='/groundStage'>航校理论阶段</a>
          <a id='page' href='/trainingStage'>飞行训练阶段</a>
          <a id='page' href='/operatingStage'>副驾驶岗前资质训练阶段</a> */}
          <a id='page' href='/newPilot'>数据录入</a>
          <a id='page' href='/dataRevise'>数据修改/删除</a>
        </div>
    </div>
  );
}

export default NavBar;
