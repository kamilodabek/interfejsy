import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";

interface CustomAlert {
  message: string;
  type: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  users: any[]; // Załóżmy, że masz tablicę użytkowników
  searchTerm: string = ''; // Wyszukiwarka
  editingUser: any;
  showSuccessAlert = false;
  showErrorAlert = false;

  constructor(private http: HttpClient) {}

  // Inicjalizacja listy użytkowników (możesz pobrać dane z serwera itp.)
  ngOnInit() {
    // this.users = [
    //   { id: 1, firstname: 'Andrej', lastname: 'Doe', email: 'iksde@gmail.com', gender: 'male' },
    //   { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
    //   { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
    //   { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
    //   { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
    //   { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
    //   { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
    //   { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
    //   { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
    //   { id: 1, firstname: 'John', lastname: 'Doefem', email: 'john.doe@gmail.com', gender: 'female' },
    //   { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', gender: 'male' },
    // ];
    console.log('loadUsers()');
    this.loadUsers();
  }

  loadUsers() {
    // Wysyłanie żądania GET do backendu
    this.http.get<any[]>('http://localhost:8091/person')
      .subscribe(data => {
        this.users = data;
        console.log('Users:', this.users);
      });
  }

  // Logika paginacji
  pageSize = 5; // Liczba użytkowników na stronę
  currentPage = 1;

  // get filteredUsers() {
  //   return this.users.filter(user =>
  //     user.firstname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //     user.lastname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //     user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //     user.gender.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }

  get filteredUsers() {
    return this.users ? this.users.filter(user =>
      ((user?.firstname && user.firstname.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (user?.lastname && user.lastname.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (user?.email && user.email.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (user?.gender && user.gender.toLowerCase().includes(this.searchTerm.toLowerCase())))
    ) : [];
  }

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredUsers.slice(startIndex, endIndex);
  }

  // Obsługa przycisku "Edit"
  editUser(user: any) {
    console.log('Edit user:', user);

    this.editingUser = { ...user };
  }

  saveUser() {
    console.log('Save user:', this.editingUser);

    // Tutaj dodaj logikę wysłania żądania PUT do backendu
    this.http.put('http://localhost:8091/person/update', this.editingUser, { responseType: 'text' })
      .subscribe(
        (response) => {
          console.log('Zaktualizowano użytkownika:', response);
          this.loadUsers();
          this.editingUser = null;
          this.showSuccessAlert = true; // Wyświetl alert po pomyślnej aktualizacji
          setTimeout(() => this.showSuccessAlert = false, 3000);
        },
        (error) => {
          console.error('Błąd podczas aktualizacji użytkownika:', error);
          this.showErrorAlert = true; // Wyświetl alert po błędzie
          setTimeout(() => this.showErrorAlert = false, 3000);

          // Dodatkowe obsługi błędów
          if (error instanceof HttpErrorResponse && error.status === 200) {
            console.error('Błąd parsowania odpowiedzi tekstowej:', error.error);
          }
        }
      );

  }

  cancelEdit() {
    // Po anulowaniu edycji, wyczyść informacje o edycji
    this.editingUser = null;
  }

  // Obsługa przycisku "Delete"
  deleteUser(user: any) {
    const userId = user.id;

    this.http.delete(`http://localhost:8091/person/delete/${userId}`)
      .subscribe(
        () => {
          console.log(`Użytkownik o ID ${userId} został usunięty.`);
          this.loadUsers();
          // Pokaż komunikat po pomyślnym usunięciu
          this.showAlert('Użytkownik został pomyślnie usunięty.', 'success');
        },
        (error) => {
          console.error('Błąd podczas usuwania użytkownika:', error);
          // Pokaż komunikat o błędzie w przypadku niepowodzenia
          this.showAlert('Wystąpił błąd podczas usuwania użytkownika.', 'danger');
        }
      );
  }


  alert: CustomAlert;
  showAlert(message: string, type: string): void {
    this.alert = {
      message,
      type,
    };
    // Automatycznie ukryj komunikat po 3 sekundach
    setTimeout(() => {
      this.alert = null;
    }, 3000);
  }

}
