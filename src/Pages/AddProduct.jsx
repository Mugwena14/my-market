import AddProducts from '../Components/AddProduct'

const AddProduct = () => {
    
    async function SubmitForm(newProduct){
        const res = await fetch('http://localhost:3001/posts', {
            method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(newProduct),
        });

        return;
    }
    
    return (
        <AddProducts  onSubmitForm={SubmitForm}/>
    )
}

export default AddProduct