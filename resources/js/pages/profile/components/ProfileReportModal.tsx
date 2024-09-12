import React from "react";
import { IoIosClose } from "react-icons/io";
import './profileReportModal.css'

export default function ProfileReportModal(){
    return (
        <>
        <div className="modal-container flex items-center justify-center">
            <div className="modal-part">
                <div className="p-4 flex justify-between items-center">
                    <h4 className="text-2xl">Kullanıcı Şikayeti</h4>
                    <IoIosClose />
                </div>
                <hr className='divide-slate-300' />
                <div className="p-4 ">
                    <p className="py-3">Lütfen şikayet nedenini seçin veya yazınız</p>
                    <div className="block">
                        <input type="checkbox" className="custom-report-modal" />
                        <label htmlFor="" >Evli</label>
                    </div>
                    <div className="block">
                        <input type="checkbox" className="custom-report-modal" />
                        <label htmlFor="" >Profilinde verdiği bilgiler doğru değil.</label>
                    </div>
                    <div className="block">
                        <input type="checkbox" className="custom-report-modal" />
                        <label htmlFor="" >Reklam içerikli mesaj gönderiyor.</label>
                    </div>
                    <div className="block">
                        <input type="checkbox" className="custom-report-modal" />
                        <label htmlFor="" >Para yardımı, kontör gibi maddi taleplerde bulunuyor. Fotoğrafı kendine ait değil</label>
                    </div>
                    <div className="block">
                        <input type="checkbox" className="custom-report-modal" />
                        <label htmlFor="" >Birden fazla profili var ve farklı bilgiler veriyor.</label>
                    </div>
                    <div className="block">
                        <input type="checkbox" className="custom-report-modal" />
                        <label htmlFor="" >Uygunsuz mesaj gönderiyor.</label>
                    </div>
                    <div className="block">
                        <input type="checkbox" className="custom-report-modal" />
                        <label htmlFor="" >Yüzyüze tanıştığımızda sorun yaşadım.</label>
                    </div>
                    <textarea name="" id="" className="border border-slate-300 w-full mt-3 p-1" placeholder="Mesajınızı Giriniz"></textarea>
                </div>
                <hr className='divide-slate-300' />
                <div className="flex justify-start p-4">
                    <button className="border border-black px-2">Gönder</button>
                </div>
            </div>
         </div>
        </>
    )
}