import React from 'react'
import { IoIosMail } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { CiTextAlignLeft } from "react-icons/ci";




export default function ContactUs (){
    return (
        <>
        <h2 className="text-3xl text-black my-10 text-center">Bize Ulaşın</h2>
        <p className='text-center'>İletişim bilgilerimizden direkt olarak ya da, iletişim formunu doldurarak bize ulaşabilirsiniz.</p>
        <div className='py-4 md:py-24 px-10 mx-5 md:mx-32 mb-5 md:mb-32 grid grid-cols md:grid-cols-2 gap-5'>
            <div>
                <div className=' w-full border border-slate-200'>
                    <div className=' w-full p-4 bg-slate-100'><IoIosMail /></div>
                    <p className=' w-full p-4 text-slate-500'>destek@gonuldensevenler.com</p>
                </div>
                <h3 className="font-medium my-2">Görüş ve önerileriniz için hazırız!</h3>
                <p className="text-justify">Sorularınızı en geç 1 iş günü içinde yanıtlıyoruz. Eğer yanıt vermezsek sorunuzun cevabı yardım bölümünde var demektir. Yardım bölümünü ziyaret ederek sorunuzun yanıtına ulaşabilirsiniz. Sorun, şikayet ve taleplerinizin bize sorunsuz ulaşabilmesi için lütfen size ulaşabileceğimiz bir e-posta adresi yazınız. Anlayışınız için teşekkür ederiz.</p>
            </div>
            <div className='border border-slate-200'>
                <div className="p-5 w-full">
                    <form action="">
                        <label className="inline-flex items-center space-x-2"><IoPersonCircle />Ad, Soyad</label>
                        <input type="text" className='block w-full border border-slate-200 mb-4 ' />
                        <label className="inline-flex items-center space-x-2"><IoIosMail />E-posta</label>
                        <input type="email"className='block w-full border border-slate-200 mb-4 ' />
                        <label className="inline-flex items-center space-x-2"><CiTextAlignLeft />Коnu</label>
                        <input type="text" className='block w-full border border-slate-200 mb-4 ' />
                        <label className="inline-flex items-center space-x-2"><FaPencilAlt />Mesaj</label>
                        <textarea className='resize-none border w-full border-slate-200 block mb-4'></textarea>
                        <input type="submit" className='block bg-green-500 text-white py-2 px-4' value="GÖNDER" />
                    </form>
                </div>
            </div>
        </div> 
        </>
    )
}