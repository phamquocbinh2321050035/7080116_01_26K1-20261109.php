// Trong JavaScript, String là kiểu dữ liệu dùng để biểu diễn chuỗi ký tự. Chuỗi có thể bao gồm chữ cái, chữ số, khoảng trắng, ký tự đặc biệt hoặc tổ hợp của nhiều thành phần trên. Về bản chất, chuỗi là một dãy các ký tự được đặt trong dấu nháy đơn ('...'), dấu nháy kép ("...") hoặc dấu backtick (`...`). Dấu backtick còn cho phép biểu diễn chuỗi nhiều dòng và nhúng biểu thức bằng cú pháp template literal.
// Kiểu dữ liệu String giữ vai trò nền tảng trong JavaScript, đặc biệt trong các bài toán xử lý văn bản, nhập liệu và giao tiếp người dùng. Việc nắm vững các thuộc tính và phương thức như length, toUpperCase(), trim(), slice(), indexOf(), replace(), split() và padStart() là điều cần thiết để lập trình hiệu quả và viết mã rõ ràng, dễ bảo trì.
// 1)	Đặc điểm cơ bản của String
// Chuỗi trong JavaScript là bất biến. Điều này có nghĩa là sau khi một chuỗi đã được tạo ra, các phương thức xử lý chuỗi không làm thay đổi trực tiếp chuỗi gốc mà thường tạo ra một chuỗi mới. Đây là đặc điểm quan trọng cần ghi nhớ khi thao tác với String.
// Ví dụ 4 30 Minh hoạ tính bất biến của String
let s = "Hello";
let t = s.toUpperCase();
console.log(s); // Hello
console.log(t); // HELLO
// Ở đây, s không bị thay đổi; phương thức toUpperCase() tạo ra một chuỗi t mới.
// 2)	Thuộc tính length
// Thuộc tính length trả về số lượng ký tự trong chuỗi, bao gồm cả khoảng trắng và ký tự đặc biệt. Ứng dụng của length thường gặp trong kiểm tra độ dài mật khẩu, tên người dùng, hoặc giới hạn dữ liệu nhập.
// Ví dụ 4 31 Minh hoạ sử dụng length của một chuỗi
let str1 = "JavaScript";
console.log(str1.length); // 10
//Kiểm tra độ dài mật khẩu
let password = "abc12345";
if (password.length >= 8) {
    console.log("Mật khẩu hợp lệ");
}
// 3)	Thuộc tính constructor
// Thuộc tính constructor trả về hàm khởi tạo của đối tượng chuỗi. Thuộc tính này ít dùng trong lập trình ứng dụng thông thường, nhưng có ý nghĩa trong tìm hiểu cấu trúc đối tượng.
// Ví dụ 4 32 Minh hoạ sử dụng constructor để tìm hiểu cấu trúc của string
let str2 = "Hello";
console.log(str2.constructor); // function String() { [native code] }
// 4)	Các phương thức xử lý chuỗi thường dùng
// - Phương thức toUpperCase()
// Phương thức này chuyển toàn bộ chuỗi thành chữ hoa.
// Ví dụ 4 33 Minh hoạ sử dụng phương thức toUpperCase
let ten1 = "nguyen van a";
console.log(ten1.toUpperCase()); // "NGUYEN VAN A"
// 5)	Phương thức toLowerCase()
// Phương thức này chuyển toàn bộ chuỗi thành chữ thường.
// Ví dụ 4 34 Minh hoạ sử dụng phương thức toLowerCase
let ten2 = "Nguyen Van A";
console.log(ten2.toLowerCase()); // "nguyen van a"
// 6)	Phương thức trim()
// Phương thức trim() loại bỏ khoảng trắng ở đầu và cuối chuỗi. Phương thức này rất hữu ích khi xử lý dữ liệu người dùng nhập vào từ form.
// Ví dụ 4 35 Minh hoạ sử dụng phương thức trim
let input = "   JavaScript   ";
console.log(input.trim()); // "JavaScript"
// 7)	Phương thức slice(start, end)
// slice() trích xuất một phần chuỗi từ vị trí start đến trước vị trí end. Phương thức này thường dùng khi cắt tên, mã số, hoặc tách thông tin từ chuỗi dài.
// Ví dụ 4 36 Minh hoạ sử dụng phương thức slice
let text1 = "JavaScript";
console.log(text1.slice(0, 4)); // "Java"
console.log(text1.slice(4));    // "Script"
// 8)	Phương thức substring(start, end)
// substring() tương tự slice(), nhưng xử lý chỉ số âm khác với slice() và thường được dùng để cắt một đoạn con trong chuỗi.
// Ví dụ 4 37 Minh hoạ sử dụng phương thức substring
let text2 = "JavaScript";
console.log(text2.substring(0, 4)); // "Java"
// 9)	Phương thức substr(start, length)
// substr() lấy chuỗi con bắt đầu từ vị trí start với độ dài xác định. Tuy nhiên, đây là phương thức cũ và ít được khuyến khích hơn trong các tài liệu hiện đại.
// Ví dụ 4 38 Minh hoạ sử dụng phương thức substr
let text3 = "Apple, Banana, Kiwi";
console.log(text3.substr(7, 6)); // "Banana"
// 10)	Phương thức charAt(index)
// Phương thức charAt() trả về ký tự tại vị trí chỉ định của chuỗi. Chú ý, trong một chuỗi vị trí ký tự tính từ số 0.
// Ví dụ 4 39 Minh hoạ sử dụng phương thức charAt
let text4 = "JavaScript";
console.log(text4.charAt(0)); // "J"
console.log(text4.charAt(4)); // "S"
// 11)	Truy cập đến ký tự trong chuỗi bằng chỉ số []
// Ta cũng có thể truy cập trực tiếp một ký tự thông qua chỉ số.
// Ví dụ 4 40 Minh hoạ cách sử dụng chỉ số [] trong chuỗi
let text5 = "JavaScript";
console.log(text5[0]); // "J"
console.log(text5[4]); // "S"
// 12)	Phương thức indexOf()
// Phương thức indexOf() tìm vị trí xuất hiện đầu tiên của một chuỗi con trong chuỗi lớn. Nếu không tìm thấy, phương thức trả về -1.
// Ví dụ 4 41 Minh hoạ cách sử dụng phương thức indexOf
let text6 = "I love JavaScript";
console.log(text6.indexOf("Java")); 		// 7
console.log(text6.indexOf("Python")); 	// -1
// 13)	Phương thức lastIndexOf()
// Phương thức này tìm vị trí xuất hiện cuối cùng của một chuỗi con trong một chuỗi lớn. Nếu không tìm thấy, phương thức trả về -1.
// Ví dụ 4 42 Minh hoạ cách sử dụng phương thức lastIndexOf
let text7 = "banana";
console.log(text7.lastIndexOf("a")); // 5
// 14)	Phương thức includes()
// Phương thức includes() kiểm tra chuỗi có chứa một chuỗi con hay không.
// Ví dụ 4 43 Minh hoạ cách sử dụng phương thức includes
let text8 = "Hello JavaScript";
console.log(text8.includes("Java")); // true
console.log(text8.includes("Python")); // false
// 15)	Phương thức startsWith()
// Phương thức này kiểm tra chuỗi có bắt đầu bằng một chuỗi con nhất định hay không. Kết quả trả về giá trị true hoặc false.
// Ví dụ 4 44 Minh hoạ cách sử dụng phương thức startsWith
let fileName1 = "report.pdf";
console.log(fileName1.startsWith("report")); // true
console.log(fileName1.startsWith("Report")); // false
// 16)	Phương thức endsWith()
// Phương thức này kiểm tra chuỗi có kết thúc bằng chuỗi con cho trước hay không. Kết quả trả về giá trị true hoặc false.
// Ví dụ 4 45 Minh hoạ cách sử dụng phương thức endsWith
let fileName2 = "report.pdf";
console.log(fileName2.endsWith(".pdf")); // true
console.log(fileName2.startsWith("docx")); // false
// 17)	Phương thức replace()
// Phương thức replace() thay thế một phần chuỗi bằng chuỗi khác.
// Ví dụ 4 46 Minh hoạ cách sử dụng phương thức replace
let text9 = "I like JavaScript";
console.log(text9.replace("JavaScript", "HTML")); // "I like HTML"
// 18)	Phương thức concat()
// Ngoài cách sử dụng toán tử + để nối các chuỗi, ta cũng có thể sử dụng phương thức concat() để nối chuỗi với các biến hoặc giá trị có sẵn.
// Ví dụ 4 47 Minh hoạ cách sử dụng phương thức concat
let s1 = "Hello";
let s2 = "World";
console.log(s1.concat(" ", s2)); // "Hello World"
console.log(s1.concat(" ", s2, " ", 2)); // "Hello World 2"
// 19)	Phương thức split()
// Phương thức split() giúp tách chuỗi thành một mảng theo ký tự phân tách. Đây là một trong các phương thức rất quan trọng khi xử lý dữ liệu dạng văn bản.
// Ví dụ 4 48 Minh hoạ cách sử dụng phương thức split trong bài toán đếm số từ trong một câu
let sentence = "Học lập trình JavaScript rất thú vị";
let words = sentence.split(" ");
let wordCount = words.length;
console.log(words);      // ["Học", "lập", "trình", "JavaScript", "rất", "thú", "vị"]
console.log(wordCount);  // 7
// 20)	Phương thức repeat(n)
// Phương thức repeat() cho phép lặp lại chuỗi n lần.
// Ví dụ 4 49 Minh hoạ cách sử dụng phương thức repeat
let s3 = "ha";
console.log(s3.repeat(3)); // "hahaha"
// 21)	Phương thức padStart() và padEnd()
// Hai phương thức này dùng để thêm ký tự vào đầu hoặc cuối chuỗi cho đến khi đạt độ dài mong muốn.
// Ví dụ 4 50 Minh hoạ cách sử dụng phương thức padStart() và padEnd()
let code = "7";
console.log(code.padStart(3, "0")); // "007"
console.log(code.padEnd(3, "0"));    // "700"