import arrow from "./images/icon-arrow.svg";
import $ from 'jquery'

export function Faq() {

function handleBookmark(){
  $(".wiBookmark").toggle()
}

function handleBrowser(){
  $(".browser").toggle()
}

function handleMobile(){
  $(".mobile_app").toggle()
}

function handleRequest(){
  $(".request").toggle()
}
  return (
    <div className="flex flex-col items-center">
      <div className="mt-8 max-w-lg md:mt-12">
        <h2 className="text-xl">Frequently Asked Questions</h2>
        <div className="flex flex-col items-center mt-4">
          <p className="w-10/12">
            {" "}
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <div className="flex flex-col items-center questions">
          <div className="flex flex-col items-center w-10/12 border-b-2 p-4 cursor-pointer" onClick={handleBookmark}>
            <div className="flex justify-between items-center w-full">
              <p className="faq">What is Bookmark?</p>
              <img src={arrow} alt="arrow" />
            </div>
            <p className="mt-4 hidden wiBookmark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare matti
            </p>
          </div>
          <div className="flex flex-col items-center w-10/12 border-b-2 p-4 cursor-pointer" onClick={handleRequest}>
            <div className="flex justify-between items-center w-full">
              <p className="faq">How can I request a new browser?</p>
              <img src={arrow} alt="arrow" />
            </div>
            <p className="mt-4 hidden request">
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </p>
          </div>
          <div className="flex flex-col items-center w-10/12 border-b-2 p-4 cursor-pointer" onClick={handleMobile}>
            <div className="flex justify-between items-center w-full">
              <p className="faq">Is there a mobile app?</p>
              <img src={arrow} alt="arrow" />
            </div>
            <p className="mt-4 hidden mobile_app">
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </p>
          </div>
          <div className="flex flex-col items-center w-10/12 border-b-2 p-4 cursor-pointer" onClick={handleBrowser}>
            <div className="flex justify-between items-center w-full">
              <p className="faq">What about other Chromium browsers?</p>
              <img src={arrow} alt="arrow" />
            </div>
            <p className="mt-4 hidden browser">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.
            </p>
          </div>
          <button className="border mt-8 px-4 py-2 more">
  More Info</button>
        </div>
      </div>
    </div>
  );
}
