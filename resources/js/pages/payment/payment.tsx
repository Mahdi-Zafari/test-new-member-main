import React from "react";
import Img from "../../components/Shared/Img";

export default function Payment() {
    return (
        <>
            <h2 className="text-3xl text-black my-10 text-center">
                Kredit Karti ile Öde
            </h2>
            <div className="py-4 px-10 mx-5 md:mx-32">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-slate-100 p-5 md:col-span-3">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="w-full md:w-auto flex-1">Kart No</p>
                            <input
                                type="text"
                                className="border border-slate-200 w-full md:flex-1"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between mt-5 gap-4">
                            <p className="w-full md:w-auto flex-1">
                                Kart Üzerindeki İsim
                            </p>
                            <input
                                type="text"
                                className="border border-slate-200 w-full md:flex-1 pl-2"
                                placeholder="MEHMET TÜRK"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between mt-5 gap-4">
                            <p className="w-full md:w-auto flex-1">
                                Son Kullanma Tarihi{" "}
                            </p>
                            <div className="flex w-full md:flex-1 space-x-2">
                                <select className="border border-slate-200 w-full">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                                <select className="border border-slate-200 w-full">
                                    <option value="">2024</option>
                                    <option value="">2023</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between mt-5 gap-4">
                            <p className="w-full md:w-auto flex-1">CVC2</p>
                            <div className="flex w-full md:flex-1 space-x-2">
                                <input
                                    type="text"
                                    className="border border-slate-200 w-full pl-2"
                                    placeholder="999"
                                />
                                <button className="text-xs px-2 py-1">
                                    CVC2 Nedir؟
                                </button>
                            </div>
                        </div>
                        {/* <Img src="/assets/images/creditCard.png" alt="creditCard" className='mt-5' /> */}
                    </div>
                    <div className="border border-slate-200 text-center md:col-span-1">
                        <h4 className="border-b border-slate-200 py-5 font-medium text-lg">
                            Hesap Özeti
                        </h4>
                        <div>
                            <div className="flex justify-between py-4 px-2">
                                <p>1 Aylık Altın Üyelik</p>
                                <p>499.00 TL</p>
                            </div>
                            <div className="flex justify-between pb-4 px-2">
                                <p>Toplam</p>
                                <p>499 TL</p>
                            </div>
                            <p className="bg-green-500 text-white py-3 cursor-pointer">
                                ÖDEMEYİ ONAYLIYORUM
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full border mt-10 border-slate-200">
                    <p className="text-center py-10">
                        Kredi kartı bilgileriniz kesinlikle kayıt edilmemektedir
                        ve sizin adınıza otomatik ödeme
                        gerçekleştirilmemektedir. Satın alma işleminiz 256 bit
                        şifrelemeyle korunacaktır.
                    </p>
                    <div className="flex justify-around py-5">
                        <Img src="/assets/images/payment.png" alt="payment" />
                    </div>
                </div>
                <hr className="divide-slate-300 my-10" />
                <div className="leading-7">
                    <h4 className="font-medium">Bilmeniz gerekenler</h4>
                    <p>- Kredi kartı bilgileriniz kesinlikle kaydedilmez.</p>
                    <p>
                        - Üyeliğiniz asla yenilenmez ve çeşitli bahanelerle
                        tekrardan tahsilat yapılmaz.
                    </p>
                    <p>- Tüm bankaların kredi kartları geçerlidir.</p>
                    <p>- Altın üyeliğiniz ödemenizi yaptığınız anda açılır.</p>
                    <p>
                        - Bu harcamanız kredi kartı ekstrenizde
                        gonuldensevenler.com olarak değil, 'Mint Bilgi
                        Teknolojileri Tic. A.Ş.` adıyla yer alır - Ödemeler tek
                        çekim yapılır ve Taksit imkanımız bulunmamaktadır.
                    </p>
                    <p>
                        -Güvenlik kodu, kredi kartınızın arkasında bulunan
                        rakamların son 3 hanesidir.
                    </p>
                </div>
            </div>
        </>
    );
}
