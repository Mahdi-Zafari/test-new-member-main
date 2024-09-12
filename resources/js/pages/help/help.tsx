import React, { useState } from "react";

export default function Help() {
    const [selectItem, setSelectItem] = useState("");

    const handleClick = (item: string): void => {
        setSelectItem(item);
    };
    return (
        <>
            <h2 className="text-3xl text-black my-10 text-center">Yardım</h2>
            <p className="text-center">
                Yardım almak istediğiniz konuyu araştırabilir ya da aşağıdaki
                konu başlıklarından ulaşabilirsiniz.
            </p>
            <div className="items-center py-4 md:py-24 px-10 mx-5 md:mx-32 mb-5 md:mb-32">
                <div className="flex flex-col sm:flex-row">
                    <input
                        type=""
                        placeholder="Hangi konuda yardım istediğinizi yazın"
                        className="w-full border border-slate-200 py-2"
                    />
                    <input
                        type="submit"
                        value="ARA"
                        className="py-2 px-20 bg-green-400 text-white ml-3 mt-5 md:mt-0"
                    />
                </div>
                <div className=" flex flex-col sm:flex-row  sm:justify-start sm:items-start justify-center items-center mt-5">
                    <div className="border border-slate-200 py-3 ps-5 pe-16 text-slate-500">
                        <button
                            className="block"
                            onClick={() => handleClick("Ödemeler")}
                        >
                            Ödemeler
                        </button>
                        <button
                            onClick={() => handleClick("Genel")}
                            className="py-5 block"
                        >
                            Genel
                        </button>
                        <button
                            onClick={() => handleClick("Üyelik")}
                            className="pb-5 block"
                        >
                            Üyelik
                        </button>
                        <button
                            className="block"
                            onClick={() => handleClick("Fotoğraflar")}
                        >
                            Fotoğraflar
                        </button>
                    </div>
                    <div className=" w-full ml-5">
                        <p className=" w-full p-4 font-medium bg-slate-200 text-slate-500 border-r border-b border-slate-200">
                            Sıkça Sorulan Sorular
                        </p>
                        <p className=" w-full p-4 text-slate-400 border-r border-b border-slate-200">
                            {selectItem === "Ödemeler" &&
                                "ATM den ödeme yapabilir miyim?"}
                            {selectItem === "Genel" &&
                                "ATM den ödeme yapabilir miyim????"}
                            {selectItem === "Üyelik" &&
                                "ATM den ödeme yapabilir miyim?????"}
                            {selectItem === "Fotoğraflar" &&
                                "ATM den ödeme yapabilir miyim???????"}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
