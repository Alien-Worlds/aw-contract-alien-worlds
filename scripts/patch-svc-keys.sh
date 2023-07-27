#!/bin/bash

# Each consists of file path, current key, and new key
file_paths=("src/services/alien-worlds-contract.service-impl.ts")
current_keys=("balance")
new_keys=("")

# Loop through the indices and perform the key replacements
for i in "${!file_paths[@]}"; do
    file_path="${file_paths[$i]}"
    current_key="${current_keys[$i]}"
    new_key="${new_keys[$i]}"
    
    # Search for the current_key in the file and replace it with new_key
    sed -i "" "s/const table_key = '${current_key}';/const table_key = '${new_key}';/g" "$file_path"
done
