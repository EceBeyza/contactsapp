import { useState } from 'react'

function Form({ addContacts, contacts }) {
    // addContacts app.jsde tanımlanan gelen verileri almak üzerine burada tanımlanmıştır.
    const [form, setForm] = useState({ fullname: "", phone_number: "" })

    const onChangeInput = (e) => {
        // değişen verileri almak üzerine oluşturulan fonksiyon
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        // submit işlemi yapıldığını önlemek için e parametresi gelen her fullname ve phone number için yazılmıştır.
        e.preventDefault()

        if (form.fullname === "" || form.phone_number === "") {
            // eğer bilgiler boş ise return false ile aşağıdaki console yazdırma işlemini yapmamak üzerine
            return false;
        }
        //    verileri bir arada almak ve önceki verileride kaybetmemek adına son işlem console.logda gösterilen işlem App.jsdedir
        addContacts([...contacts, form])

        setForm({ fullname: "", phone_number: "" }) // console değerleri yazdırdıktan sonra inputları boş gösterir.
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input className='inputs'
                    name="fullname"
                    placeholder='FullName'
                    onChange={onChangeInput}
                    value={form.fullname}
                />
            </div>
            <div>
                <input className='inputs'
                    name='phone_number'
                    placeholder='Phone Number'
                    onChange={onChangeInput}
                    value={form.phone_number}
                /></div>

            <div>
                <button className='tus'>ADD</button>
            </div>
        </form>
    )
}
export default Form;