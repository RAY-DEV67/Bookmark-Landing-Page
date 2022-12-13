import hero from "./images/illustration-features-tab-1.svg";
import hero2 from "./images/illustration-features-tab-2.svg";
import hero3 from "./images/illustration-features-tab-3.svg";

export function Bookmark() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-12 w-10/12 flex flex-col lg:flex-row">
        <img src={hero} alt="hero" />
       <div className="flex flex-col items-center">
       <div className="lg:flex lg:flex-col lg:text-left lg:px-0 lg:ml-24 max-w-md lg:py-12 mt-4">
          <h2 className="text-xl mt-4">Bookmark in one click</h2>
          <div className="flex flex-col items-center">
            <p className="w-10/12 mt-4 lg:w-full">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
          </div>
          <button className="mt-4 px-4 py-2 border lg:w-32 more">More Info</button>
        </div>
       </div>
      </div>
    </div>
  );
}

export function Intelligent() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-12 w-10/12 flex flex-col lg:flex-row">
        <img src={hero2} alt="hero" />
       <div className="flex flex-col items-center">
       <div className="lg:flex lg:flex-col lg:text-left lg:px-0 max-w-md lg:ml-24 lg:py-12 mt-4">
          <h2 className="text-xl">Intelligent search</h2>
          <div className="flex flex-col items-center">
            <p className="w-10/12 mt-4  lg:w-full">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
          </div>
          <button className="mt-4 px-4 py-2 border lg:w-32 more">More Info</button>
        </div>
       </div>
      </div>
    </div>
  );
}

export function Share() {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row">
      <div className="mt-12 w-10/12 flex flex-col featute_share items-center">
        <div className="flex flex-col lg:flex-row">
          <img src={hero3} alt="hero" />
          <div className="lg:flex lg:flex-col lg:text-left lg:px-0 lg:ml-24 max-w-md lg:py-12 mt-4">
            <h2 className="text-xl"> Share your bookmarks</h2>
            <div className="flex flex-col items-center">
              <p className="w-10/12 mt-4 md:w-full">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
            </div>
            <button className="mt-4 px-4 py-2 border lg:w-32 more">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}
