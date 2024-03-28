import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; 

function Header({ user, handleLogout }) {
  return (
    <div className="navbar bg-red-400">
      <div className="flex-1">
        {user && (
          <a className="btn btn-ghost text-xl">สวัสดี, {user.name}</a>
        )}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/profile">โปรไฟล์ของฉัน</NavLink>
          </li>
          <li>
            <NavLink to="/settings">ตั้งค่า</NavLink>
          </li>
          <li>
            <NavLink to='#' onClick={handleLogout}>ออกจากระบบ</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

function GuestHeader() {
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
        <div className="flex-1">
          <img src="../phpto/images.png" alt="" className='b3 rounded-full h-8 w-8 object-contain float-right mt-[-20px]'/>
        </div>
        <div className="flex justify-between gap-40">
          <NavLink exact to="/" className="mx-20 font-semibold text-white">หน้าหลัก</NavLink>
          <NavLink to="/product" className="mx-20 font-semibold text-white" activeClassName="text-red-600">กล้องให้เช่า</NavLink>
          <NavLink to="/reviews" className="mx-20 font-semibold text-white" activeClassName="text-red-600">ขั้นตอนการเช่า</NavLink>
          <NavLink to="/contact" className="mx-20 font-semibold text-white" activeClassName="text-red-600">ติดต่อเรา</NavLink>
        </div>
        <div className="flex-none">
          <ul className="fixed inset-x-0 top-0 flex justify-end items-center p-1">
            <li>
              <NavLink to="/login" className="mx-3 text-sm border border-red-500 rounded-md px-2 py-1" style={{ color: '#ffff', backgroundColor: "red" }}>เข้าสู่ระบบ</NavLink>
            </li>
            <li>
              <NavLink to="/register" className="mx-5 text-sm border border-green-500 rounded-md px-2 py-1" style={{ color: '#ffff', backgroundColor: 'green' }}>สมัครสมาชิก</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <img src="../phpto/ร้าน-ให้เช่ากล้อง-เลนส์-Lenslineup-2-1200x500.png" alt="" style={{ maxWidth: '50%', height: 'auto' }} />
      </div>
      {/* เพิ่มเข้ามาที่นี่ */}
      <div className="flex justify-center mt-4">
        <input type="text" placeholder="ค้นหา..." className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500" />
      </div>
      {/* End เพิ่มเข้ามาที่นี่ */}
      <div className="flex justify-center mt-8">
        <div className="card card-compact w-80 bg-white shadow-xl mx-4">
          <figure className="px-10 pt-10">
            <img src="../phpto/3-canon-400x181.png" alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">กล้องเลนส์ Canon</h2>
          </div>
        </div>
        <div className="card card-compact w-80 bg-white shadow-xl mx-4">
          <figure className="px-10 pt-10">
            <img src="../phpto/3-fujifilm-update-t2-400x181.png" alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">กล้องเลนส์ Fujifilm</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="card card-compact w-80 bg-white shadow-xl mx-4">
          <figure className="px-10 pt-10">
            <img src="../phpto/3-sony-update-400x181.png" alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">กล้องเลนส์ Sony</h2>
          </div>
        </div>
        <div className="card card-compact w-80 bg-white shadow-xl mx-4">
          <figure className="px-10 pt-10">
            <img src="../phpto/3-nikon1-400x181.png" alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">กล้องเลนส์ Nikon</h2>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function AppHeader() {
  const { user, logout } = useAuth();

  if (user?.role === 'admin') {
    return <Header user={user} handleLogout={() => logout()} />;
  } else if (user?.id) {
    return <Header user={user} handleLogout={() => logout()} />;
  } else {
    return <GuestHeader />;
  }
}
