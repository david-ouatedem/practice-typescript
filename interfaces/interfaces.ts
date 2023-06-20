interface someInterface {
  name: string
  id: number
  isTrue: boolean
}

const someObject: someInterface = {
  id:1,
  isTrue: true,
  name: 'william'
} 

type someType = keyof someInterface

function getProperties(key: someType, value: someInterface) {
  console.log(key, value);
  
}
getProperties('name', {name:'dave', id:5, isTrue:false})