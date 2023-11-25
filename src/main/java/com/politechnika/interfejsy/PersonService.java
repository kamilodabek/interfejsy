package com.politechnika.interfejsy;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

//@AllArgsConstructor
@Service
public class PersonService {
    private final PersonRepository personRepository;

    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<Person> findAllPersons(){
        Sort sort = Sort.by(Sort.Order.asc("id"));
        return personRepository.findAll(sort);
    }

    public Person findPersonById(long id){
        return personRepository.findById(id);
    }

    public Person addPerson(Person person){
        return personRepository.save(person);
    }

    public Person updatePerson(Person person){
        Optional<Person> existingPersonOptional = personRepository.findById(person.getId());

        if(existingPersonOptional.isPresent()){
            Person existingPerson = existingPersonOptional.get();
            existingPerson.setFirstName(person.getFirstName());
            existingPerson.setLastName(person.getLastName());
            existingPerson.setEmail(person.getEmail());
            existingPerson.setPhoneNumber(person.getPhoneNumber());

            return personRepository.save(existingPerson);
        } else {
            return null;
        }
    }

    public void deletePerson(Long id){
        personRepository.deleteById(id);
    }
}
