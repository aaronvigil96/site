import { LuHouse, LuPanelLeftClose, LuStore } from "react-icons/lu"
import { Link } from "react-router";

const DashboardPage = () => {
    return (
        <div className="mx-auto">
            <div className="flex w-full h-screen gap-2 p-2">
                <div className="basis-[80px] bg-primary rounded-sm p-2">
                    <div className="flex flex-col justify-between items-center h-full">
                        <div className="flex flex-col items-center gap-5">
                            <div className="p-4 bg-slate-700 cursor-pointer text-secondary rounded-3xl hover:rounded-md hover:bg-secondary hover:text-black duration-300 ease-linear">
                                <LuHouse className="text-2xl"/>
                            </div>
                            <div className="p-4 bg-slate-700 cursor-pointer text-secondary rounded-3xl hover:rounded-md hover:bg-secondary hover:text-black duration-300 ease-linear">
                                <LuStore className="text-2xl"/>
                            </div>
                        </div>
                        <div>
                            <hr className="text-slate-700"/>
                            <Link to={'/'}>
                                <div className="mt-2 p-4 bg-slate-700 cursor-pointer text-secondary rounded-3xl hover:rounded-md hover:bg-secondary hover:text-black duration-300 ease-linear">
                                    <LuPanelLeftClose className="text-2xl"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="basis-full bg-primary rounded-sm p-2">

                </div>
            </div>
        </div>
    )
}

export default DashboardPage;