import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ backgroundColor: '@primary-color', width: '1000px' }}
      >
        <Menu.Item key="product-request" style={{ color: 'white' }}>
          <Link to='/myform'>PR</Link>
        </Menu.Item>
        <Menu.Item key="separator" disabled style={{ color: 'white' }}>
          ||
        </Menu.Item>
        <Menu.Item key="product-order" style={{ color: 'white' }}>
          PO
        </Menu.Item>
       
      </Menu>
    </div>
  );
};

export default Navbar;
