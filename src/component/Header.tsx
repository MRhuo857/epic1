import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
return(
  <div>
    <nav>
      <Link to="/">首页</Link>
      |
      <Link to="/history">历史页面</Link>
      |
      <Link to="/about">关于我</Link>
    </nav>
  </div>
)
}
export default Header