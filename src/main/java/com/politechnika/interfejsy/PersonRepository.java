package com.politechnika.interfejsy;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

//@Transactional
//@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    Person findById(long id);
    List<Person> findAll();
}
