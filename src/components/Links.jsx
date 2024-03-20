const Links = () => (
  <div className="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
    <img src="/book-travel-insurance.gif" alt="book-travel-insurance" />
    {/* <img src="/logo.svg"></img> */}
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }} >
     <a href="login" className="btn btn--primary">Login</a>
     <a href="signup" className="btn btn--primary">Sign up</a>
     
    </div>
  </div>
);

export default Links;
