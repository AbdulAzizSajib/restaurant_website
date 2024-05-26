const Footer = () => {
  return (
    <div>
      <footer className="p-10 footer bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      {/* //!... 2nd Footer */}
      <div className="px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="flex justify-center">
          <h2>
            Copyright{" "}
            <a className="font-semibold text-purple-800" href="">
              sajib_abdulaziz
            </a>{" "}
            All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
