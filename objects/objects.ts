interface userInterface {
  name: string;
  id: number;
  isAdmin: boolean;
  login?(): void;
}
let user: userInterface = {
  name: "dave",
  id: 1,
  isAdmin: true,
  login() {},
};

user = {
  id: 2,
  isAdmin: false,
  name: "wilfred",
  login() {},
};
// explict casting
const anotherUser = <userInterface>{
  name: "garry",
  id: 3,
  isAdmin: false,
};
