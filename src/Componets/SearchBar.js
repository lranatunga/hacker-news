import {CiSearch} from 'react-icons/ci'

export default function  SearchBar (props) {



    return (
        <div>
            <input type='search'
            value={props.value ? props.value:''}
            onChange={ props.handleChange}/>
            <button onClick={props.handleSubmit}><CiSearch/></button>
        </div>
    )
}