import React from "react";

const Address = () => {
  return (
    <>
      {/* <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Where I Located</span>123 Stree New York City ,
        United States Of America 750065.
      </p> */}
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:steve@mail.com">raihankusuma5@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">whatsapp</span>{" "}
        <a href="https://wa.me/6285664532658">+62 85664532658</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
