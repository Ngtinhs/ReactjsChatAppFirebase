import React, { useState } from 'react'
import Add from '../img/addAvatar.png'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';

const Dangky = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0];

try {
  const res = await  createUserWithEmailAndPassword(auth, email, password)
  const storageRef = ref(storage, displayName);
  const uploadTask = uploadBytesResumable(storageRef, file);
uploadTask.on(
  (error) => {
    setErr(true)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user, {
        displayName,
        photoURL:downloadURL,
      });
      await setDoc(doc(db, "users", res.user.uid),{
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });
      await setDoc(doc(db, "userChats", res.user.uid), {})
      navigate("/")
    });
  }
);
} catch (err) {
  setErr(true)
}
};
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <div className="logo">Tính như</div>
            <div className="title">Đăng ký</div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nhập tên của bạn'/>
                <input type="emal" placeholder='Nhập email' />
                <input type="password" placeholder='Nhập mật khẩu'/>
                <input style={{display: "none"}} type="file" id="file" />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Thêm ảnh đại diện</span>
                </label>
                <button>Đăng ký</button>
                {err && <span>Đã xảy ra lỗi !</span>}
            </form>
                <p>Bạn đã có tài khoản? Đăng nhập</p>
        </div>
    </div>
  )
}

export default Dangky