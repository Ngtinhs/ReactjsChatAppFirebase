import React from 'react'
import Add from '../img/addAvatar.png'

const Dangnhap = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <div className="logo">NgTinh</div>
            <div className="title">Đăng nhập</div>
            <form>
                <input type="emal" placeholder='Nhap email' />
                <input type="password" placeholder='Nhap mat khau'/>
                <button>Đăng nhập</button>
            </form>
            <p>Bạn chưa có tài khoản? Đăng ký</p>
        </div>
    </div>
  )
}

export default Dangnhap