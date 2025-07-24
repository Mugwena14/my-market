import { ClipLoader } from 'react-spinners';

const Spinner = () => {

    const override = {
        display: 'block',
        margin: '100px auto',
        color: 'blue'
    }

    return (
        <ClipLoader
        cssOverride={override}
        size={150}
        />
    )
}

export default Spinner