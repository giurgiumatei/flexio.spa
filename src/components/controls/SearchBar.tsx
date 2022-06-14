import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { UserSearchSuggestionProps } from '../../interfaces/users/userSearchSuggestionProps';
import userService from '../../services/users/userService';

const SearchBar = () => {
  const [value, setValue] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<UserSearchSuggestionProps[]>(
    []
  );

  const handleInputChange = async (name: string) => {
    const newSuggestions = await userService
      .searchUserProfile(name)
      .then((response) => response.data);
      setSuggestions(newSuggestions);
  };

  return (
    <Stack spacing={2} width='350px' height='53px'>
      <Autocomplete
        freeSolo
        options={suggestions.map((option) => option.name)}
        filterOptions={(x) => x}
        renderInput={(params) => (
          <TextField color='secondary' {...params} label='Search...' />
        )}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        onInputChange={(event, v) => handleInputChange(v)}
        sx={{ width: 300, backgroundColor: 'white', borderRadius: '4px' }}
      />
    </Stack>
  );
};

export default SearchBar;
