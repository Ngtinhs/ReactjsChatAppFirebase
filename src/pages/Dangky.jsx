import React from 'react'
import Add from '../img/addAvatar.png'

const Dangky = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <div className="logo">NgTinh</div>
            <div className="title">Đăng ký</div>
            <form>
                <input type="text" placeholder='Nhap ten cua ban'/>
                <input type="emal" placeholder='Nhap email' />
                <input type="password" placeholder='Nhap mat khau'/>
                <input style={{display: "none"}} type="file" id="file" />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Thêm ảnh đại diện</span>
                </label>
                <button>Đăng lý</button>
                <p>Bạn đã có tài khoản? Đăng nhập</p>
            </form>
        </div>
    </div>
  )
}

export default Dangky