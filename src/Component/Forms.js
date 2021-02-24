import React, {useState} from 'react';

function Forms(){
    const [form, setForm] = useState({data:'hello world'})

    function updateState(e){
        setForm({data: e.target.value})
    }

    return (
        <div>
        <input className="m-2" type='text' value={form.data} onChange={updateState}></input> 
        <p>{form.data}</p>
        </div>
    )
}

export default Forms;