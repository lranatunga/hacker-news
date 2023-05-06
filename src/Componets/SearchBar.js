import {CiSearch} from 'react-icons/ci'

export default function  SearchBar (props) {


    return (
        <div class="SearchInput">
            <input type='search'
                   value={props.value ? props.value:''}
                   onChange={ props.handleChange}/>
            <button class="btn-search" onClick={props.handleSubmit}><CiSearch/></button>
        </div>
    )
}