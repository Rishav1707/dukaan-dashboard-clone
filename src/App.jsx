function App() {
  return (
    <div className="bg-[#fafafa] text-[#d2d4d4] relative">
      <div className="w-[14.5%] h-screen px-2 py-4 bg-[#1e2640] flex flex-col gap-6 fixed">
        <div className="flex gap-3 px-2">
          <img
            src="https://dashboard-clone-dukaan.vercel.app/_next/static/media/nishyan.760570e2.svg"
            alt=""
          />
          <div className=" w-full flex justify-between items-center">
            <div>
              <p className="font-medium text-white">Nishyan</p>
              <p className="text-sm underline cursor-pointer text-[#b1b1b1]">
                Visit Store
              </p>
            </div>
            <div>
              <span className="material-symbols-outlined text-4xl text-white">
                expand_more
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col text-base">
            <a
              href=""
              className="flex items-center gap-2 hover:bg-[#FFFFFF]/10 rounded-[4px] px-4 py-2"
            >
              <span className="material-symbols-outlined">home</span>
              <p className="">Home</p>
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:bg-[#FFFFFF]/10 rounded-[4px] px-4 py-2"
            >
              <span className="material-symbols-outlined">assignment</span>
              <p className="">Orders</p>
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:bg-[#FFFFFF]/10 rounded-[4px] px-4 py-2"
            >
              <span className="material-symbols-outlined">grid_view</span>
              <p className="">Products</p>
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:bg-[#FFFFFF]/10 rounded-[4px] px-4 py-2"
            >
              <span className="material-symbols-outlined">local_shipping</span>
              <p className="">Delivery</p>
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:bg-[#FFFFFF]/10 rounded-[4px] px-4 py-2"
            >
              <span className="material-symbols-outlined">brand_awareness</span>
              <p className="">Marketing</p>
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:bg-[#FFFFFF]/10 rounded-[4px] px-4 py-2"
            >
              <span className="material-symbols-outlined">equalizer</span>
              <p className="">Analytics</p>
            </a>
            <a
              href=""
              className="flex items-center gap-2 bg-[#FFFFFF]/10 rounded-[4px] px-4 py-2"
            >
              <span className="material-symbols-outlined">payments</span>
              <p className="">Payouts</p>
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:bg-[#FFFFFF]/10 rounded-[4px] px-4 py-2"
            >
              <span className="material-symbols-outlined">percent</span>
              <p className="">Discounts</p>
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:bg-[#FFFFFF]/10 rounded-[4px] px-4 py-2"
            >
              <span className="material-symbols-outlined">group</span>
              <p className="">Audience</p>
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:bg-[#FFFFFF]/10 rounded-[4px] px-4 py-2"
            >
              <span className="material-symbols-outlined">palette</span>
              <p className="">Appearence</p>
            </a>
            <a
              href=""
              className="flex items-center gap-2 hover:bg-[#FFFFFF]/10 rounded-[4px] px-4 py-2"
            >
              <span className="material-symbols-outlined">bolt</span>
              <p className="">Plugins</p>
            </a>
          </div>
          <div className="flex gap-3 bg-[#FFFFFF]/10 mx-2 px-3 py-2 rounded">
            <span className="material-symbols-outlined text-3xl bg-[#FFFFFF]/10 p-1 rounded">
              account_balance_wallet
            </span>
            <div>
              <p className="text-sm">Available Credits</p>
              <p className="text-white">224.10</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white text-black w-[85.5%] fixed top-0 right-0 z-10 px-8 py-3 flex justify-between items-center border-b border-[#D9D9D9]">
          <div className="w-1/3 flex items-center gap-4">
            <p className="text-xl font-semibold">Payouts</p>
            <p className="flex items-center gap-1 text-xs">
              <span className="material-symbols-outlined text-sm">help</span>How
              it works
            </p>
          </div>
          <div className="w-1/3 text-center relative">
            <span className="material-symbols-outlined absolute left-3 top-[6.5px] text-gray-500 text-xl">
              search
            </span>
            <input
              type="text"
              placeholder="Search features, tutorials, etc"
              className="p-2 pl-10 w-full outline-none bg-gray-200 rounded text-gray-500"
            />
          </div>
          <div className="w-1/3 flex justify-end gap-2 items-center">
            <span className="material-symbols-outlined text-2xl bg-gray-300 rounded-full px-3 py-2">
              sms
            </span>
            <span className="material-symbols-outlined text-2xl bg-gray-300 rounded-full px-3 py-2">
              arrow_drop_down
            </span>
          </div>
        </div>

        <div className="text-black pl-[16.6%] pt-28 pr-8">
          <div className="flex justify-between pb-4">
            <h1 className="text-xl font-semibold">Overview</h1>
            <p className="bg-white px-3 py-[2px] flex items-center rounded text-base border border-gray-200">
              This Month{" "}
              <span className="material-symbols-outlined text-2xl">
                expand_more
              </span>
            </p>
          </div>

          <div className="flex gap-5">
            <div className="w-1/3 bg-[#146eb4] hover:bg-[#0E4F82] text-white  pt-3 rounded-md flex flex-col gap-4">
              <div className="pl-5">
                <p className="text-lg">
                  Next Payout{" "}
                  <span className="material-symbols-outlined text-sm">
                    help
                  </span>
                </p>
              </div>
              <div className="flex justify-between items-center font-semibold px-5">
                <p className="text-4xl">₹2,312.23</p>
                <p className="flex items-center">
                  <p className="underline">23 Orders</p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </p>
              </div>
              <div className="flex justify-between px-6 py-2 bg-[#0E4F82] rounded-md">
                <p>Next Payment Date:</p>
                <p>Today, 4:00PM</p>
              </div>
            </div>

            <div className="w-1/3 bg-white h-fit py-5 flex flex-col gap-4 rounded-md">
              <div className="pl-5">
                <p className="text-lg">
                  Amount Pending{" "}
                  <span className="material-symbols-outlined text-sm">
                    help
                  </span>
                </p>
              </div>
              <div className="flex justify-between items-center font-semibold px-5">
                <p className="text-4xl">₹92,312.20</p>
                <p className="flex items-center">
                  <p className="underline">13 Orders</p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </p>
              </div>
            </div>

            <div className="w-1/3 bg-white h-fit py-5 flex flex-col gap-4 rounded-md">
              <div className="pl-5">
                <p className="text-lg">
                  Amount Processed{" "}
                  <span className="material-symbols-outlined text-sm">
                    help
                  </span>
                </p>
              </div>
              <p className="text-4xl px-5 font-semibold">₹23,92,312.19</p>
            </div>
          </div>

          <div className="pt-6 pb-6 flex flex-col gap-6">
            <p className="text-xl font-semibold">Transactions | This Month</p>
            <div className="flex gap-3">
              <button className="bg-[#E6E6E6] rounded-full px-4 py-1 flex items-center text-lg text-[#868686]">
                Payouts (22)
              </button>
              <button className="bg-[#146eb4] rounded-full px-4 py-1 flex items-center text-lg text-white">
                Refunds (6)
              </button>
            </div>
          </div>

          <div className="py-4 px-3 flex flex-col gap-4 bg-white rounded-md">
            <div className="flex justify-between">
              <div className=" w-full relative">
                <span className="material-symbols-outlined absolute left-3 top-[6.5px] text-gray-500 text-xl">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Order ID or transactions ID"
                  className="p-2 pl-10 w-1/3 outline-none rounded border border-gray-300 text-gray-500"
                />
              </div>
              <div className="flex justify-end gap-4">
                <p className="bg-white px-3 py-[2px] flex items-center rounded text-base border border-gray-200 gap-1">
                  Sort{" "}
                  <span className="material-symbols-outlined text-xl text-[#868686]">
                    swap_vert
                  </span>
                </p>
                <span className="material-symbols-outlined text-2xl border rounded border-gray-200 px-2 flex items-center text-[#606060]">
                  download
                </span>
              </div>
            </div>
            <table className="table-fixed">
              <thead className="text-[#4D4D4D] bg-[#f2f2f2] p-40">
                <tr>
                  <th className="text-start w-[20%] px-3 py-[10px]">
                    Order ID
                  </th>
                  <th className="text-start w-[20%] px-3 py-[10px]">Status</th>
                  <th className="text-start w-[20%] px-3 py-[10px]">
                    Transaction ID
                  </th>
                  <th className="text-start w-[20%] px-3 py-[10px]">
                    Refund Date
                  </th>
                  <th className="text-end w-[20%] px-3 py-[10px]">
                    Order Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="relative">
                  <td className="text-[#146EB4] px-3 py-[10px]">#281209</td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                    Successful
                  </td>
                  <td className="px-3 py-[10px]">TRX123456</td>
                  <td className="px-3 py-[10px]">Today, 8:45 PM</td>
                  <td className="text-end px-3 py-[10px]">₹1125.00</td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>
                <tr className="relative">
                  <td className="text-[#146EB4] px-3 py-[10px]">#281210</td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px]">
                    <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                    Processing
                  </td>
                  <td className="px-3 py-[10px]">TRX789012</td>
                  <td className="px-3 py-[10px]">Tomorrow, 10:00 AM</td>
                  <td className="text-end px-3 py-[10px]">₹950.50</td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>
                <tr className="relative">
                  <td className="text-[#146EB4] px-3 py-[10px]">#281211</td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                    Successful
                  </td>
                  <td className="px-3 py-[10px]">TRX345678</td>
                  <td className="px-3 py-[10px]">Yesterday, 3:30 PM</td>
                  <td className="text-end px-3 py-[10px]">₹750.00</td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>
                <tr className="relative">
                  <td className="text-[#146EB4] px-3 py-[10px]">#281212</td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                    Successful
                  </td>
                  <td className="px-3 py-[10px]">TRX901234</td>
                  <td className="px-3 py-[10px]">Today, 11:20 AM</td>
                  <td className="text-end px-3 py-[10px]">₹2000.00</td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>
                <tr className="relative">
                  <td className="text-[#146EB4] px-3 py-[10px]">#281213</td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px]">
                    <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                    Processing
                  </td>
                  <td className="px-3 py-[10px]">TRX567890</td>
                  <td className="px-3 py-[10px]">Tomorrow, 9:00 AM</td>
                  <td className="text-end px-3 py-[10px]">₹1800.00</td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>
                <tr className="relative">
                  <td className="text-[#146EB4] px-3 py-[10px]">#281214</td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px]">
                    <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                    Processing
                  </td>
                  <td className="px-3 py-[10px]">TRX098765</td>
                  <td className="px-3 py-[10px]">Yesterday, 2:00 PM</td>
                  <td className="text-end px-3 py-[10px]">₹500.00</td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>
                <tr className="relative">
                  <td className="text-[#146EB4] px-3 py-[10px]">#281215</td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                    Successful
                  </td>
                  <td className="px-3 py-[10px]">TRX456789</td>
                  <td className="px-3 py-[10px]">Today, 10:30 AM</td>
                  <td className="text-end px-3 py-[10px]">₹3000.00</td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>
                <tr className="relative">
                  <td className="text-[#146EB4] px-3 py-[10px]">#281216</td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px]">
                    <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                    Processing
                  </td>
                  <td className="px-3 py-[10px]">TRX987654</td>
                  <td className="px-3 py-[10px]">Tomorrow, 11:30 AM</td>
                  <td className="text-end px-3 py-[10px]">₹1200.00</td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>
                <tr className="relative">
                  <td className="text-[#146EB4] px-3 py-[10px]">#281217</td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px]">
                    <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                    Processing
                  </td>
                  <td className="px-3 py-[10px]">TRX654321</td>
                  <td className="px-3 py-[10px]">Yesterday, 4:00 PM</td>
                  <td className="text-end px-3 py-[10px]">₹900.00</td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>
                <tr>
                  <td className="text-[#146EB4] px-3 py-[10px]">#281218</td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                    Successful
                  </td>
                  <td className="px-3 py-[10px]">TRX234567</td>
                  <td className="px-3 py-[10px]">Today, 9:45 AM</td>
                  <td className="text-end px-3 py-[10px]">₹1500.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center items-center h-24 text-lg">
            <p>
              Made with ❤️ by{" "}
              <a
                href="https://twitter.com/rishavrtwt"
                target="_blank"
                className="font-semibold underline"
              >
                Rishav Raj
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
