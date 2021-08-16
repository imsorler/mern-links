import React from 'react'

export const AuthPage = () => {
  

  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <h1>Сократи ссылку</h1>
          <div className='card teal lighten-1'>
          <div className='card-content white-text'>
            <span className='card-title'>Авторизация</span>
            <div>
              <div className='input-field'>
                <input
                placeholder='Введите e-mail'
                id='email'
                type="text"
                name='email'
                className='yellow-input'
                />
                <label for='email'>Email</label>
              </div>
              <div className='input-field'>
                <input
                placeholder='Введите пароль'
                id='password'
                type="password"
                name='password'
                className='yellow-input'
                />
                <label for='empasswordail'>Пароль</label>
              </div>
            </div>
          </div>
          <div className='card-action'>
            <button className='btn orange darken-4' style={{marginRight: 10}}>Войти</button>
            <button className='btn cyan darken-2 black-text'>Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  )
}