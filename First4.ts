// Q1 Book Class

class Book {
    bookID: number;
    title: string;
    author: string;
    isAvailable: boolean;

    constructor(
        bookID: number,
        title: string,
        author: string,
        isAvailable: boolean
    ) 
    {
        this.bookID = bookID;
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    displayBook(): void {
        console.log(this.bookID);
        console.log(this.title);
        console.log(this.author);
        console.log(this.isAvailable);
    }

    issueBook(): void {
        if (this.isAvailable) {
            console.log(`Book issued successfully: ${this.bookID}`);
            this.isAvailable = false;
        } else {
            console.log("Book is not available");
        }
    }

    returnBook(): void {
        if (!this.isAvailable) {
            console.log(`Book returned successfully: ${this.bookID}`);
            this.isAvailable = true;
        } else {
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
    public memberID: number = 1;
    private borrowedBooks: boolean = true;
    protected membershipType: string = "quarterly";

    displayInfo(): void {
        console.log(this.memberID);
        console.log(this.borrowedBooks);
        console.log(this.membershipType);
    }
}

class PMember extends LibraryMember {
    showInfo(): void {
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
    itemID: number = 1001;
    title: string = "Harry Potter";

    displayInfo(): void {
        console.log("Library Item");
        console.log(this.itemID);
        console.log(this.title);
    }
}

class Books extends LibraryItem {
    displayInfo(): void {
        console.log("Book");
        console.log(this.itemID);
        console.log(this.title);
    }
}

class Magazine extends LibraryItem {
    displayInfo(): void {
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