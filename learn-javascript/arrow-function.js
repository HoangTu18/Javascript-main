const cars = {
  color: 'red',
  model: 'honda',
  showKey() {
    console.log(this.color)
  },
  anotherKey: () => {
    
    console.log('another key: ', this.abc)
  }
}
cars.showKey()
cars.anotherKey()