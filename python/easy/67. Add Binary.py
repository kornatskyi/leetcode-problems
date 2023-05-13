class Solution:
    def addBinary(self, a: str, b: str) -> str:
        max_len = len(a) if len(a) > len(b) else len(b)
        la = list(("0" * (max_len - len(a))) + a)
        lb = list(("0" * (max_len - len(b))) + b)
        result = list(("0" * max_len) + "0")
        for i in range(max_len):
            r_i = -i - 1
            if (int(la[r_i]) + int(lb[r_i]) + int(result[r_i])) == 1:
                result[r_i] = '1'
            elif (int(la[r_i]) + int(lb[r_i]) + int(result[r_i])) == 0:
                result[r_i] = '0'
            elif (int(la[r_i]) + int(lb[r_i]) + int(result[r_i])) == 2:
                result[r_i] = '0'
                result[r_i - 1] = '1'
            else:
                result[r_i] = "1"
                result[r_i - 1] = '1'
        if result[0] == "0":
          result.remove("0")
        return "".join(result)


Solution().addBinary("111010", "0")
# assert Solution().addBinary("11", "1") == "100"
# assert Solution().addBinary("1010", "1011") == "10101"
