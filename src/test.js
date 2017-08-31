var ListItem = React.createClass({
  onClickCheckbox: function(event) {
    this.props.checkedCallback(this.props.index, event.target.checked)
  },
  onClickDelete: function() {
    this.props.deleteCallback(this.props.index)
  },
  render: function() {
    return (
      <li><input type="checkbox" checked={this.props.checked} onClick={this.onClickCheckbox} />
      {this.props.label}
      <a href="#" onClick={this.onClickDelete}>X</a>
      </li>
    )
  }
});
var List = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.listData.map(function(item, index) {
         return (
          <ListItem checked={item.checked} label={item.label} checkedCallback={this.props.checkedCallback} index={index} deleteCallback={this.props.deleteCallback} />
         )
        }, this)}
      </ul>
    )
  }
})
var ItemInput = React.createClass({
  getInitialState: function() {
    return {value: ''}
  },
  handleChange: function(event) {
    this.setState({value: event.target.value})
  },
  handleClick: function() {
    this.props.addItemCallback(this.state.value)
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add Item</button>
      </div>
    )
  }
})
var App = React.createClass({
  getInitialState: function() {
    return ({listData: [{label: "Milk", checked: true},{label: "Cereal", checked: false},{label: "Cookies", checked: false}]})
  },
  addItem: function(value) {
    var item = {label: value, checked: false}
    this.setState({listData: this.state.listData.concat([item])})
  },
  componentDidMount: function() {
    this.addItem("Coffee")
    this.toggleItem(2, true)
  },
  toggleItem: function(index, checked) {
    var listData = this.state.listData;
    var listItem = listData[index];
    listItem.checked = checked;
    this.forceUpdate();
  },
  deleteItem: function(index) {
    var listData = this.state.listData;
    var listItem = listData[index];
    listData = listData.slice(0, index).concat(listData.slice(index + 1));
    this.setState({listData: listData})
  },
  render: function() {
    return (
      <div>
        <ItemInput addItemCallback={this.addItem} />
        <List listData={this.state.listData} checkedCallback={this.toggleItem} deleteCallback={this.deleteItem} />
      </div>
    )
  }
})
ReactDOM.render(
  <App />,
  document.getElementById("app")
);