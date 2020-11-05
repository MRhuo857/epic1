import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const HeaderWrapper=styled.div`
border: 1px solid red;
`
function Header() {
return(
  <HeaderWrapper>
    <nav>
      <Link to="/">首页</Link>
      <Link to="/history">历史页面</Link>
      <Link to="/about">关于我</Link>
    </nav>
  </HeaderWrapper>
)
}
export default Header