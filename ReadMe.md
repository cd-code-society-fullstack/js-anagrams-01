## Problem: Identifying Anagram Pairs

**Difficulty: Easy**

Your task is to create a function that identifies pairs of anagrams in an array of strings. You can return the result in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Example

**Example 1:**

```
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat","tea"],["tan","nat"],["ate","eat"]]
```

In this example, "eat" and "tea" are anagrams of each other, as are "tan" and "nat", and "ate" and "eat". "bat" does not have any anagrams in the list and is not included in the output.

{Try It!}(node .guides/01/try-it-01.js)


**Example 2:**

```
Input: strs = ["art", "rat", "bats", "stab", "flow", "wolf"]
Output: [["art","rat"], ["bats","stab"], ["flow","wolf"]]
```

Here, "art" and "rat" are anagrams, "bats" and "stab" are anagrams, and "flow" and "wolf" are anagrams.

{Try It!}(node .guides/01/try-it-02.js)

**Example 3:**

```
Input: strs = ["a", "b", "c", "d"]
Output: []
```

In this case, none of the single-letter strings are anagrams of any others.

{Try It!}(node .guides/01/try-it-03.js)

**Constraints:**

1. 1 <= strs.length <= 104
2. 0 <= strs[i].length <= 100
3. strs[i] consists of lowercase English letters.

## Submit

node .guides/secure/01-testRunner.js

"eat" "tea" "tan" "ate" "nat" "bat" : [["eat","tea","ate"], ["tan","nat"]]
"art" "rat" "bats" "stab" "flow" "wolf" : [["art","rat"], ["bats","stab"], ["flow","wolf"]]
"a" "b" "c" "d" : []
"cat" "tac" "dog" "god" "duo" "oud" "hello" : [["cat","tac"], ["dog","god"], ["duo","oud"]]
"abc" "bac" "cab" "def" "fed" "ghi" "hig" "jkl" : [["abc","bac","cab"], ["def","fed"], ["ghi","hig"]]