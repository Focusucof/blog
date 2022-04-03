---
title: "picoCTF2022 - Basic Mod 1"
date: "2022-04-05"
---

# picoCTF2022 - Basic Mod 1
---

### Category: Cryptography
## Description
> We found this weird message being passed around on the servers, we think we have a working decrpytion scheme. Download the message here. Take each number mod 37 and map it to the following character set: 0-25 is the alphabet (uppercase), 26-35 are the decimal digits, and 36 is an underscore. Wrap your decrypted message in the picoCTF flag format (i.e. picoCTF{decrypted_message})

## Hints

> Do you know what mod 37 means?

> mod 37 means modulo 37. It gives the remainder of a number after being divided by 37.

## Attachments

> [message.txt](https://artifacts.picoctf.net/c/395/message.txt)

## Solution

The modulo operator is used to find the remainder of a number after being divided by a number. That number is then mapped to the following character set:

> ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "_"]

The following python script can be used to decrypt the message, where str is the encrypted message:

```
map = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "_"]

str = "91 322 57 124 40 406 272 147 239 285 353 272 77 110 296 262 299 323 255 337 150 102"
n = str.split(" ")
print(n)

result = ""
for num in n:
    result += map[int(num) % 37]

print("picoCTF{" + result + "}")
```

## Flag

picoCTF{R0UND_N_R0UND_ADD17EC2}
