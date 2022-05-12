import React, {useState} from 'react';
import { Stack, IconButton, Input } from '@chakra-ui/react';
import { useGlobalContext } from '../../context';
import { SearchIcon } from '@chakra-ui/icons';

interface SearchBoxProps{
    placeholder: string;
}

const SearchBox = ({ placeholder}:SearchBoxProps) => {
const { setQuery } = useGlobalContext();
const [inputValue, setInputValue]=useState("")
    

    const handleChange = (e:React.ChangeEvent) => {
        const { value } = e.target as HTMLInputElement;
        const input = value.toLowerCase();
        setInputValue(input);
    };
    const handleSubmit= (e:React.FormEvent) => {
        e.preventDefault();
        setQuery(inputValue);
    };
    
    return (
        <Stack direction='row' justify='center'>
            <form id="formSearch" onSubmit={handleSubmit}>
                <IconButton type="submit" aria-label='Search Gifs' bg={'pink.400'} _hover={{ bg: "cyan.200" }} icon={<SearchIcon/>}></IconButton>
                <Input width='auto' type="text" id="searchBox" placeholder={placeholder} onChange={handleChange} value={inputValue} ></Input>
            </form>
        </Stack>
    )
}

export default SearchBox;