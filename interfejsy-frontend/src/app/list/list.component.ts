import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  users: any[]; // Załóżmy, że masz tablicę użytkowników
  searchTerm: string = ''; // Wyszukiwarka

  // Inicjalizacja listy użytkowników (możesz pobrać dane z serwera itp.)
  ngOnInit() {
    this.users = [
      { id: 1, firstname: 'Andrej', lastname: 'Doe', email: 'iksde@gmail.com', gender: 'male' },
      { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
      { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
      { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
      { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
      { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
      { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
      { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
      { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
      { id: 1, firstname: 'John', lastname: 'Doefem', email: 'john.doe@gmail.com', gender: 'female' },
      { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
    ];
  }

  // Logika paginacji
  pageSize = 5; // Liczba użytkowników na stronę
  currentPage = 1;

  get filteredUsers() {
    return this.users.filter(user =>
      user.firstname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.gender.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredUsers.slice(startIndex, endIndex);
  }

  // Obsługa przycisku "Edit"
  editUser(user: any) {
    console.log('Edit user:', user);
    // Tutaj możesz dodać logikę edycji użytkownika
  }

  // Obsługa przycisku "Delete"
  deleteUser(user: any) {
    console.log('Delete user:', user);
    // Tutaj możesz dodać logikę usuwania użytkownika
  }

}
