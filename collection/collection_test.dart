import 'dart:developer';

///
/// List, Set, Map 비교
void main() {
  testSet(); //  SET  test End:: 0:00:00.008335
  testList(); // LIST Test End:: 0:00:00.003899
  testMap(); //  Map  Test End:: 0:00:00.001535
}

///
/// SET
void testSet() {
  var stopwatch = Stopwatch()..start();
  log('Set Test Start:: ');

  Set set1 = Set();
  set1.addAll({1, 2, 3, 4, 5});

  set1.add(1); // Set은 중복 불가능이라 삽입이 안됨
  set1.remove(1); // 1 제거
  set1.add(1); // 1이 더이상 중복이 아니라 삽입 가능.

  for (var e in set1) {
    // print("SET ${e}");
  }

  log("Set Test End:: ${stopwatch.elapsed}");
}

///
/// LIST
void testList() {
  var stopwatch = Stopwatch()..start();
  log('LIST Test Start:: ');

  List list1 = [];
  list1.addAll([1, 2, 3, 4, 5]);

  list1.add(1); // List 는 중복을 허용하기 떄문에 1이 있어도 삽입가능.
  list1.remove(1);
  list1.add(1);

  for (var e in list1) {
    // print("LIST ${e}");
  }

  log("LIST Test End:: ${stopwatch.elapsed}");

}

///
/// Map
void testMap() {
  var stopwatch = Stopwatch()..start();
  log('MAP Test Start:: ');

  Map map1 = {};
  map1.addAll({1: 1, 2: 2, 3: 3, 4: 4, 5: 5});

  map1[1] = 1;
  map1.remove(1);
  map1[1] = 1;


 
 map1.forEach((key, value) {
  // print(value);
 },);

  log("MAP Test End:: ${stopwatch.elapsed}");

}
