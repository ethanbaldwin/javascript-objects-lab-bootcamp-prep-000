var recipes = {big: 'boi'};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {[key]:value});
  return newObject;
}

function deleteFromObjectByKey(object, key) {
  
}

function  destructivelyDeleteFromObjectByKey(object, key) {
  object.delete(key);
}