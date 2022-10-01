import React from 'react'
import Add from '../img/addAvatar.png'

const Dangky = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <div className="logo">Tính như</div>
            <div className="title">Đăng ký</div>
            <form>
                <input type="text" placeholder='Nhập tên của bạn'/>
                <input type="emal" placeholder='Nhập email' />
                <input type="password" placeholder='Nhập mật khẩu'/>
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