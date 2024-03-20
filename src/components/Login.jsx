import { useState } from 'react';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="field row">
        <label className="lbl full" htmlFor="email">Email:</label>
        <input className="grow" type="text" name="email" autoComplete autoFocus value={data.email} onChange={handleChange}/>
      </div>

      <div className="field row">
        <label className="lbl full" htmlFor="password">Password:</label>
        <input className="grow" type="password" name="password" value={data.password} onChange={handleChange}/>
      </div>

      <button className="btn btn--primary" type="submit">Login</button>
    </form>
  );
}

export default Login;