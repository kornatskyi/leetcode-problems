#include <iostream>
#include <set>
#include <string>
#include <unordered_map>

using namespace std;
/*
Constraints:
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letter

Tests:
t hello;s=hel; -> true
t = qweqwe; s = qq; -> true
t = aaabbbccc; s=abc; -> true
t = aaabbbccc; s=acb; -> false


if(s.length < t.length) {
  return false
}

p1 = 0
p2 = 0
while(p2 < s.length && p1 < t.length){
  if(t[p1] === s[p2]) {
    p2++
  }
  p1++
}

if(p2 < s.length) {
  return false
} else {
  return true
}
aaabbbccc
|

acb
|

*/
class Solution {
  public:
    bool isSubsequence(string s, string t) {
        if (t.length() < s.length()) {
            return false;
        }

        int p1 = 0;
        int p2 = 0;
        do {
            if (p2 == s.length()) return true;
            if (t[p1] == s[p2]) {
                p2++;
            }
            p1++;
        } while (p2 < s.length() && p1 < t.length());

        return p2 == s.length() ? true : false;
    }
};
