interface Friend {
    name: string,
    age?: number // ? allows the key "age" to be optional
}

const firstFriend: Friend = {
    name: 'Killian',
    age: 21
}

const secondFriend: Friend = {
    name: 'Katharine',
    age: 19
}

const myFriends: Array<Object> = [
    firstFriend,
    secondFriend
] 

// console.log('FIRST NAME', firstFriend);
// console.log('SECOND FRIEND', secondFriend);
// console.log('ARRAY OF FRIENDS', myFriends);

const friendsNames: Array<String> = myFriends.map((friend: any) => {
    return friend.name;
});

console.log('friendsNames', friendsNames);