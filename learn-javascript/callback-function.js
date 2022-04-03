function doHomeWork(subject, callback) {
  console.log(`Start ${subject} at homework`);
  callback()
}

doHomeWork('math', function() {
  console.log('Finished my homework')
})
// doHomeWork() // execute function