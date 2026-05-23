// Book data generation
const categories = ['Novel', 'Self Help', 'History', 'Comics', 'Fiction', 'Non-Fiction'];
const languages = ['English', 'Kannada', 'Hindi'];

const sampleTitles = {
    English: [
        'The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice', 'The Catcher in the Rye',
        'Harry Potter and the Philosopher\'s Stone', 'The Lord of the Rings', 'The Alchemist', 'Sapiens', 'Atomic Habits',
        'The Subtle Art of Not Giving a F*ck', 'Educated', 'Becoming', 'The Midnight Library', 'Circe',
        'Dune', 'Neuromancer', 'The Hitchhiker\'s Guide to the Galaxy', 'Ender\'s Game', 'Foundation',
        'The Name of the Wind', 'American Gods', 'Good Omens', 'The Ocean at the End of the Lane', 'Stardust',
        'Watchmen', 'The Sandman', 'Batman: The Killing Joke', 'Spider-Man: Blue', 'X-Men: Dark Phoenix Saga',
        'The History of Ancient Rome', 'Guns, Germs, and Steel', 'The Wright Brothers', 'The Silk Roads', 'Empire of Pain',
        'The Diary of a Young Girl', 'Night', 'The Hiding Place', 'Long Walk to Freedom', 'I Know Why the Caged Bird Sings'
    ],
    Kannada: [
        'Mookajjiya Kanasugalu', 'Samskara', 'Chomana Dudi', 'Vamshavruksha', 'Tabbaliyu Neenade Magane',
        'Kannada Sahitya Charitre', 'Ramayana Darshanam', 'Mahabharata Tatparya Nirnaya', 'Shatavadhani Ganesh',
        'Karnataka Itihasa', 'Jeevana Mukti', 'Manushya Mathu', 'Nanna Rashtriya Jeevana', 'Kannada Kavi Kavya',
        'Bharata Darshana', 'Siddhartha', 'Gandhi Jeevana', 'Ambedkar Jeevana', 'Tagore Kavya', 'Kuvempu Kriti'
    ],
    Hindi: [
        'Ramayana', 'Mahabharata', 'Geetanjali', 'Godaan', 'Saraswati Chandra',
        'Devdas', 'Gaban', 'Karma', 'Pinjar', 'Tamas',
        'Raja Harishchandra', 'Bharat Durdasha', 'Uttar Ramcharit', 'Malavikagnimitram', 'Shakuntala',
        'Chandrakanta', 'Durgesh Nandini', 'Raj Singh', 'Indumati', 'Vijayendra Vijay'
    ]
};

const sampleAuthors = {
    English: [
        'F. Scott Fitzgerald', 'Harper Lee', 'George Orwell', 'Jane Austen', 'J.D. Salinger',
        'J.K. Rowling', 'J.R.R. Tolkien', 'Paulo Coelho', 'Yuval Noah Harari', 'James Clear',
        'Mark Manson', 'Tara Westover', 'Michelle Obama', 'Matt Haig', 'Madeline Miller',
        'Frank Herbert', 'William Gibson', 'Douglas Adams', 'Orson Scott Card', 'Isaac Asimov',
        'Patrick Rothfuss', 'Neil Gaiman', 'Terry Pratchett', 'Neil Gaiman', 'Neil Gaiman',
        'Alan Moore', 'Neil Gaiman', 'Alan Moore', 'Jeph Loeb', 'Chris Bachalo',
        'Michael Grant', 'Jared Diamond', 'David McCullough', 'Peter Frankopan', 'Patrick Radden Keefe',
        'Anne Frank', 'Elie Wiesel', 'Corrie ten Boom', 'Nelson Mandela', 'Maya Angelou'
    ],
    Kannada: [
        'Shivarama Karanth', 'U.R. Ananthamurthy', 'K. Shivaram Karanth', 'S.L. Bhyrappa', 'T.R. Subba Rao',
        'D.V. Gundappa', 'Masti Venkatesha Iyengar', 'D.V. Gundappa', 'R. Narasimhachar', 'P. T. Narasimhachar',
        'Vinayak Krishna Gokak', 'A.N. Krishna Rao', 'K. Kamaraju', 'G.P. Rajarathnam', 'B.M. Srikantaiah',
        'Rabindranath Tagore', 'Mahatma Gandhi', 'B.R. Ambedkar', 'Rabindranath Tagore', 'Kuvempu'
    ],
    Hindi: [
        'Valmiki', 'Vyasa', 'Rabindranath Tagore', 'Munshi Premchand', 'Bankim Chandra Chattopadhyay',
        'Sarat Chandra Chattopadhyay', 'Jainendra Kumar', 'Acharya Kripalani', 'Amrita Pritam', 'Bhisham Sahni',
        'Raja Harishchandra', 'Bharatendu Harishchandra', 'Bhavabhuti', 'Kalidasa', 'Kalidasa',
        'Devaki Nandan Khatri', 'Bankim Chandra Chattopadhyay', 'Raja Harishchandra', 'Raja Harishchandra', 'Devaki Nandan Khatri'
    ]
};

const sampleDescriptions = [
    'A timeless classic exploring themes of love, wealth, and the American Dream.',
    'A powerful story of racial injustice and moral growth in the American South.',
    'A dystopian novel about totalitarianism and surveillance.',
    'A romantic tale of manners and marriage in 19th-century England.',
    'A coming-of-age story of teenage angst and alienation.',
    'A magical adventure of a young wizard discovering his destiny.',
    'An epic fantasy journey through Middle-earth.',
    'A philosophical tale of following one\'s dreams.',
    'A sweeping history of humankind from the Stone Age to the modern age.',
    'A guide to building good habits and breaking bad ones.',
    'A counterintuitive approach to living a good life.',
    'A memoir of education and resilience.',
    'The story of a remarkable life and leadership.',
    'A novel about the infinite possibilities of life.',
    'A retelling of the myth of Circe from Greek mythology.',
    'A science fiction epic set on the desert planet Arrakis.',
    'A cyberpunk novel exploring artificial intelligence and virtual reality.',
    'A comedic science fiction adventure across the galaxy.',
    'A military science fiction story of strategy and survival.',
    'A science fiction series about the fall and rise of galactic empires.',
    'A fantasy novel about a gifted young musician.',
    'A modern fantasy about gods walking among us.',
    'A humorous fantasy about the end of the world.',
    'A magical realism story of childhood wonder.',
    'A fairy tale for adults about love and adventure.',
    'A graphic novel exploring the nature of heroism.',
    'A comic book series about dreams and mythology.',
    'A dark tale of Batman confronting the Joker.',
    'A Spider-Man story exploring themes of heroism.',
    'The epic conclusion to the Dark Phoenix storyline.',
    'A comprehensive history of ancient Rome.',
    'An exploration of why some societies succeed and others fail.',
    'The story of the Wright brothers and the invention of flight.',
    'A history of the world through the lens of trade routes.',
    'An investigation into the Sackler family and the opioid crisis.',
    'The diary of a young girl hiding from the Nazis.',
    'A memoir of survival in Nazi concentration camps.',
    'A story of faith and forgiveness during the Holocaust.',
    'The autobiography of Nelson Mandela.',
    'A memoir of racism, identity, and self-discovery.',
    'A Kannada literary work exploring rural life and traditions.',
    'A novel dealing with caste and ritual in Indian society.',
    'A story of a shepherd boy\'s quest for treasure.',
    'A family saga exploring Indian culture and values.',
    'A collection of Kannada literary criticism.',
    'An interpretation of the Ramayana epic.',
    'A commentary on the Mahabharata.',
    'The biography of a legendary storyteller.',
    'A history of Karnataka state.',
    'A philosophical work on human liberation.',
    'A study of human nature and society.',
    'A patriotic narrative of national life.',
    'A collection of Kannada poetry and literature.',
    'A philosophical view of Indian civilization.',
    'The life story of Mahatma Gandhi.',
    'The biography of B.R. Ambedkar.',
    'Tagore\'s poetic works.',
    'The literary works of Kuvempu.',
    'The ancient Indian epic of Ramayana.',
    'The great Indian epic of Mahabharata.',
    'Tagore\'s collection of poems.',
    'A classic Hindi novel about rural India.',
    'A historical novel set in ancient India.',
    'A tragic love story.',
    'A novel about social reform.',
    'A story of partition and its aftermath.',
    'A novel about the 1947 partition.',
    'A play about King Harishchandra.',
    'A work on India\'s misfortunes.',
    'A Sanskrit drama about love and politics.',
    'Kalidasa\'s famous play.',
    'A fantasy adventure in Hindi.',
    'A historical novel about Bengal.',
    'A tale of kings and warriors.',
    'A story of love and adventure.',
    'An epic tale of victory and valor.'
];

let books = [];
let currentFilter = { category: null, language: null };
let searchQuery = '';

// Generate books
function generateBooks() {
    books = [];
    for (let i = 1; i <= 120; i++) {
        const language = languages[Math.floor(Math.random() * languages.length)];
        const category = categories[Math.floor(Math.random() * categories.length)];
        const titleIndex = Math.floor(Math.random() * sampleTitles[language].length);
        const authorIndex = Math.floor(Math.random() * sampleAuthors[language].length);
        const descriptionIndex = Math.floor(Math.random() * sampleDescriptions.length);
        const year = Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900;

        books.push({
            id: i,
            title: sampleTitles[language][titleIndex],
            author: sampleAuthors[language][authorIndex],
            category: category,
            language: language,
            year: year,
            description: sampleDescriptions[descriptionIndex]
        });
    }
}

// DOM elements
const contentArea = document.getElementById('content-area');
const searchInput = document.getElementById('search-input');
const randomSuggestBtn = document.getElementById('random-suggest');
const modal = document.getElementById('book-modal');
const closeModal = document.querySelector('.close');

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    generateBooks();
    renderDashboard();
    setupEventListeners();
});

function setupEventListeners() {
    // Sidebar links
    document.getElementById('dashboard-link').addEventListener('click', (e) => {
        e.preventDefault();
        setActiveLink(e.target);
        renderDashboard();
    });

    document.getElementById('add-book-link').addEventListener('click', (e) => {
        e.preventDefault();
        setActiveLink(e.target);
        renderAddBookForm();
    });

    // Categories
    document.querySelectorAll('#categories-submenu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;
            currentFilter.category = category;
            currentFilter.language = null;
            highlightFilter('category', category);
            renderBooks();
        });
    });

    // Languages
    document.querySelectorAll('#languages-submenu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const language = e.target.dataset.language;
            currentFilter.language = language;
            currentFilter.category = null;
            highlightFilter('language', language);
            renderBooks();
        });
    });

    // Search
    searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value.toLowerCase();
        renderBooks();
    });

    // Random suggest
    randomSuggestBtn.addEventListener('click', () => {
        const filteredBooks = getFilteredBooks();
        if (filteredBooks.length > 0) {
            const randomBook = filteredBooks[Math.floor(Math.random() * filteredBooks.length)];
            showBookDetails(randomBook);
        }
    });

    // Modal close
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Toggle submenus
    document.getElementById('categories-link').addEventListener('click', (e) => {
        e.preventDefault();
        toggleSubmenu('categories-submenu');
    });

    document.getElementById('languages-link').addEventListener('click', (e) => {
        e.preventDefault();
        toggleSubmenu('languages-submenu');
    });
}

function setActiveLink(link) {
    document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    currentFilter = { category: null, language: null };
    searchQuery = '';
    searchInput.value = '';
    document.querySelectorAll('#categories-submenu a, #languages-submenu a').forEach(a => a.classList.remove('active'));
}

function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function highlightFilter(type, value) {
    document.querySelectorAll(`#${type}s-submenu a`).forEach(a => {
        if (a.dataset[type] === value) {
            a.classList.add('active');
        } else {
            a.classList.remove('active');
        }
    });
}

function getFilteredBooks() {
    return books.filter(book => {
        const matchesCategory = !currentFilter.category || book.category === currentFilter.category;
        const matchesLanguage = !currentFilter.language || book.language === currentFilter.language;
        const matchesSearch = !searchQuery ||
            book.title.toLowerCase().includes(searchQuery) ||
            book.author.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesLanguage && matchesSearch;
    });
}

function renderDashboard() {
    const totalBooks = books.length;
    const booksByCategory = categories.map(cat => ({
        category: cat,
        count: books.filter(b => b.category === cat).length
    }));
    const booksByLanguage = languages.map(lang => ({
        language: lang,
        count: books.filter(b => b.language === lang).length
    }));

    contentArea.innerHTML = `
        <div class="dashboard">
            <div class="stat-card">
                <h3>${totalBooks}</h3>
                <p>Total Books</p>
            </div>
            ${booksByCategory.map(stat => `
                <div class="stat-card">
                    <h3>${stat.count}</h3>
                    <p>${stat.category} Books</p>
                </div>
            `).join('')}
            ${booksByLanguage.map(stat => `
                <div class="stat-card">
                    <h3>${stat.count}</h3>
                    <p>${stat.language} Books</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderBooks() {
    const filteredBooks = getFilteredBooks();

    if (filteredBooks.length === 0) {
        contentArea.innerHTML = `
            <div class="empty-state">
                <h3>No books found</h3>
                <p>Try adjusting your search or filters.</p>
            </div>
        `;
        return;
    }

    contentArea.innerHTML = `
        <div class="book-grid">
            ${filteredBooks.map(book => `
                <div class="book-card" data-id="${book.id}">
                    <h3>${book.title}</h3>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Year:</strong> ${book.year}</p>
                    <span class="category-tag">${book.category}</span>
                    <span class="language-badge">${book.language}</span>
                </div>
            `).join('')}
        </div>
    `;

    // Add click listeners to book cards
    document.querySelectorAll('.book-card').forEach(card => {
        card.addEventListener('click', () => {
            const bookId = parseInt(card.dataset.id);
            const book = books.find(b => b.id === bookId);
            if (book) {
                showBookDetails(book);
            }
        });
    });
}

function showBookDetails(book) {
    document.getElementById('modal-title').textContent = book.title;
    document.getElementById('modal-author').textContent = book.author;
    document.getElementById('modal-category').textContent = book.category;
    document.getElementById('modal-language').textContent = book.language;
    document.getElementById('modal-year').textContent = book.year;
    document.getElementById('modal-description').textContent = book.description;
    modal.style.display = 'block';
}

function renderAddBookForm() {
    contentArea.innerHTML = `
        <div class="add-book-form">
            <h2>Add New Book</h2>
            <form id="add-book-form">
                <div class="form-group">
                    <label for="book-id">ID:</label>
                    <input type="number" id="book-id" required>
                </div>
                <div class="form-group">
                    <label for="book-title">Title:</label>
                    <input type="text" id="book-title" required>
                </div>
                <div class="form-group">
                    <label for="book-author">Author:</label>
                    <input type="text" id="book-author" required>
                </div>
                <div class="form-group">
                    <label for="book-category">Category:</label>
                    <select id="book-category" required>
                        ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label for="book-language">Language:</label>
                    <select id="book-language" required>
                        ${languages.map(lang => `<option value="${lang}">${lang}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label for="book-year">Year:</label>
                    <input type="number" id="book-year" min="1000" max="2024" required>
                </div>
                <div class="form-group">
                    <label for="book-description">Description:</label>
                    <textarea id="book-description" required></textarea>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    `;

    document.getElementById('add-book-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const newBook = {
            id: parseInt(document.getElementById('book-id').value),
            title: document.getElementById('book-title').value,
            author: document.getElementById('book-author').value,
            category: document.getElementById('book-category').value,
            language: document.getElementById('book-language').value,
            year: parseInt(document.getElementById('book-year').value),
            description: document.getElementById('book-description').value
        };

        // Check if ID already exists
        if (books.some(b => b.id === newBook.id)) {
            alert('Book ID already exists!');
            return;
        }

        books.push(newBook);
        alert('Book added successfully!');
        renderDashboard(); // Go back to dashboard or stay?
        setActiveLink(document.getElementById('dashboard-link'));
    });
}