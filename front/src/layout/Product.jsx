import React from 'react';
import { NavLink } from 'react-router-dom';

function Product() {
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
      
      {/* แสดงการ์ดสินค้าที่ต้องการ */}
      <div className="card card-compact w-80 bg-base-100 shadow-xl mt-40 ml-60" style={{ marginLeft: '40px' }}>
        <figure className="px-10 pt-10">
          <img src="../phpto/750d-kit-300x300.png" alt="Canon EOS 760D Body" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Canon EOS 760D Body</h2>
          <p style={{ color: 'red' }}>ค่าเช่า 350 บาท/วัน</p>
          <div className="card-actions">
            <button className="btn btn-primary">เช่า</button>
          </div>
        </div>
      </div>
      
      {/* แสดงการ์ดสินค้าอีกชิ้น */}
      <div className="card card-compact w-80 bg-base-100 shadow-xl mt-40 ml-60" style={{ marginLeft: '40px' }}>
        <figure className="px-10 pt-10">
          <img src="../phpto/canon-200d-300x300.png" alt="Canon EOS 750D + 18-55 IS STM" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Canon EOS 750D + 18-55 IS STM</h2>
          <p style={{ color: 'red' }}>ค่าเช่า 350 บาท/วัน</p>
          <div className="card-actions">
            <button className="btn btn-primary">เช่า</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
