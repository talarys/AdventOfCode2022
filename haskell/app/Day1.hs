module Day1 (day1) where

import Data.List (sort)
import Data.List.Split (splitOn)

day1 :: IO ()
day1 = do
  input <- lines <$> readFile "../inputs/day1.txt"
  let chunks = splitOn [""] input
  let calories = reverse . sort $ map (sum . map read) chunks

  putStrLn $ "Solution 1: " ++ show (head calories)
  putStrLn $ "Solution 2: " ++ show (sum $ take 3 calories)