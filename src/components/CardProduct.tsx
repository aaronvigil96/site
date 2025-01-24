const CardProduct = () => {
    return(
        <div className="flex flex-col h-96 w-72 bg-gray-100 p-4 group cursor-pointer hover:bg-gray-300  transition-colors duration-300 ease-in-out">
            <div className="flex-[3]">
                <img className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" src="azucar.png"/>
            </div>
            <div className="flex-[1] flex justify-between items-center">
                <div>
                    <p className="uppercase font-black text-black">azucar</p>
                    <p className="font-semibold">$1200</p>
                    <p className="text-red-800">MERCADERIA</p>
                </div>
                <svg className="self-end text-gray-400 group-hover:text-black transition-colors duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
            </div>
        </div>
    )
}

export default CardProduct;