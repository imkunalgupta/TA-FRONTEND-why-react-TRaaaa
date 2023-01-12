function Header() {
  return (
    <>
      <div className="container">
        <div className="flex">
          <img src="/images/logo.jpeg" alt="logo" width="150" height="100" />
          <div className="header">
            <ul className="flex ">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
