const Header = () => {
  return (
    <header>
      <div className="logo">
        <img id="logoImage" src="src\assets\profilePicture.jpg"></img>
        <div className="profileName">SHIVAM AGARWAL</div>
      </div>
      <nav>
        <a href="#intro">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
