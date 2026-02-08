import {React, useState} from 'react'
import logo from "../../assets/swift_logo.png"
import SearchBox from './SearchBox';
import "./Header.css"
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import person from "../../assets/person.jpg"

import { FaShieldAlt } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';



const Header = () => {
        const [anchorEl, setAnchorEl] = useState(null);
  const openmyAcc = Boolean(anchorEl);

       const [anchorElNotifications, setAnchorElNotifications] = useState(null);
const openNotifications = Boolean(anchorElNotifications);



     const handleClickmyAcc = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClosemyAcc = () => {
    setAnchorEl(null);
  };

const handleOpenNotifications=(event)=>{
    setAnchorElNotifications(event.currentTarget)
}
const handleCloseNotifications=()=>{
    setAnchorElNotifications(null)
}



  return (
     <header className='d-flex align-items-center'>
        <div className="container-fluid w-100">
            <div className="row d-flex align-items-center part-1 w-100">
                {/* logo wrapper */}
                <div className="col-sm-2">
                <Link to={'/'} className='d-flex align-items-center swift_logo'>
                <img src={logo} alt=''/>
                <span className='ms-2'>SaadPanel</span>
                </Link>
                </div>

                <div className='col-sm-3 d-flex align-items-center part-2 '>
                <Button className='rounded-circle me-3'><MdMenuOpen/></Button>
                <SearchBox/>
                </div>


                <div className='col-sm-7 d-flex align-items-center justify-content-end part-3 '>
                <Button className='rounded-circle me-3'><MdOutlineLightMode/></Button>
                <Button className='rounded-circle me-3'><IoCartOutline/></Button>
                <Button className='rounded-circle me-3'><MdOutlineMailOutline/></Button>
                <Button className='rounded-circle me-3' onClick={handleOpenNotifications}>
                    <FaRegBell/></Button>

                  <Menu
        anchorEl={anchorElNotifications}
        className="Notifications"
        id="Notifications"
        open={openNotifications}
        onClose={handleCloseNotifications}
        onClick={handleCloseNotifications}

    
       
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

        

      >
      

        <div className="head ">
            <h4 className='px-3 mb-2'> Order (12) </h4>
        </div>
        <Divider />

          <div className="scroll " >

     <MenuItem onClick={handleCloseNotifications} className='dropdown-list ' >
        <div className='d-flex'>
            <div>
            <div className="userimg">
                        <span className="rounded-circle ">
                            <img src={person} alt="user" className='w-100' />
                        </span>
                    </div>
          </div>
                    <div className="info dropdowninfo">
                        <h4><span><b>Saad</b> added to his favourate list <b>lather belt steve medan</b></span></h4>
                        <p className='mb-0 text-sky mt-0'>few second ago</p>
                    </div>
         </div>
        </MenuItem>
        <MenuItem onClick={handleCloseNotifications} className='dropdown-list ' >
        <div className='d-flex'>
            <div>
            <div className="userimg">
                        <span className="rounded-circle ">
                            <img src={person} alt="user" className='w-100' />
                        </span>
                    </div>
          </div>
                    <div className="info dropdowninfo">
                        <h4><span><b>Saad</b> added to his favourate list <b>lather belt steve medan</b></span></h4>
                        <p className='mb-0 text-sky mt-0'>few second ago</p>
                    </div>
         </div>
        </MenuItem>
        <MenuItem onClick={handleCloseNotifications} className='dropdown-list ' >
        <div className='d-flex'>
            <div>
            <div className="userimg">
                        <span className="rounded-circle ">
                            <img src={person} alt="user" className='w-100' />
                        </span>
                    </div>
          </div>
                    <div className="info dropdowninfo">
                        <h4><span><b>Saad</b> added to his favourate list <b>lather belt steve medan</b></span></h4>
                        <p className='mb-0 text-sky mt-0'>few second ago</p>
                    </div>
         </div>
        </MenuItem>
        <MenuItem onClick={handleCloseNotifications} className='dropdown-list ' >
        <div className='d-flex'>
            <div>
            <div className="userimg">
                        <span className="rounded-circle ">
                            <img src={person} alt="user" className='w-100' />
                        </span>
                    </div>
          </div>
                    <div className="info dropdowninfo">
                        <h4><span><b>Saad</b> added to his favourate list <b>lather belt steve medan</b></span></h4>
                        <p className='mb-0 text-sky mt-0'>few second ago</p>
                    </div>
         </div>
        </MenuItem>
        <MenuItem onClick={handleCloseNotifications} className='dropdown-list ' >
        <div className='d-flex'>
            <div>
            <div className="userimg">
                        <span className="rounded-circle ">
                            <img src={person} alt="user" className='w-100' />
                        </span>
                    </div>
          </div>
                    <div className="info dropdowninfo">
                        <h4><span><b>Saad</b> added to his favourate list <b>lather belt steve medan</b></span></h4>
                        <p className='mb-0 text-sky mt-0'>few second ago</p>
                    </div>
         </div>
        </MenuItem>
        <MenuItem onClick={handleCloseNotifications} className='dropdown-list ' >
        <div className='d-flex'>
            <div>
            <div className="userimg">
                        <span className="rounded-circle ">
                            <img src={person} alt="user" className='w-100' />
                        </span>
                    </div>
          </div>
                    <div className="info dropdowninfo">
                        <h4><span><b>Saad</b> added to his favourate list <b>lather belt steve medan</b></span></h4>
                        <p className='mb-0 text-sky mt-0'>few second ago</p>
                    </div>
         </div>
        </MenuItem>
        <MenuItem onClick={handleCloseNotifications} className='dropdown-list ' >
        <div className='d-flex'>
            <div>
            <div className="userimg">
                        <span className="rounded-circle ">
                            <img src={person} alt="user" className='w-100' />
                        </span>
                    </div>
          </div>
                    <div className="info dropdowninfo">
                        <h4><span><b>Saad</b> added to his favourate list <b>lather belt steve medan</b></span></h4>
                        <p className='mb-0 text-sky mt-0'>few second ago</p>
                    </div>
         </div>
        </MenuItem>
        <MenuItem onClick={handleCloseNotifications} className='dropdown-list ' >
        <div className='d-flex'>
            <div>
            <div className="userimg">
                        <span className="rounded-circle ">
                            <img src={person} alt="user" className='w-100' />
                        </span>
                    </div>
          </div>
                    <div className="info dropdowninfo">
                        <h4><span><b>Saad</b> added to his favourate list <b>lather belt steve medan</b></span></h4>
                        <p className='mb-0 text-sky mt-0'>few second ago</p>
                    </div>
         </div>
        </MenuItem>
        <MenuItem onClick={handleCloseNotifications} className='dropdown-list ' >
        <div className='d-flex'>
            <div>
            <div className="userimg">
                        <span className="rounded-circle ">
                            <img src={person} alt="user" className='w-100' />
                        </span>
                    </div>
          </div>
                    <div className="info dropdowninfo">
                        <h4><span><b>Saad</b> added to his favourate list <b>lather belt steve medan</b></span></h4>
                        <p className='mb-0 text-sky mt-0'>few second ago</p>
                    </div>
         </div>
        </MenuItem>
        <MenuItem onClick={handleCloseNotifications} className='dropdown-list ' >
        <div className='d-flex'>
            <div>
            <div className="userimg">
                        <span className="rounded-circle ">
                            <img src={person} alt="user" className='w-100' />
                        </span>
                    </div>
          </div>
                    <div className="info dropdowninfo">
                        <h4><span><b>Saad</b> added to his favourate list <b>lather belt steve medan</b></span></h4>
                        <p className='mb-0 text-sky mt-0'>few second ago</p>
                    </div>
         </div>
        </MenuItem>
        </div>
        
        <div className="ps-2 pe-2">
            <button className="btn btn-primary w-100">
               View All Notifications
            </button>
        </div>
                  </Menu>


                <div className="myAcc-wrapper">
                      <Button className="myAcc d-flex align-items-center">
                    <div className="userimg">
                        <span className="rounded-circle">
                            <img src={person} alt="" />
                        </span>
                    </div>

                    <div className="userinfo  " onClick={handleClickmyAcc} >

                        <h4>Rao Saad</h4>
                        <p className='mb-0'>@saad123</p>
                    </div>
                    </Button>

                       <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openmyAcc}
        onClose={handleClosemyAcc}
        onClick={handleClosemyAcc}
       
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <MenuItem onClick={handleClosemyAcc}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          My Account
        </MenuItem>
        <MenuItem onClick={handleClosemyAcc}>
          <FaShieldAlt className='me-2'>
            <PersonAdd fontSize="small" />
          </FaShieldAlt>
          Reset Password
        </MenuItem>
        <MenuItem onClick={handleClosemyAcc}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
                       </Menu>
                </div>
              
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header