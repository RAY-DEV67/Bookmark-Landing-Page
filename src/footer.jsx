import bookmark from "./images/logo-bookmark.svg";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
export function Footer() {
  return (
<div className="flex flex-col md:items-center footer">
<div className="flex flex-col items-center justify-between py-8 md:flex-row md:py-4 md:w-10/12">
     <div className="md:flex items-center">
     <img src={bookmark} alt="ham" className="px-2 py-1 bg-white" />
      <p className="mt-8 uppercase md:mt-0 md:mx-8 footer">Features</p>
      <p className="my-8 uppercase md:mr-8 footer">Pricing</p>
      <p className="uppercase md:mt-0 footer">Contact</p>
     </div>
      <div className="flex mt-8 md:mt-0">
        <img src={facebook} alt="facebook" className="mr-8" />
        <img src={twitter} alt="twitter" />
      </div>
    </div>
</div>
  );
}
