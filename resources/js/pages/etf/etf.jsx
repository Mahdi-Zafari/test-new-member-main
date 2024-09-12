import React from "react";
import Img from "../../components/Shared/Img";

export default function ETF() {
    return (
        <>
            <h2 className="text-3xl text-black my-10 text-center">
                Havale / EFT Ödeme
            </h2>
            <div className="py-4 px-2 mx-2 md:mx-32">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-slate-100 p-5 md:col-span-3">
                        <span className="font-medium text-lg">
                            Havale Kodunuz
                        </span>
                        <span className="font-medium text-xl text-pink-500 ml-2 md:ml-5">
                            G4427380163824
                        </span>
                        <hr className="divide-slate-500 my-4" />
                        <div className="leading-7">
                            <p>Yapmanız Gerekenler</p>
                            <p>
                                - Ödemenizi banka aracılığı ile yapacaksanız
                                havale kodunuzu açıklama kısmına yazınız.
                            </p>
                            <p>
                                - Havale açıklaması bölümüne havale kodunuzu
                                belirtmeyi unuttunuz ise, profil sayfanızın sağ
                                alt köşesinde yer alan ödeme formu linkine
                                tıklayarak formu doldurup bize iletmeniz yeterli
                                olacaktır.
                            </p>
                            <p>
                                - Ödemeniz hesabımıza ulaştığında satın
                                aldığınız üyelikler aktif hale gelecektir.
                                İlginize ve sabrınıza teşekkür ederiz.
                            </p>
                        </div>
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
                            <button className="bg-green-500 text-white py-3 w-full">
                                ÖDEMEYİ ONAYLIYORUM
                            </button>
                        </div>
                    </div>
                </div>
                <h2 className="text-xl text-black my-10 text-center">
                    ALICI: Mint Bilgi Teknolojileri Tic. A.Ş.
                </h2>
                <div className="flex flex-col md:flex-row mt-4 gap-4">
                    <div className="flex gap-4 flex-col md:flex-row border border-slate-200 p-4">
                        <div className="object-center mx-auto">
                            <Img
                                src="/assets/images/Yapi-Kredi-logo.png"
                                alt="Yapi-Kredi-logo"
                            />
                        </div>
                        <div>
                            <p className="font-medium pb-2">
                                Yapı Kredi Bankası
                            </p>
                            <p>İstanbul - Kartal Oto Sanayi Şubesi</p>
                            <p>Şube Kodu: 1009</p>
                            <p>Hesap Kodu: 42960105</p>
                            <p>
                                IBAN Numarası: TR88 0006 7010 0000 0042 9601 05
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col md:flex-row border border-slate-200 p-4">
                        <div className="object-center mx-auto">
                            <Img
                                src="/assets/images/TurkeyBank.png"
                                alt="TurkeyBank"
                            />
                        </div>
                        <div>
                            <p className="font-medium pb-2">
                                Türkiye İş Bankası
                            </p>
                            <p>İstanbul - Kartal Sanayi Bölgesi</p>
                            <p>Şube Kodu: 1219</p>
                            <p>
                                IBAN Numarası: TR96 0006 4000 0011 2190 4217 26
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-4  gap-4">
                    <div className="flex gap-4 flex-col md:flex-row border border-slate-200 p-4">
                        <div className="object-center mx-auto">
                            <Img
                                src="/assets/images/Ziraat-Bank-logo.jpg"
                                alt="Ziraat-Bank-logo"
                            />
                        </div>
                        <div>
                            <p className="font-medium pb-2">
                                Ziraat Bankası (TL)
                            </p>
                            <p>İstanbul - Ferhatpaşa Şubesi</p>
                            <p>Şube Kodu: 2444</p>
                            <p>Hesap Kodu: 2444-88529330-5004</p>
                            <p>
                                IBAN Numarası: TR 6400 0100 2444 8852 9330 5004
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col md:flex-row border border-slate-200 p-4">
                        <div className="object-center mx-auto">
                            <Img
                                src="/assets/images/Ziraat-Bank-logo.jpg"
                                alt="Ziraat-Bank-logo"
                            />
                        </div>
                        <div>
                            <p className="font-medium pb-2">
                                Ziraat Bankası (EURO)
                            </p>
                            <p>İstanbul - Ferhatpaşa Şubesi Şube Kodu: 2444</p>
                            <p>Şube Kodu: 2444</p>
                            <p>Hesap Kodu: 2444-88529330-5006</p>
                            <p>
                                IBAN Numarası: TR 1000 0100 2444 8852 9330 5006
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-4  gap-4">
                    <div className="flex gap-4 flex-col md:flex-row border border-slate-200 p-4">
                        <div className="object-center mx-auto">
                            <Img
                                src="/assets/images/Ziraat-Bank-logo.jpg"
                                alt="Ziraat-Bank-logo"
                            />
                        </div>
                        <div>
                            <p className="font-medium pb-2">
                                Ziraat Bankası (DOLAR)
                            </p>
                            <p>İstanbul - Ferhatpaşa Şubesi</p>
                            <p>Şube Kodu: 2444</p>
                            <p>Hesap Kodu: 2444-88529330-5005</p>
                            <p>
                                IBAN Numarası: TR 3700 0100 2444 8852 9330 5005
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 w-full md:w-1/2"></div>
                </div>
                <hr className="divide-slate-300 my-10" />
                <div className="leading-7 text-justify">
                    <h4 className="font-medium">Bilmeniz gerekenler</h4>
                    <p>
                        - Ödemenizi banka aracılığı ile yapacaksanız havale
                        kodunuzu açıklama kısmına yazınız.
                    </p>
                    <p>
                        - Havale/ EFT işlemini gerçekleştirirken, alıcı kısmına
                        Mint Bilgi Teknolojileri Tic. A.Ş. yazmalısınız.
                    </p>
                    <p>
                        - Havale/ EFT işlemini gerçekleştirirken, açıklama
                        kısmına Ad, Soyad ve havale kodunuzu yazmayı unutmayın.
                    </p>
                    <p>
                        - Havale kodunuz ile rumuzunuz tespit edilir. Satın
                        aldığınız üyelikler mesai saatleri (2-3 saat) içerisinde
                        aktif hale gelecektir.
                    </p>
                </div>
            </div>
        </>
    );
}
