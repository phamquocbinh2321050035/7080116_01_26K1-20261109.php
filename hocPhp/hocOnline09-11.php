<?php

  /*
      Sử dụng Array để khai báo mảng 2 chiều gồm 10 sinh viên có
      điểm số A, B, C của môn WAD.
      Xét điểm của môn xem bạn nào trượt, bạn nào qua (sử dụng if để
      tính toán trạng thái).
      Sử dụng Bảng kết hợp với Array để đưa thông tin các sinh viên
      đã khai báo ra màn hình.
      STT      Họ và tên          A    B    C    Điểm môn    Trạng thái
      1        Nguyễn Văn A       3    3    3    3           Trượt
      2        Nguyễn Văn B       9    9    9    9           Qua
  */

  //Ép kiểu, kiểm tra kiểu trong php
  //Các kiểu: (int), (integer), (real), (double), (float),
  //(string), (array), (object), (bool), (boolean), (unset)/null

  $x = "123213123sdfdsf";
  echo "$x có Kiểu dữ liệu là ".gettype($x);
  $x = (int) $x;
  echo "<br>$x có Kiểu dữ liệu là ".gettype($x);
  $x = (string) $x;
  echo "<br>$x có Kiểu dữ liệu là ".gettype($x);
  //$x = (bool) $x;
  echo "<br>$x có Kiểu dữ liệu là ".gettype($x);
  //unset($x);
  echo "<br>Biến \$x là kiểu int:".is_int($x);
  echo "<br>Biến \$x là kiểu số thực:".is_float($x);
  echo "<br>Biến \$x là kiểu chuỗi:".is_string($x);
  echo "<br>Biến \$x là kiểu mảng:".is_array($x);
  echo "<br>Biến \$x là kiểu đối tượng:".is_object($x);
  echo "<br>Biến \$x là kiểu logic:".is_bool($x);
  echo "<br>Biến \$x là kiểu NULL:".is_null($x);

  //+, -, *, /, %, ++, --, .
  //AND (&&), OR (||), NOT (!), XOR
  //T XOR T = F; F XOR F = F; T XOR F = T
  //Xếp phòng trong khách sạn (Trước thời công nhận LGBT).
  $gt1 = false; //Nữ
  $gt2 = false; //Nữ

  if($gt1 XOR $gt2){
      echo "<br>2 bạn được phép ở chung phòng<br>";
  }else{
      echo "<br>2 bạn không được ở chung phòng<br>";
  }

  //BIỂU THỨC LOGIC?Giá trị đúng:Giá trị sai;
  $diem = 3;
  echo ($diem >=4)?"<br>Bạn được $diem, bạn đã qua môn":"<br>Bạn được $diem, bạn đã trượt môn";

  //Random trong PHP
  $diem = rand(); //Trả về điểm là số Nguyên ngẫu nhiên
  $diem = rand(0,1000); //Trả về điểm là số Nguyên từ 0 -> 1000
  $diem /=100;//Trả về 0->10, lẻ 2 số sau dấu .

  //Mersenne Twister Random là cải biến của Random, sinh số nhanh hơn, phân phối đều hơn
  $diem = mt_rand(); //Trả về điểm là số Nguyên ngẫu nhiên
  $diem = mt_rand(0,1000); //Trả về điểm là số Nguyên từ 0 -> 1000
  $diem /=100;//Trả về 0->10, lẻ 2 số sau dấu .

  echo ($diem >=4)?"<br>Bạn được $diem, bạn đã qua môn":"<br>Bạn được $diem, bạn đã trượt môn";

  $otp = random_int(100000,999999);//Lấy OTP 6 ký tự số
  echo "<br>OTP: $otp";

  $arr = ['A','B','C','D','E','F'];
  $arrRand = array_rand($arr);
  $arrRand2 = array_rand($arr,2);

  echo "Array Rand 2: {$arr[$arrRand2[0]]}{$arr[$arrRand2[1]]}";
  echo "Array Rand: {$arr[$arrRand]}";
  $engWord = "Hello";
  echo "<br>Hãy sắp xếp lại chuỗi sau thành từ có nghĩa:".str_shuffle($engWord);

	/*Khai báo 3 mảng lưu Họ, Đệm, Tên.
  Khai báo mảng 2 chiều gồm 10 sinh viên có Họ và tên Ngẫu nhiên, điểm số A, B, C (ngẫu nhiên) của môn WAD.
	Xét điểm của môn xem bạn nào trượt, bạn nào qua (sử dụng if, else... để tính toán Điểm chữ).
	Sử dụng Bảng kết hợp với Array để đưa thông tin các sinh viên đã khai báo ra màn hình.
	STT		Họ và tên		A	B	C	Điểm môn	Điểm chữ
	1		Nguyễn Văn An	3	3	3	3			F
	2		Bùi Thị Bình	9	9	9	9			A+
  */

  
  $ho = ["Nguyen", "Tran", "Le", "Pham", "Hoang", "Bui", "Do", "Vu"];
  $dem = ["Van", "Thi", "Huu", "Minh", "Quoc", "Ngoc"];
  $ten = ["An", "Binh", "Nam", "Hung", "Linh", "Hoa", "Tuan", "Mai", "Long", "Ha"];

  $students = [];

  for ($i = 0; $i < 10; $i++) {
      $fullName = $ho[array_rand($ho)] . " "
                . $dem[array_rand($dem)] . " "
                . $ten[array_rand($ten)];

      $A = random_int(0, 100) / 10;
      $B = random_int(0, 100) / 10;
      $C = random_int(0, 100) / 10;

      $gpa = $A*0.6 + $B*0.3 +$C*0.1;

      if ($gpa >= 9) {
          $grade = "A+";
      } elseif ($gpa >= 8) {
          $grade = "A";
      } elseif ($gpa >= 7) {
          $grade = "B";
      } elseif ($gpa >= 6) {
          $grade = "C";
      } elseif ($gpa >= 5) {
          $grade = "D";
      } elseif ($gpa >= 4) {
          $grade = "D-";
      } else {
          $grade = "F";
      }

      $students[] = [
          "name" => $fullName,
          "A" => $A,
          "B" => $B,
          "C" => $C,
          "gpa" => $gpa,
          "grade" => $grade
      ];
  }

  echo "<h2>Bang diem sinh vien mon WAD</h2>";

  echo "<table border='1' cellpadding='8' cellspacing='0'>";

  echo "<tr>
          <th>STT</th>
          <th>Ho va ten</th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>Diem mon</th>
          <th>Diem chu</th>
        </tr>";

  foreach ($students as $index => $student) {
      echo "<tr>";
      echo "<td>" . ($index + 1) . "</td>";
      echo "<td>" . $student["name"] . "</td>";
      echo "<td>" . $student["A"] . "</td>";
      echo "<td>" . $student["B"] . "</td>";
      echo "<td>" . $student["C"] . "</td>";
      echo "<td>" . number_format($student["gpa"], 2) . "</td>";
      echo "<td>" . $student["grade"] . "</td>";
      echo "</tr>";
  }

  echo "</table>";

?>