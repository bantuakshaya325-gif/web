const books = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    price: "$18.99",
    description: "A moving story about second chances, regret, and the lives we could have lived.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Science",
    price: "$22.00",
    description: "Practical strategies for building better habits and creating sustainable change.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Classic",
    price: "$14.50",
    description: "A witty and elegant novel about love, class, and first impressions.",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    price: "$20.80",
    description: "An immersive fantasy epic of music, magic, and the legend of a wandering hero.",
    image:
      "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    price: "$19.99",
    description: "A sweeping overview of human civilization, culture, and the future of our species.",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    price: "$17.40",
    description: "An inspiring memoir about identity, resilience, and finding purpose.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    genre: "Science",
    price: "$16.75",
    description: "A survival thriller set on Mars, packed with wit, science, and determination.",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Biography",
    price: "$18.20",
    description: "An unforgettable memoir about self-discovery, education, and breaking barriers.",
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=900&q=80",
  },
];

const bookGrid = document.getElementById("bookGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let activeFilter = "all";

function renderBooks(items) {
  if (!bookGrid) return;

  bookGrid.innerHTML = items
    .map(
      (book) => `
        <article class="book-card-item">
          <div class="book-cover-item" style="background-image: linear-gradient(135deg, rgba(6,10,20,0.1), rgba(6,10,20,0.1)), url('${book.image}')"></div>
          <div class="meta">
            <span class="genre">${book.genre}</span>
            <span>★ 4.8</span>
          </div>
          <div>
            <h3>${book.title}</h3>
            <p>${book.author}</p>
          </div>
          <p>${book.description}</p>
          <div class="card-footer">
            <span class="price">${book.price}</span>
            <button class="reserve-btn">Reserve</button>
          </div>
        </article>
      `
    )
    .join("");
}

function getFilteredBooks() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  return books.filter((book) => {
    const matchesFilter = activeFilter === "all" || book.genre === activeFilter;
    const searchableText = `${book.title} ${book.author} ${book.genre}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });
}

function updateBooks() {
  renderBooks(getFilteredBooks());
}

searchInput.addEventListener("input", updateBooks);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    updateBooks();
  });
});

renderBooks(books);

