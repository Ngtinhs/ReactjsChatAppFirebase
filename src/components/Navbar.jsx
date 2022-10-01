import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Ngtinh</span>
        <div className="user">
            <img src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/274615944_1400460803744919_641614232942927374_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DbaZXkwdsPEAX8QSJCe&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT-6RSdooTNyXHuuMNHTfIgOlHEVJ_j6jcL2vRKjdQHX-A&oe=633CCE8D" alt="ngiu tinhs" />
            <span>Nguyễn Tính</span>
            <button>Đăng xuất</button>
        </div>
    </div>
  )
}

export default Navbar