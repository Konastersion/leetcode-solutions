/*

242. Valid Anagram


Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/

let s ='anagram';

let t = 'nagaram';

var isAnagram = function(s, t) {

  s = s.split('').sort();
  t = t.split('').sort();

  return s.length === t.length && s.every((value, index) => value === t[index]);
 
};


