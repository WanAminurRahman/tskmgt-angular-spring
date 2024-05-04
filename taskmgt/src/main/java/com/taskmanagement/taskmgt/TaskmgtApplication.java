package com.taskmanagement.taskmgt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScans(value = { @ComponentScan("boot.entry"),  
        @ComponentScan("com.taskmanagement.controller"),  
        @ComponentScan("com.taskmanagement.model"),  
        @ComponentScan("com.taskmanagement.repository")})
@EntityScan("com.taskmanagement.model")
@EnableJpaRepositories("com.taskmanagement.repository")
@ComponentScan("com.practice.springboot.controller")
public class TaskmgtApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskmgtApplication.class, args);
	}

}
