package com.taskmanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.taskmanagement.model.Task;

@Component
public interface TaskRepository extends JpaRepository<Task, Long> {

	List<Task> findByTitleContaining(String title);
}