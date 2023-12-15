// generic syntax

function printGeneric<T>(value: T) {
  console.log(value, typeof value);
}
// printGeneric(1);
// printGeneric("test");
// printGeneric(true);
// printGeneric({ id: 1 });
// printGeneric(() => {});
// printGeneric<string>("test");

// multiple generic types

function multipleGenerics<A, B>(first: A, second: B) {
  console.log(`${first}: ${typeof first}, ${second}: ${typeof second}`);
}

// multipleGenerics("hello", 12);
// multipleGenerics(true, () => {});
// multipleGenerics("okay", { name: "dave" });

// constraining the type of T
class concatenator<T extends Array<string> | Array<number>> {
  concatenateArray(items: T): string {
    let returingString = "";
    for (let i = 0; i < items.length; i++) {
      returingString += i > 0 ? "," : "";
      returingString += items[i].toString();
    }
    return returingString;
  }
}
let concator = new concatenator();
let concateResult = concator.concatenateArray(["first", "second", "third"]);
console.log(concateResult);
concateResult = concator.concatenateArray([1, 2, 3]);
console.log(concateResult);
