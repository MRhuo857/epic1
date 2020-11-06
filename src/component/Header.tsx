import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import x from '../icons/logo.svg'

console.log(x);
const HeaderWrapper=styled.div`
  border: 1px solid red;
  padding: 10px;
  background: rgba(52,58,64);
  nav{
    color: white;
  }
`
function Header() {
return(
  <HeaderWrapper>
    <img src="x" alt=""/>
    <nav>
      <Link to="/">首页</Link>
      <Link to="/history">历史页面</Link>
      <Link to="/about">关于我</Link>
    </nav>
  </HeaderWrapper>
)
}
export default Header