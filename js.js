const currentlyReadingBox = document.getElementById("currentlyReading");
const read2022Box = document.getElementById("read2022");
async function fetchFromWorkers(type) {
  const url = `https://books.zanewiki.workers.dev/${type}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error };
  }
}

async function getData() {
  const currentlyReading = await fetchFromWorkers("currently-reading");
  const read2022 = await fetchFromWorkers("read-2022");
  mapBooks(currentlyReading.items, currentlyReadingBox);
  mapBooks(read2022.items, read2022Box);
}

getData();

function mapBooks(bookList, container) {
  bookList.map((book) => {
    const bookID = book.id;
    const link = document.createElement("a");
    link.href = book.volumeInfo.infoLink;
    const thumbnail = document.createElement("img");
    thumbnail.classList.add("thumbnail");
    thumbnail.src = `https://books.google.com/books/content?id=${bookID}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
    link.appendChild(thumbnail);
    container.appendChild(link);
  });
}
