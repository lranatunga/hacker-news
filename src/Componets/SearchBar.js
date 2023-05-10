import {CiSearch} from 'react-icons/ci'

export default function  SearchBar (props) {


    return (
        <div className="SearchInput">
            <input type='search'
                   value={props.value ? props.value:''}
                   onChange={ props.handleChange}/>
            <button className="btn-search" onClick={props.handleSubmit}><CiSearch/></button>
        </div>
    )
}