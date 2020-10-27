export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM'

export function addItem(listName,itemName) {
  return { type: ADD_ITEM, listName: listName, itemName: itemName };
}

export function removeItem(listName,itemName) {
  return { type: REMOVE_ITEM, listName: listName, itemName: itemName };
}