// Array to store our library books
let books = [];

// DOM Elements
const addBookForm = document.getElementById('addBookForm');
const bookList = document.getElementById('bookList');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

// Handle form submission
addBookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    
    if (title && author) {
        addBook(title, author);
        // Clear input fields
        titleInput.value = '';
        authorInput.value = '';
    }
});

// Add a new book to the array
function addBook(title, author) {
    const newBook = {
        id: Date.now(), // Generate a simple unique ID
        title: title,
        author: author,
        isAvailable: true // Default status is available
    };
    
    books.push(newBook);
    renderBooks();
}

// Delete a book by ID
function deleteBook(id) {
    books = books.filter(book => book.id !== id);
    renderBooks();
}

// Toggle the availability status of a book
function toggleStatus(id) {
    const book = books.find(book => book.id === id);
    if (book) {
        book.isAvailable = !book.isAvailable;
        renderBooks();
    }
}

// Render the book list to the HTML table
function renderBooks() {
    bookList.innerHTML = '';
    
    books.forEach(book => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isAvailable ? 'Available' : 'Borrowed'}</td>
            <td>
                <button class="btn-toggle" onclick="toggleStatus(${book.id})">
                    ${book.isAvailable ? 'Borrow' : 'Return'}
                </button>
                <button class="btn-delete" onclick="deleteBook(${book.id})">Delete</button>
            </td>
        `;
        
        bookList.appendChild(row);
    });
}