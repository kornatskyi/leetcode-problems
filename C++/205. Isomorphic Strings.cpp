#include <iostream>
#include <set>
#include <string>
#include <unordered_map>

using namespace std;

/*
examples:
s = "hello", t = "dalli" -> true

s = "world", t = "wortt" -> false

map = new Map<char, char>

for (sc, tc) in (s, t):
    if(map.has(sc)) {
        if(map.get(sc) != ts) {
            return false
        }
    } else {
        map.set(sc, tc)
    }
return true


*/
class Solution {
  public:
    bool isIsomorphic(string s, string t) {
        unordered_map<char, char> charsMapS;
        unordered_map<char, char> charsMapT;

        for (int i = 0; i < s.length(); i++) {
            char sc = s[i];
            char tc = t[i];
            if (charsMapS.find(sc) != charsMapS.end()) {
                if (charsMapS[sc] != tc) {
                    return false;
                }
            } else {
                charsMapS[sc] = tc;
            }

            if (charsMapT.find(tc) != charsMapT.end()) {
                if (charsMapT[tc] != sc) {
                    return false;
                }
            } else {
                charsMapT[tc] = sc;
            }
        }
        return true;
    }
};