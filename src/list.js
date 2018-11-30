import React from "react";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: this.numbers
    };
  }
  render() {
    let listItems = numbers.map((numbers, i) => <li key={i}>{numbers}</li>);
    return <ul>{listItems}</ul>;
  }
}
export default List;
