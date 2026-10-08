const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    price: "$18.99",
    rating: 4.9,
    description: "A moving story about second chances, regret, and the lives we could have lived.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Science",
    price: "$22.00",
    rating: 4.8,
    description: "Practical strategies for building better habits and creating sustainable change.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fiction",
    price: "$14.50",
    rating: 4.7,
    description: "A witty and elegant novel about love, class, and first impressions.",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    price: "$20.80",
    rating: 4.9,
    description: "An immersive fantasy epic of music, magic, and the legend of a wandering hero.",
    image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    price: "$19.99",
    rating: 4.6,
    description: "A sweeping overview of human civilization, culture, and the future of our species.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    price: "$17.40",
    rating: 4.8,
    description: "An inspiring memoir about identity, resilience, and finding purpose.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "The Martian",
    author: "Andy Weir",
    genre: "Science",
    price: "$16.75",
    rating: 4.9,
    description: "A survival thriller set on Mars, packed with wit, science, and determination.",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "Educated",
    author: "Tara Westover",
    genre: "Biography",
    price: "$18.20",
    rating: 4.8,
    description: "An unforgettable memoir about self-discovery, education, and breaking barriers.",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Fantasy",
    price: "$21.50",
    rating: 4.7,
    description: "An epic science fiction novel of politics, power, and an unforgettable universe.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    price: "$15.99",
    rating: 4.6,
    description: "A timeless tale of wealth, love, and the American Dream in the Jazz Age.",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Science",
    price: "$20.00",
    rating: 4.5,
    description: "Insights into the psychology of decision-making and human behavior.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    price: "$19.00",
    rating: 4.4,
    description: "From the Big Bang to Black Holes - understanding the universe's greatest mysteries.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 13,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    price: "$17.80",
    rating: 4.9,
    description: "A thrilling adventure of a hobbit, dwarves, and dragons in Middle Earth.",
    image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 14,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    genre: "Biography",
    price: "$19.99",
    rating: 4.7,
    description: "The exclusive biography of the Apple founder and technological visionary.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 15,
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    price: "$16.00",
    rating: 4.6,
    description: "A dystopian masterpiece exploring totalitarianism and individual freedom.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 16,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    genre: "Science",
    price: "$18.50",
    rating: 4.5,
    description: "A revolutionary look at evolution and what really drives all living things.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 17,
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: "Fiction",
    price: "$17.99",
    rating: 4.8,
    description: "A poignant story set in Nazi Germany narrated by Death itself.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 18,
    title: "Educated",
    author: "Tara Westover",
    genre: "Biography",
    price: "$18.20",
    rating: 4.9,
    description: "A powerful memoir of survival, education, and breaking free from isolation.",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 19,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Fiction",
    price: "$18.99",
    rating: 4.7,
    description: "A psychological thriller about a woman who refuses to speak after a murder.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 20,
    title: "Cosmos",
    author: "Carl Sagan",
    genre: "Science",
    price: "$21.00",
    rating: 4.9,
    description: "A journey through space and time exploring the universe and human connection.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
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
            <span>★ ${book.rating}</span>
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

if (searchInput) {
  searchInput.addEventListener("input", updateBooks);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    updateBooks();
  });
});

// Initial render
renderBooks(books);
