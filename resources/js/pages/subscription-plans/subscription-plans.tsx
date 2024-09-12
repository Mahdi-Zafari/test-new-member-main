import React from 'react';

export default function SubscriptionPlans(){
    return (
        <>
            <h2 className="text-3xl text-black my-10 text-center">Altın Üyelik Satın Al</h2>
            <p className='text-center'>Ödeme yönteminizi ve paketinizi seçerek ödemeye geçebilirsiniz.</p>
            <div className="py-4 px-10 mx-5 md:mx-32">
                <div className='w-full justify-between flex flex-col sm:flex-row border border-slate-200'>
                    <button className=" py-5 px-20 bg-slate-100">KREDİ KARTI</button>
                    <button className=' py-5 px-20'>BANKA TRANSFERİ</button>
                    <button className=' py-5 px-20'>CEP TELEFONU</button>
                </div>
                <div className='grid md:grid-cols-3 gap-5 mt-10'>
                    <div className='border border-slate-200 text-center'>
                        <h4 className='border-b border-slate-200 py-5 font-medium text-lg bg-yellow-500	'>6 Aylık</h4>
                        <div className='leading-10'>
                            <p className='pt-5'><span className='line-through'>299.00 TL</span><span className='text-4xl'>199</span>.00 TL/AY</p>
                            <p className='bg-green-500 mx-5 text-white'>PAKETİ SEÇ</p>
                            <p>- Toplam <span className='line-through'>1794 TL</span> yerine,1194 TL</p>
                            <p>-7/24 sınırsız mesajlaşma</p>
                            <p className='pb-5'>- Üyelerle sınırsız etkileşim</p>
                        </div>
                        <h4 className='border-b border-slate-200 py-5 font-medium text-lg bg-yellow-500	'>6 Aylık</h4>
                    </div>
                    <div className='border border-slate-200 text-center'>
                        <h4 className='border-b border-slate-200 py-5 font-medium text-lg'>3 Aylık</h4>
                        <div className='leading-10'>
                            <p className='pt-5'><span className='text-4xl'>299</span>.00 TL/AY</p>
                            <p className='bg-green-500 mx-5 text-white'>PAKETİ SEÇ</p>
                            <p>- Toplam 897.00 TL</p>
                            <p>-7/24 sınırsız mesajlaşma</p>
                            <p className='pb-5'>- Üyelerle sınırsız etkileşim</p>
                        </div>
                    </div>
                    <div className='border border-slate-200 text-center'>
                        <h4 className='border-b border-slate-200 py-5 font-medium text-lg'>1 Aylık</h4>
                        <div className='leading-10'>
                            <p className='pt-5'><span className='text-4xl'>499</span>.00 TL/AY</p>
                            <p className='bg-green-500 mx-5 text-white'>PAKETİ SEÇ</p>
                            <p>- Toplam 499.00 TL</p>
                            <p>-7/24 sınırsız mesajlaşma</p>
                            <p className='pb-5'>- Üyelerle sınırsız etkileşim</p>
                        </div>
                    </div>
                </div>
                <div className='w-full border mt-10 border-slate-200'>
                    <p className='text-center py-10'>Kredi kartı bilgileriniz kesinlikle kayıt edilmemektedir ve sizin adınıza otomatik ödeme gerçekleştirilmemektedir. Satın alma işleminiz 256 bit şifrelemeyle korunacaktır.</p>
                    <div className='flex flex-wrap justify-around py-5'>
                        <img src='http://localhost/assets/images/mastercard.png' alt="Visa" className='w-20 h-auto md:w-auto' />
                        <img src='http://localhost/assets/images/visa.png' alt="Mastercard" className='w-20 h-auto md:w-auto' />
                        <img src='http://localhost/assets/images/americanexpress.png' alt="American Express" className='w-20 h-auto md:w-auto' />
                    </div>
                </div>
            </div>
        </>
    )
}


