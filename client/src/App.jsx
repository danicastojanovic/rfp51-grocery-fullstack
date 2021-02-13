import React from 'react';
import GroceryItems from './GroceryItems.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      groceryItems: []
    };
    this.getData = this.getData.bind(this);
  }
  getData() {
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/GroceryList",
      success: (data) => {
        this.setState({
          groceryItems: data
        })
      }
    })
  }

  componentDidMount() {
    this.getData();
  }

  render () {
    return (
    <div>
      <div>
        <form>
          <label> Item
            <input name="item" value=""/>
          </label>
          <label> Quantity
            <input name="quantity" value=""/>
          </label>
          <button>Add Grocery</button>
        </form>
      </div>
      <ul className="groceries">
        {
          this.state.groceryItems.map(item => <GroceryItems item={item} key={item.groceryItem} />)
        }
      </ul>
    </div>
    )
  }
}

export default App;