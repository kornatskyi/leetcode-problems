#include <iostream>
#include <set>
#include <string>
#include <unordered_map>

using namespace std;

/*
ransomNote = "hel"
magazine = "hello"
canConstruct(ransomNote, magazine) -> true
ransomNote = "llo"
magazine = "hello"
canConstruct(ransomNote, magazine) -> true
ransomNote = "heel"
magazine = "hello"
canConstruct(ransomNote, magazine) -> false

pseudo code:

Map<string, int> magMap

if magazine.length < ransomNote.length:
  return false

for(letter in magazine)
  magMap[letter] = magMap.has(letter) ? magMap.get(letter) + 1 : 1

for(letter in ransomNote)
  if !magMap.has(letter) or magMap.get(letter) == 0:
    return false

  magMap[letter] = magMap.get(letter) - 1

return true
*/

class Solution {
  public:
    bool canConstruct(string ransomNote, string magazine) {
        if (ransomNote.length() > magazine.length()) {
            return false;
        }
        unordered_map<char, int> magMap;

        for (unsigned int i = 0; i < magazine.length(); i++) {
            char letter = magazine[i];
            magMap[letter] = magMap.find(letter) != magMap.end() ? magMap[letter] + 1 : 1;
        }

        for (unsigned int i = 0; i < ransomNote.length(); i++) {
            char letter = ransomNote[i];
            if ((magMap.find(letter) == magMap.end()) || magMap[letter] == 0) {
              return false;
            }
            magMap[letter] =  magMap[letter] - 1;
        }

        return true;
    }
};

int main() {
    Solution solution;

    cout << solution.canConstruct("hlll", "hello") << endl;

    return 0;
}
