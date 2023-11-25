package com.politechnika.interfejsy;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person")
public class PersonController {
    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/test")
    public int test(){
        return 1;
    }

    @GetMapping
    public ResponseEntity<List<Person>> viewAllPersons(){
        List<Person> personList = personService.findAllPersons();
        return new ResponseEntity<>(personList, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable("id") Long id){
        Person person = personService.findPersonById(id);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addPerson(@RequestBody Person person){
        Person newPerson = personService.addPerson(person);
//        if(newPerson == null){
//            return new ResponseEntity<>(newPerson.getFirstName() + " cannot be added to database", HttpStatus.CONFLICT);
//        }
        return new ResponseEntity<>(newPerson.getFirstName() + " added to database", HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updatePerson(@RequestBody Person person){
        Person newPerson = personService.updatePerson(person);

        if(newPerson == null){
            new ResponseEntity<>("Person doesn't exist", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newPerson.getFirstName(), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePerson(@PathVariable Long id){
        personService.deletePerson(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
