#include <iostream>
#include <set>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

/*
examples:
numRows = 3
s = "PAYPALISHIRING" -> "PAHNAPLSIIGYIR"


numRows = 2
s = "qwertyuiop" -> qetuowryip

numRows = 4
s = "somelongstringoftext" ->sggtosnoxmltioeert
snnx
oogiget
mlsrot
etf
snnxoogigetmlsrotetf

strings = [numRows]
sp = 0
switch = true
for i, c in  s:
  string[sp].add(c)
  if sp == numRows - 1 or sp == 0:
    switch = !switch
  if switch:
    sp++
  else:
    sp--

return string.join("")

*/

class Solution {
  public:
    string convert(string s, int numRows) {

        string result;

        std::vector<std::string> rows(std::min(numRows, static_cast<int>(s.length())));
        int sp = 0;
        bool isForward = true;
        for (int i = 0; i < s.length(); i++) {
            char c = s[i];
            std::cout << sp << std::endl;
            rows[sp] = rows[sp] + c;
            if (sp == numRows - 1 && sp == 0) continue;
            if (sp == numRows - 1) {
                isForward = false;
            }
            if (sp == 0) {
                isForward = true;
            }
            if (isForward) {
                sp++;
            } else {
                sp--;
            }
        }

        for (int i = 0; i < rows.size(); i++) {
            result += rows[i];
        }

        return result;
    }
};
int main() {
    Solution solution;

    cout << solution.convert("qwertyuiop", 2) << endl;

    return 0;
}