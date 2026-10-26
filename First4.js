"use strict";
// Q1 Book Class
class Book {
    bookID;
    title;
    author;
    isAvailable;
    constructor(bookID, title, author, isAvailable) {
        this.bookID = bookID;
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }
    displayBook() {
        console.log(this.bookID);
        console.log(this.title);
        console.log(this.author);
        console.log(this.isAvailable);
    }
    issueBook() {
        if (this.isAvailable) {
            console.log(`Book issued successfully: ${this.bookID}`);
            this.isAvailable = false;
        }
        else {
            console.log("Book is not available");
        }
    }
    returnBook() {
        if (!this.isAvailable) {
            console.log(`Book returned successfully: ${this.bookID}`);
            this.isAvailable = true;
        }
        else {
            console.log("Book is available");
        }
    }
}
const b1 = new Book(1, "Harry Potter", "XYZ", false);
b1.displayBook();
b1.issueBook();
b1.returnBook();
// Q2 Access Modifiers
class LibraryMember {
    memberID = 1;
    borrowedBooks = true;
    membershipType = "quarterly";
    displayInfo() {
        console.log(this.memberID);
        console.log(this.borrowedBooks);
        console.log(this.membershipType);
    }
}
class PMember extends LibraryMember {
    showInfo() {
        console.log(this.memberID);
        console.log(this.membershipType);
    }
}
const m = new LibraryMember();
m.displayInfo();
const pm = new PMember();
pm.showInfo();
// Q3 Inheritance and Method Overriding
class LibraryItem {
    itemID = 1001;
    title = "Harry Potter";
    displayInfo() {
        console.log("Library Item");
        console.log(this.itemID);
        console.log(this.title);
    }
}
class Books extends LibraryItem {
    displayInfo() {
        console.log("Book");
        console.log(this.itemID);
        console.log(this.title);
    }
}
class Magazine extends LibraryItem {
    displayInfo() {
        console.log("Magazine");
        console.log(this.itemID);
        console.log(this.title);
    }
}
const item = new LibraryItem();
item.displayInfo();
const book = new Books();
book.displayInfo();
const magazine = new Magazine();
magazine.displayInfo();
