import dot from "./images/bg-dots.svg";
import chrome from "./images/logo-chrome.svg";
import Firefox from "./images/logo-firefox.svg";
import opera from "./images/logo-opera.svg";

export function Extension() {
  return (
    <div>
      <div className="mt-24">
        <h2 className="text-xl">Download the extension</h2>
        <div className="flex flex-col items-center mt-4">
          <p className="w-10/12 max-w-md">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
      <div className="flex flex-col md:items-center">
      <div className="flex flex-col items-center mt-8 md:flex-row">
          <div className="flex flex-col itemx-center justify-center w-10/12 md:w-64 py-4 px-4 md:px-0 extension">
            <div className="flex flex-col items-center pt-8">
              <img src={chrome} alt="chrome" className="w-24" />
            </div>
            <p className="mt-4">Add to Chrome</p>
            <p className="mt-4">Minimum version 62</p>
            <img src={dot} alt="dot" className="mt-4" />
            <div>
              <button className="border mt-4 px-4 py-2 more">
                {" "}
                Add & Install Extension
              </button>
            </div>
          </div>
          <div className="flex flex-col itemx-center justify-center mt-8 w-10/12 md:w-64 py-4 px-4 md:px-0  extension md:mx-4">
            <div className="flex flex-col items-center pt-8">
              <img src={Firefox} alt="firefox" className="w-24" />
            </div>
            <p className="mt-4"> Add to Firefox</p>
            <p className="mt-4">Minimum version 55</p>
            <img src={dot} alt="dot" className="mt-4" />
            <div>
              <button className="border mt-4 px-4 py-2 more">
                {" "}
                Add & Install Extension
              </button>
            </div>
          </div>
          <div className="flex flex-col itemx-center justify-center mt-14 extension py-4 px-4 w-10/12 md:w-64 md:px-0 ">
            <div className="flex flex-col items-center pt-8">
              <img src={opera} alt="opera" className="w-24" />
            </div>
            <p className="mt-4"> Add to Opera</p>
            <p className="mt-4">Minimum version 46</p>
            <img src={dot} alt="dot" className="mt-4" />
            <div>
              <button className="border mt-4 px-4 py-2 more">
                {" "}
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

