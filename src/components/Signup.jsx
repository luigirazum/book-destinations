import { useState } from 'react';

const Signup = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirm: ''
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
      <h2>Sign up</h2>
      <div className="field row ">
        <label className="lbl full" htmlFor="username">Name:</label>
        <input className="grow" type="text" name="username" autoComplete autoFocus value={data.username} onChange={handleChange}/>
      </div>

      <div className="field row ">
        <label className="lbl full" htmlFor="email">Email:</label>
        <input className="grow" type="text" name="email" autoComplete value={data.email} onChange={handleChange}/>
      </div>

      <div className="field row">
        <label className="lbl full" htmlFor="password">Password:</label>
        <input className="grow" type="password" name="password" value={data.password} onChange={handleChange}/>
      </div>

      <div className="field row">
        <label className="lbl full" htmlFor="password_confirm">Confirm Password:</label>
        <input className="grow" type="password" name="password_confirm" value={data.password_confirm} onChange={handleChange}/>
      </div>

      <button className="btn btn--primary" type="submit">Sign me up!</button>
    </form>
  );
};

export default Signup;
