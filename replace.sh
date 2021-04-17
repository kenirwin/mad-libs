#!/bin/bash

# sed 's/__([A-Z ]+)__/<span class="input" data-placeholder="\1"><\/span>/g' $1

perl -pi.bak -e 's/__([A-Z,\(\)\&\;\- ]+)__/<span class="input" data-placeholder="\1"><\/span>/g' $1

# echo $1