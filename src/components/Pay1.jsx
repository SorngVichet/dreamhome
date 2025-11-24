import visa from "../assets/VISA.png";
import mastercart from "../assets/Mastercard.webp";
import aba from "../assets/aba.png";
import aceleda from "../assets/aceleda.png";
import Headbar from "./Headbar";

const Pay1 = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="  flex  px-2 pt-2  flex-col relative mt-12   items-center "
    >
      <Headbar />
      <div className=" w-full  grid grid-cols-1 md:grid-cols-2 ">
        <div className=" border p-2">
          <div className="  grid gap-2 px-2 md:grid-cols-2 justify-center grid-cols-1 bg-gray-200">
            <div className=" flex  flex-col pt-2  ">
              <h3 className=" w-full  p-md-0 ps-3 border-b shadow  justify-content-md-center justify-content-start  bg-orange-400 flex  text-white ">
                Your item
              </h3>
              <h6 className="  h-32 bg-amber-100 justify-center flex items-center">
                The Modern Hotel in Phnom Penh
              </h6>
            </div>
            <div
              style={{ maxHeight: "300px" }}
              className=" border  overflow-hidden"
            >
              <img
                className=" w-full"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/90/02/90/the-plantation.jpg?w=1200&h=700&s=1
      "
                alt="photo"
              />
            </div>
          </div>

          <div className=" w-full">
            <h5 className=" border-b w-full bg-gray-300 py-2">stutus:</h5>
            <div className=" gap-2 px-2 w-full grid grid-cols-2">
              <div className="  flex flex-col">
                <span className=" border-b bg-gray-200 font-semibold">
                  Type
                </span>
                <span className=" bg-gray-100">hotel</span>
              </div>
              <div className=" flex flex-col">
                <span className=" border-b bg-gray-100 font-semibold">
                  Size
                </span>
                <span className=" bg-gray-200">
                  100{" "}
                  <i className=" caret-neutral-50 text-sm fa-solid fa-xmark"></i>
                  200 m<sup>2</sup>
                </span>
              </div>
            </div>
          </div>
          <div className=" mt-2 w-full">
            <h5 className=" border-b w-full bg-gray-300 py-2">Price</h5>
            <div className=" gap-2 px-2 w-full grid grid-cols-2">
              <div className="  flex flex-col">
                <span className=" border-b bg-gray-200 font-semibold">PPM</span>
                <span className=" bg-gray-100">599$</span>
              </div>
              <div className=" flex flex-col">
                <span className=" border-b bg-gray-100 font-semibold">PPY</span>
                <span className=" bg-gray-200">5999$</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full border py-1 ">
          <div className=" flex justify-start shadow ps-3 text-white border-b text-2xl font-bold w-full bg-orange-400 py-1">
            Billing
          </div>
          <div className=" border-b flex w-full justify-center items-center">
            These informations are repuied!
          </div>
          <form className=" gap-2 flex flex-col w-full bg-amber-300 pe-4 rounded border  py-3">
            <div className=" grid grid-cols-2 ">
              <div className=" form-check">
                <label
                  className="   w-full ps-2  d-flex justify-content-start form-label"
                  htmlFor="firstname"
                >
                  First-Name
                </label>
                <input
                  className=" flex justify-center form-control"
                  placeholder="Your first name"
                  type="text"
                  id="firstname"
                />
              </div>
              <div className=" form-check">
                <label
                  className=" w-full ps-2  d-flex justify-content-start  form-label"
                  htmlFor="lastname"
                >
                  Last-Name
                </label>
                <input
                  placeholder="Your last name"
                  className=" form-control"
                  type="text"
                  id="lastname"
                />
              </div>
            </div>
            <div className=" form-check">
              <label
                className=" w-full ps-2  d-flex justify-content-start  form-label"
                htmlFor="email"
              >
                Email-Adress
              </label>
              <input
                placeholder="Your email"
                className=" form-control"
                type="email"
                id="emamil"
              />
            </div>
            <div className="  form-check">
              <label
                className="  w-full ps-2  d-flex justify-content-start  form-label"
                htmlFor="phone"
              >
                Phone-Number
              </label>
              <input
                placeholder="Your phone numer"
                className=" form-control"
                type="phone"
                id="phone"
              />
            </div>
            <div className=" grid grid-cols-2 ">
              <div className=" form-check">
                <label
                  className="  w-full ps-2  d-flex justify-content-start form-label"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className=" flex justify-center form-control"
                  placeholder="Your city"
                  type="text"
                  id="city"
                />
              </div>
              <div className=" form-check">
                <label
                  className=" w-full ps-2  d-flex justify-content-start  form-label"
                  htmlFor="state"
                >
                  State
                </label>
                <input
                  placeholder="Your state"
                  className=" form-control"
                  type="text"
                  id="state"
                />
              </div>
            </div>
            <div className=" w-full pr-3 ps-8">
              <div className=" w-full items-center  pt-2  border-t  flex justify-between">
                <div>
                  <h5 className="  ">Rental Choice</h5>
                  <div className=" px-2 flex gap-6">
                    <div className=" gap-2  items-center flex">
                      <input type="radio" name="" id="ppm" />
                      <label htmlFor="ppm">PPM</label>
                    </div>
                    <div className=" items-center flex gap-2">
                      <input type="radio" name="" id="ppy" />
                      <label htmlFor="ppy">PPY</label>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <button className=" btn btn-warning border shadow text-white">
                    Save Imformation
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className=" w-full border  ">
          <div className=" text-2xl bg-orange-400 shadow py-2 flex justify-start ps-3 text-white">
            Booking Payment
          </div>
          <div className=" w-full d-flex flex-column gap-1 py-2  flex-lg-row">
            <div>The Way accepted!</div>
            <div className=" w-full flex gap-3 justify-center">
              <img style={{ height: "35px" }} src={visa} alt="" />
              <img style={{ height: "35px" }} src={mastercart} alt="" />
              <img style={{ height: "35px" }} src={aba} alt="" />
              <img style={{ height: "35px" }} src={aceleda} alt="" />
            </div>
          </div>
          <div className=" w-full bg-gray-300 py-3 rounded">
            <h4>Add Card</h4>
            <div className=" w-full flex flex-col gap-3">
              <div className=" w-full flex flex-col px-3  items-start">
                <label className="  text-xl ps-2" htmlFor="cardnumber">
                  Card Number
                </label>
                <input
                  className=" h-10 px-3 bg-gray-100 rounded border-b w-full outline-0"
                  type="text"
                  id="cardnumber"
                  placeholder="Card Number"
                />
              </div>

              <div className=" grid w-full grid-cols-2 gap-2 px-3">
                <div className=" flex flex-col items-start w-full">
                  <label className="   text-xl ps-2" htmlFor="expiry">
                    Expiry
                  </label>
                  <input
                    className=" h-10 px-3 bg-gray-100 rounded border-b w-full outline-0"
                    type="text"
                    name=""
                    id="expiry"
                    placeholder="Expiry"
                  />
                </div>
                <div className=" w-full flex flex-col items-start">
                  <label className="text-xl ps-2" htmlFor="cvv">
                    CVV
                  </label>
                  <input
                    className=" h-10 px-3 bg-gray-100 rounded border-b w-full outline-0"
                    type="password"
                    name=""
                    id="cvv"
                    placeholder="CVV"
                  />
                </div>
              </div>
              <div className=" w-full flex flex-col px-3  items-start">
                <label className="ps-2 text-xl" htmlFor="cardholder name">
                  CardHolder Name
                </label>
                <input
                  className=" h-10 px-3 bg-gray-100 rounded border-b w-full outline-0"
                  type="text"
                  id="cardholdername"
                  placeholder="CardHolder Name"
                />
              </div>
              <div className="  grid grid-cols-2 px-3">
                <div className=" flex gap-2 ps-2  items-center">
                  <input type="checkbox" name="" id="savecard" />
                  <label htmlFor="savecard">Save Card</label>
                </div>
                <button className=" btn btn-success">Save</button>
              </div>
              <div className=" w-full px-3">
                <button className=" btn w-full   btn-primary btn">
                  {" "}
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" border w-full">
          <div className=" text-2xl bg-orange-400 w-full text-white  py-2">
            More Option & Contant to Rent
          </div>
          <div className=" bg-white   p-3">
            If you don't want to pay by card, never mind you can contact us
            directly to pay. And then you can pay full for it.
          </div>
          <div className=" flex flex-col  p-2">
            <div className=" border-b bg-amber-300 text-xl py-1">
              Assistants
            </div>
            <div className=" bg-gray-100 py-2 flex gap-4 justify-center text-3xl">
              <i class="fa-brands cursor-pointer text-blue-600 fa-facebook"></i>
              <i class="fa-brands cursor-pointer text-blue-500 fa-telegram"></i>
              <i class="fa-brands cursor-pointer text-red-500 fa-google"></i>
              <i class="fa-brands cursor-pointer text-green-500 fa-whatsapp"></i>
            </div>

            <div className=" mt-2 border items-center w-full flex py-3  text-white bg-blue-400 justify-between  ps-3 pe-7 text-xl">
              <div className=" w-full flex justify-center items-center">
                -- or come to our Office --
              </div>
              <a href="https://maps.apple.com/maps?ll=11.58939918776577,104.9012145856522&q=11.58939918776577,104.9012145856522&t=m">
                <i class="fa-solid text-decoration-none  hover:text-red-500 cursor-pointer text-red-600 text-6xl fa-location-dot  border-s-2 ps-3"></i>
              </a>
            </div>
          </div>
          <div className=" w-full flex pb-1 justify-center">
            {" "}
            <div className=" w-32 border-b"></div> <span className="">or</span>{" "}
            <div className=" w-32 border-b"></div>
          </div>
          <div className="  bg-yellow-400 w-full border rounded-2xl  p-3 flex flex-col gap-1">
            <div className="">
              <div>Owner</div>
              <div className=" font-bold">SORNG VICHET</div>
            </div>
            <div className=" py-0.5 bg-gray-300 w-full px-2  grid grid-cols-2">
              <div className=" border-e flex justify-start ">Email </div>
              <div className=" text-xs flex  items-center justify-center  ">
                sorngvichet168@gmail.com
              </div>
            </div>
            <div className=" py-0.5 bg-gray-200 px-2 w-full grid grid-cols-2">
              <div className=" border-e flex justify-start ">Phone </div>
              <div>081981012</div>
            </div>
            <div className=" py-0.5 bg-gray-300 px-2 w-full grid grid-cols-2">
              <div className=" border-e flex justify-start ">Telegram </div>
              <div>081981012</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pay1;
