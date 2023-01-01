import $ from "jquery";

export function Features(props) {
  function handleBookmark() {
    props.setfeatures("bookmark");
    $(".bookmark").show();
    $(".search").hide();
    $(".share").hide();
  }

  function handleIntelligent() {
    props.setfeatures("intelligent");
    $(".search").show();
    $(".bookmark").hide();
    $(".share").hide();
  }

  function handleShare() {
    props.setfeatures("share");
    $(".search").hide();
    $(".bookmark").hide();
    $(".share").show();
  }
  return (
    <div id="features">
      <div>
        <h2 className="text-xl mt-32">Features</h2>
        <div className="w-full flex flex-col items-center mt-4">
          <p className="w-10/12 max-w-lg">
            {" "}
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <div className="mt-8 flex flex-col md:flex-row md:border-b">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={handleBookmark}
            >
              <p className="border-y py-4 w-10/12 md:w-full md:border-none navi">Simple Bookmarking</p>
              <div className=" w-32 h-1 bookmark red_div"></div>
            </div>
            <div
              className="flex flex-col items-center mx-12 cursor-pointer"
              onClick={handleIntelligent}
            >
              <p className="border-b py-4 w-10/12 md:w-full md:border-none navi">Speedy Searching</p>
              <div className=" w-32 h-1 hidden search red_div"></div>
            </div>
            <div className="flex flex-col items-center cursor-pointer" onClick={handleShare}>
              <p className="border-b py-4 w-10/12 md:w-full md:border-none navi">Easy Sharing</p>
              <div className=" w-32 h-1 hidden share red_div"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
