import math

def to_zigzag(s, numRows):
  zigzag_len = 2*numRows - 2
  res_l = ["" for _ in s]
  
  for i in range(len(s)):
    if i % zigzag_len == 0: 
      # print(int(i / zigzag_len))
      # print(s[i])
      pass
    elif i % (zigzag_len - 1) == 0:
      print(s[i])
    
  pass


def test_zigzag():
    input_str = "PAYPALISHIRING"
    number_of_rows = 3
    expected_str = "PAHNAPLSIIGYIR"
    result_str = to_zigzag(input_str, number_of_rows)
    assert result_str == expected_str, "Expects strings to be equal"


test_zigzag()
