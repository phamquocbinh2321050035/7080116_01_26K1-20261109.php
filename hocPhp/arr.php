<?php
  /*
      BAI HOC: MANG 1 CHIEU VA MANG 2 CHIEU TRONG PHP

      1. Mang 1 chieu (Array)
      2. Mang ket hop (Associative Array)
      3. Mang 2 chieu
      4. Duyet mang bang for va foreach
      5. Them phan tu vao mang
      6. Bai tap: Quan ly diem sinh vien
  */

  // 1. MANG 1 CHIEU
  echo "<h2>1. Mang 1 chieu</h2>";

  $students = ["Binh", "Nam", "Hung", "An"];

  echo "Sinh vien dau tien: " . $students[0] . "<br>";
  echo "So sinh vien: " . count($students) . "<br>";

  // Them phan tu vao cuoi mang
  $students[] = "Minh";

  // Duyet mang bang for
  for ($i = 0; $i < count($students); $i++) {
      echo $i . " - " . $students[$i] . "<br>";
  }

  // Duyet mang bang foreach
  foreach ($students as $student) {
      echo $student . "<br>";
  }


  // 2. MANG KET HOP (ASSOCIATIVE ARRAY)
  echo "<h2>2. Mang ket hop</h2>";

  $student = [
      "name" => "Binh",
      "age" => 21,
      "score" => 8.5
  ];

  echo "Ho ten: " . $student["name"] . "<br>";
  echo "Tuoi: " . $student["age"] . "<br>";
  echo "Diem: " . $student["score"] . "<br>";

  // Duyet mang ket hop
  foreach ($student as $key => $value) {
      echo $key . ": " . $value . "<br>";
  }


  // 3. MANG 2 CHIEU
  echo "<h2>3. Mang 2 chieu</h2>";

  // Moi mang con gom: Ho ten, diem A, diem B, diem C
  $students2D = [
      ["Binh", 8, 7, 9],
      ["Nam", 6, 8, 7],
      ["Hung", 9, 9, 8]
  ];

  // Truy cap: ten_mang[chi_so_hang][chi_so_cot]
  echo "Ten sinh vien dau tien: " . $students2D[0][0] . "<br>";
  echo "Diem A cua Binh: " . $students2D[0][1] . "<br>";

  // Duyet mang 2 chieu bang hai vong lap for
  for ($i = 0; $i < count($students2D); $i++) {
      for ($j = 0; $j < count($students2D[$i]); $j++) {
          echo $students2D[$i][$j] . " ";
      }
      echo "<br>";
  }


  // 4. BAI TAP: QUAN LY DIEM SINH VIEN
  echo "<h2>4. Bai tap: Quan ly diem sinh vien</h2>";

  $students = [
      ["Binh", 8, 7, 9],
      ["Nam", 3, 4, 5],
      ["Hung", 9, 9, 8]
  ];

  echo "<table border='1' cellpadding='8' cellspacing='0'>";
  echo "<tr>
          <th>STT</th>
          <th>Ho va ten</th>
          <th>Diem A</th>
          <th>Diem B</th>
          <th>Diem C</th>
          <th>Diem trung binh</th>
          <th>Trang thai</th>
        </tr>";
?>        
