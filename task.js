const fetchDataButton = document.getElementById("fetchDataButton");
const apiDataContainer = document.getElementById("apiData");

async function fetchPosts() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=5";
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const posts = await response.json();

    apiDataContainer.innerHTML = "";

    const postList = document.createElement("ul");
    posts.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
      postList.appendChild(listItem);
    });

    apiDataContainer.appendChild(postList);
  } catch (error) {
    apiDataContainer.innerHTML = `<p style="color: red;">Error fetching data: ${error.message}</p>`;
  }
}

fetchDataButton.addEventListener("click", fetchPosts);
