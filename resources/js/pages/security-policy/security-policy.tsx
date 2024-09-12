import React from 'react'

export default function SecurityPolicy (){
    return(
        <>
        <h2 className="text-3xl text-black my-10 text-center">Gizlilik Sözleşmesi</h2>
        <div className="border border-slate-200 py-4 md:py-24 px-10 mx-5 md:mx-32 mb-5 md:mb-32">
            <p className="text-slate-500">Sitemize üye olurken üyelerimiz herhangi bir kimlik bilgisi vermemektedir. Bu bilgilerin dağıtılması, yayınlanması, açıklanması sitemiz tarafından söz konusu olamaz.</p>
            <hr className="divide-slate-500 my-10" />
            <p className="text-slate-500">Sitemizde kayıt sırasında verilen eposta adresi 3. şahıslardan gizli tutulur ve asla diğer üyelerle paylaşılmaz.</p>
            <hr className="divide-slate-500 my-10" />
            <p className="text-slate-500">Üyeliğini altın üyeliğe yükselten üyelerimizin kredi kartı bilgileri saklı tutulur. Aynı zamanda sitemiz bu bilgileri kullanarak üyelerinden otomatik abonelik tahsilatı yapabilir. Aboneliklerinin otomatik uzatılmasını istemeyen üyelerin ayarlar bölümünden otomatik ödeme tahsilatını kapatmaları gerekmektedir.</p>
            <hr className="divide-slate-500 my-10" />
            <p className="text-slate-500">Sitemizde üyelerimiz tarafından yazılan makale, profil yazısı, şiir ve yine üyelerimiz tarafından yayınlanan resimler sitemizden izin almaksızın yayınlanamaz.</p>
        </div>
        </>
    )
}