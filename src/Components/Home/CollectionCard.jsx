
export default function CollectionCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 px-4">
        <section className="" >
        <div className="bg-[url('https://i.imgur.com/jAXaawT.jpg')] h-96 bg-cover bg-center flex justify-items-center items-center">
        <div className="px-10 lg:px-10 xl:px-10">
        <spian className="text-black-500 text-3xl">Collection</spian> <br />
            <h1 className="text-4xl font-bold font-serif mb-6">
            <span>For Backpacks</span>
            </h1>
            <p className="text-lg max-w-md">Up to <span className=" font-bold ">40% off</span></p>
            <button className="inline-block mt-10 px-4 py-2 bg-gray-900 text-base rounded  text-white font-semibold hover:bg-white hover:text-blue-gray-900 duration-300 hover:shadow-lg">Shop Now</button>
        </div>
        </div>
        </section>
        <section className="">
        <div className="bg-[url('https://i.imgur.com/jAXaawT.jpg')] h-96 bg-cover bg-center flex justify-items-center items-center">
        <div className="px-10 lg:px-10 xl:px-10">
        <spian className="text-black-500 text-3xl">Collection</spian> <br />
            <h1 className="text-4xl font-bold font-serif mb-6">
            <span>For Sneakers</span>
            </h1>
            <p className="text-lg max-w-md">Up to <span className=" font-bold ">25% off</span></p>
            <button className="inline-block mt-10 px-4 py-2 bg-gray-900 text-base rounded  text-white font-semibold hover:bg-white hover:text-blue-gray-900 duration-300 hover:shadow-lg">Shop Now</button>
        </div>
        </div>
        </section>

    </div>
  )
}
