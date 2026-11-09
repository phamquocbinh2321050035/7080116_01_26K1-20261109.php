<?php
  [$a, $b, $c] = [8, 9, 10];
  $diemTB = (0.6*$a + 0.3*$b + 0.1*$c);
  echo "Điểm trung bình 3 môn là $diemTB";
  echo "<br>";
  $str1 = "Hello";
  var_dump($str1);
  echo "<br>";

  $arr = [3, 4, 5, "sáu"];
  var_dump($arr);
  echo "<br>";

  $sv = [
    0 => "STT",
    "MVS" => 2321050035,
    "Khoa" => "CNTT"
  ];
  print_r($sv);
  echo "<br>";

  echo gettype($c);
  echo "<br>";

  if(is_int($str1)) {
    echo "$str1 là số nguyên<br>";
  } else {
    echo "$str1 ko phải số nguyên<br>";
  }
  echo "$a<$b<br>";
  echo "$a>$b<br>";
?>
 