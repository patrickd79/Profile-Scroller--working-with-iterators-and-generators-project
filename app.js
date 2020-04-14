//use ternary operators when possible to clean up code inplace of if else.
//example-- return (isMember ?(then) '$2.00' :(else) '$10.00')

const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "Male",
    lookingfor: "Female",
    location: "Boston, MA",
    image: "https://randomuser.me/api/portraits/lego/5.jpg"
  },
  {
    name: "Jenny Smith",
    age: 40,
    gender: "Female",
    lookingfor: "Male",
    location: "Oklahoma City, OK",
    image: "https://randomuser.me/api/portraits/women/20.jpg"
  },
  {
    name: "Willy Wonka",
    age: 50,
    gender: "Male",
    lookingfor: "Female",
    location: "Chicago, IL",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  }
];

const profiles = profileIterator(data);

//show  1st profile on page load
nextProfile();

//Next event
document.getElementById("next").addEventListener("click", nextProfile);

//Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById(
      "profileDisplay"
    ).innerHTML = `<ul class='list-group'>
    <li class='list-group-item'>Name: ${currentProfile.name}</li>
    <li class='list-group-item'>Age: ${currentProfile.age}</li>
    <li class='list-group-item'>Location: ${currentProfile.location}</li>
    <li class='list-group-item'>Preference: ${currentProfile.gender} looking for a ${currentProfile.lookingfor}</li>
    </ul>`;
    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src='${currentProfile.image}'>`;
  } else {
    window.location.reload();
  }
}

//Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      //if nextIndex is less than the profiles.length '?'(then) return a value object (profile at that index) done = false because it has more iteration to do also ':' = else
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
