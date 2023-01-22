// components/Layout/Header.tsx
import React from 'react'
import Divider from '@mui/material/Divider';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useRouter } from 'next/router'
import { navigationRoutes } from '../../routes/NavigationRoutes';

const Header = () => {

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(navigationRoutes.ADD_DATA);
  }

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Divider className="px-8" orientation="vertical" flexItem />
            <AddCircleOutlineOutlinedIcon className="pl-2" fontSize='large' onClick={handleClick}/>
            <FilterAltOutlinedIcon className="pl-2" fontSize='large'/>
            <SearchOutlinedIcon className="pl-2" fontSize='large'/>
            <NotificationsIcon className="pl-2" fontSize='large'/>
        </nav>
      </div>
    </header>
  )
}

export default Header