module Main where

import Data.Typeable
-- Convert String into an array of character
charStrs :: String -> [String]
charStrs = fmap pure

for:: Int -> Int -> Int -> [String] -> Int -> IO ()
for a b c input count = do
  if a < b
    then do
      if ([['(']] == (take 1 (drop a input)))
        then  for (a + c) b c input (count + 1)
        else  for (a + c) b c input (count - 1)
    else print count


main :: IO ()
main = do
  let count = 0
  rawInput <- readFile "../input.txt"

  let input = charStrs rawInput

  let count = 0
  for 0 (length input) 1 input count
