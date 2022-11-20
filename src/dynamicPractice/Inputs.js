import React, { useState } from 'react';
const Inputs = () => {
    const [formValues, setFormValues] = useState([{ name: "", email: "" }])
    const [selection, setSeletion] = useState([
        { id: 1, name: 'Price 1', show: true },
        { id: 2, name: 'Price 2', show: true },
        { id: 3, name: 'Price 3', show: true },
        { id: 4, name: 'Price 4', show: true },
        { id: 5, name: 'Price 5', show: true },
    ]);
    const [input, setInput] = useState('');
    const pushSelect = () => {
        setSeletion([...selection, { id: selection.length + 1, name: input }])
        setInput('')
    }

    const handleChangeSelect = (e) => {
        console.log('change : ', e.target.value);
    }

    const handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }
    const addFormFields = () => {
        setFormValues([...formValues, { name: '', email: '' }])
    }
    const removeFormFields = (index) => {
        let newFormValues = [...formValues];
        newFormValues.splice(index, 1);
        setFormValues(newFormValues);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('e : ', e);
        console.log(formValues);


    }
    return (
        <>
            <form onSubmit={handleSubmit} className="container mt-2">
                {
                    formValues.map((element, index) => (
                        <div className='d-flex' key={index}>
                            <div className="form-group col-lg-6" key={index}>
                                <label>Name</label>
                                <input type="text" className='form-control' name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
                                <label>Email</label>
                                <input type="text" className='form-control' name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
                            </div>
                            <div className='mt-5 mx-2'>
                                {
                                    index ?
                                        <button type="button" style={{ marginTop: "40px" }} className="btn btn-danger" onClick={() => removeFormFields(index)}>Remove</button>
                                        : null
                                }
                            </div>
                        </div>
                    )
                    )
                }
                <div className="mt-2 ">
                    <button className="btn btn-primary mx-1" type="button" onClick={() => addFormFields()}>Add</button>
                    <button className="btn btn-success" type="submit">Submit</button>
                </div>
            </form >

            <div className="container mt-3">
                <select className='form-control' onChange={handleChangeSelect}>
                    {
                        selection.map(id => {
                            return <option key={id.id}> {id.name} </option>
                        })
                    }
                </select>
                <input type='text' className='form-control mt-1' value={input} onChange={(e) => setInput(e.target.value)} />
                <button className='btn btn-outline-primary mt-2' onClick={pushSelect}> Add Key </button>
            </div>
        </>
    );

}
export default Inputs;