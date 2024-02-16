import { Fragment, useContext, useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import myContext from "../../context/data/myContext";
import {
  AiOutlineShareAlt,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ShareDialogBox() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const context = useContext(myContext);
  const { mode } = context;
  return (
    <Fragment>
      <div className="ml-auto">
        <AiOutlineShareAlt
          onClick={handleOpen}
          style={{ color: mode === "dark" ? "white" : "white" }}
          size={20}
        />
      </div>
      {/* Dialog  */}
      <Dialog
        className=" relative right-[1em] w-[25em]  md:right-0 md:w-0 lg:right-0 lg:w-0"
        open={open}
        handler={handleOpen}
        style={{
          background: mode === "light" ? "#2f3542" : "#2f3542",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        {/* DialogBody  */}
        <DialogBody>
          <div className="flex justify-center flex-wrap  sm:mx-auto sm:mb-2 -mx-2  mt-4 mb-2 ">
            {/* main  */}
            <div className="">
              <div className="flex gap-3">
                {/* Linkedin Icon  */}
                <div className="">
                  <Link href="https://www.linkedin.com/in/roshan-yadav-220208288/">
                    <AiFillLinkedin
                      size={35}
                      style={{
                        color: mode === "dark" ? "white" : "white",
                      }}
                    />
                  </Link>
                </div>

                {/* Instagram Icon  */}
                <div className="">
                  <Link href="https://www.instagram.com/http.roshn/">
                    <AiFillInstagram
                      size={35}
                      style={{
                        color: mode === "dark" ? "white" : "white",
                      }}
                    />
                  </Link>
                </div>

                {/* Github Icon  */}
                <div className="">
                  <Link href="https://github.com/Roshnnnnn">
                    <AiFillGithub
                      size={35}
                      style={{
                        color: mode === "dark" ? "white" : "white",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" text-center">
            <h1 className=" text-gray-600">Powered By Roshan</h1>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
