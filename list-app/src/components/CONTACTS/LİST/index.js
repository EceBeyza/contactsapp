import React, { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilter] = useState("")

    const filtered = contacts.filter((item) => {
        //!!!!!!!!!!!1filtreleme fonksiyonu!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase().includes(filterText.toLocaleLowerCase())
        )// Object.keys dememimiz nedeni tel.no da yazılsa isimde yazılsa filtleme yapması, some ise herhangi bir bilgi için, key'de fullname ve phonename için yazılmıştır. Değerleri string almak ve küçük büyük harf probleminden kurtulmak için alındı, filtertext parametresi ise filtrelen değerin içerip içermediği kontrol edilecek. 
    })

    return (
        <div>
            <input placeholder='Filter' value={filterText} onChange={(e) => setFilter(e.target.value)} /> {/* inputa filtreleme yapacağını öğrettik değer yazabilmeyi sağladık */}

            <ul className='list'>
                {/* 2- yeni bir liste oluşturup, gelen verileri doma yazdırmak. ardından bunu filtered olarak değiştirdik çünkü filtrelendiğinde verileri gösterecek */}
                {filtered.map((contacts, i) => (
                    <li key={i} >
                        <span>
                            {contacts.fullname}
                        </span>
                        <span className='phone'>
                            {contacts.phone_number}
                        </span>
                    </li>
                ))
                }
                <p>Total Contacts: ({filtered.length})</p>
            </ul>
        </div>
    )
}


export default List;